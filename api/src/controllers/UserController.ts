import { IUser, User } from "../models/user";
import { IUserFilter } from "../interfaces/IUserFilter";
import ICoordinates from "../interfaces/ICoordinates";
import { NotFoundError } from "../errors/not-found-error";

class UserController {
  createUser(user: IUser) {}

  async getAllUsers(): Promise<IUser[]> {
    return await User.find({});
  }

  async getUserById(id: string): Promise<IUser | null> {
    const user = await User.findById(id);
    if (!user) throw new NotFoundError();

    return user;
  }

  async searchUsers(filters: IUserFilter): Promise<IUser[]> {
    const query: any = {};

    if (filters.gender) {
      query["gender"] = filters.gender;
    }

    const users = await User.find(query);
    return users;
  }

  async updateUser(
    userId: string,
    currentLocation: ICoordinates
  ): Promise<boolean> {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      currentLocation,
    });

    if (!updatedUser) throw new NotFoundError();
    return true;
  }
}

export default UserController;
