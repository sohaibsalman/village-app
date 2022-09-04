import mongoose from "mongoose";

import { PasswordManager } from "../helpers/password-manager";

// Interface representing the attributes required to create a new user
interface UserAttributes {
  userId: string;
  email?: string;
  mobileNumber?: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

// Interace representing properties that a User Model has (User Collection)
interface UserModel extends mongoose.Model<UserDoc> {
  build(attributes: UserAttributes): UserDoc;
}

// Interface representing properties that a User Document has (single user)
interface UserDoc extends mongoose.Document {
  userId: string;
  email: string;
  mobileNumber: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    password: {
      type: String,
      required: true,
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

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await PasswordManager.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User, UserAttributes };
