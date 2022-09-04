import express, { Request, Response } from "express";
import { body } from "express-validator";

import { User, UserAttributes } from "../../models/user";
import { TokenManager } from "../../helpers/token-manager";
import { validateRequest } from "../../middlewares/validate-request";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password length must be atleast 4"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      userId,
      email,
      password,
      mobileNumber,
      firstName,
      lastName,
      dateOfBirth,
    }: UserAttributes = req.body;

    const existingUser = await User.findOne({
      $or: [{ email: userId }, { mobileNumber: userId }],
    });
    if (existingUser) {
      throw new BadRequestError("User already exists");
    }

    const user = User.build({
      userId,
      email,
      password,
      mobileNumber,
      firstName,
      lastName,
      dateOfBirth,
    });
    await user.save();

    const userJwt = TokenManager.generateJwtToken(user);
    res.status(201).send({ ...user.toJSON(), access_token: userJwt });
  }
);

export { router as signupRouter };
