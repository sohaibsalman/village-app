import express, { Request, Response } from "express";

import { Conversation, IMessage } from "../../models/conversation";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

/**
 * Router to create a new message against a conversation
 */
router.post(
  "/api/chat/message/:conversationId",
  async (req: Request, res: Response) => {
    const { conversationId } = req.params;
    const { message }: { message: IMessage } = req.body;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      throw new BadRequestError("Could not find the conversation");
    }

    message.createdAt = new Date();
    conversation?.messages.push(message);
    await conversation?.save();

    res.send(conversation.messages[conversation.messages.length - 1]._id);
  }
);

/**
 * Router to get all messages in a conversation
 */
router.get(
  "/api/chat/message/:conversationId",
  async (req: Request, res: Response) => {
    const { conversationId } = req.params;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      throw new BadRequestError("Could not find the conversation");
    }

    res.send(conversation.messages);
  }
);

export { router as messagesRouter };
