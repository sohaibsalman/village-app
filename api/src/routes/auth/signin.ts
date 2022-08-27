import express, { Request, Response } from "express";
import { body } from "express-validator";

import { User } from "../../models/user";
import { BadRequestError } from "../../errors/bad-request-error";
import { validateRequest } from "../../middlewares/validate-request";
import { PasswordManager } from "../../helpers/password-manager";
import { TokenManager } from "../../helpers/token-manager";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("You must enter a passowrd"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError("Invalid Credentials");
    }

    const isValidPassword = await PasswordManager.compare(
      existingUser.password,
      password
    );

    if (!isValidPassword) {
      throw new BadRequestError("Invalid Credentials");
    }

    // Generate token
    const userJwt = TokenManager.generateJwtToken(existingUser);

    res.status(200).send({ access_token: userJwt });
  }
);

export { router as signinRouter };
