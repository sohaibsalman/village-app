import mongoose, { Model, Types } from "mongoose";

import { PasswordManager } from "../helpers/password-manager";
import ICoordinates from "../interfaces/ICoordinates";

// Interface representing the attributes required to create a new user
interface IUser {
  _id: string;
  userId: string;
  password: string;
  avatar: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email?: string;
  mobileNumber?: string;
  gender: string;
  companyName: string;
  companyWebsite: string;
  linkedInProfile: string;
  areasOfInterest: Types.Array<string>;
  address: string;
  currentLocation?: ICoordinates;
  createdAt: Date;
  isActive: boolean;
}

const userSchema = new mongoose.Schema<IUser, Model<IUser>>(
  {
    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    gender: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyWebsite: {
      type: String,
    },
    linkedInProfile: {
      type: String,
    },
    areasOfInterest: {
      type: [String],
    },
    address: {
      type: String,
    },
    currentLocation: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
    createdAt: {
      type: Date,
    },
    isActive: {
      type: Boolean,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret.password;
        delete ret.__v;
        delete ret._id;
      },
    },
  }
);

userSchema.index({ currentLocation: "2dsphere" });

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await PasswordManager.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

const User = mongoose.model("User", userSchema);

export { User, IUser };
