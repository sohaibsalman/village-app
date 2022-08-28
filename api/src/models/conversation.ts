import mongoose, { Types, Schema, Model } from "mongoose";

interface IParticipantsDetails {
  userId: string;
  fullName: string;
  avatar?: string;
}

interface IMessage {
  _id: string;
  senderId: string;
  createdAt: Date;
  messageBody: string;
}

interface IConversation {
  participants: Types.Array<IParticipantsDetails>;
  messages: Types.DocumentArray<IMessage>;
  updatedAt: Date;
  lastMessage: string;
}

const conversationSchema = new Schema<IConversation, Model<IConversation>>({
  participants: [{ userId: String, fullName: String, avatar: String }],
  messages: [{ senderId: String, createdAt: Date, messageBody: String }],
  lastMessage: String,
  updatedAt: Date,
});

const Conversation = mongoose.model("Conversation", conversationSchema);

export { Conversation, IParticipantsDetails, IMessage };
