import express, { Request, Response } from "express";
import UserController from "../controllers/UserController";
import ICoordinates from "../interfaces/ICoordinates";
import { IUserFilter } from "../interfaces/IUserFilter";

const router = express.Router();

router.get("/api/users/getAll", async (req: Request, res: Response) => {
  const users = await new UserController().getAllUsers();
  res.send(users);
});

router.get("/api/users/:id", async (req: Request, res: Response) => {
  const user = await new UserController().getUserById(req.params.id);
  res.send(user);
});

router.post("/api/users/search-users", async (req: Request, res: Response) => {
  const { radius, areasOfInterest, gender }: IUserFilter = req.body;
  const filters: IUserFilter = {
    radius,
    areasOfInterest,
    gender,
  };

  const users = await new UserController().searchUsers(filters);
  res.send(users);
});

router.put(
  "/api/users/update-current-location/:id",
  async (req: Request, res: Response) => {
    const userId = req.params.id;
    const currentLocation: ICoordinates = req.body.currentLocation;

    await new UserController().updateUser(userId, currentLocation);

    res.send(currentLocation);
  }
);

export { router as userRouter };
