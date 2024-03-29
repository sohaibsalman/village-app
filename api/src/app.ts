import express from "express";
import mongoose from "mongoose";
import "express-async-errors";
import path from "path";

import { config } from "./config";
import { signupRouter } from "./routes/auth/signup";
import { signinRouter } from "./routes/auth/signin";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";
import { conversationRouter } from "./routes/chat/conversation";
import { messagesRouter } from "./routes/chat/message";
import { profileRouter } from "./routes/profile/profile";

const app = express();

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "uploads")));

app.use(signupRouter);
app.use(signinRouter);
app.use(conversationRouter);
app.use(messagesRouter);
app.use(profileRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@village.4llr4ay.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
  } catch (ex) {
    console.error(ex);
  }

  app.listen(config.server.port, () => {
    console.log(`Listening at port ${config.server.port}`);
  });
};

start();
