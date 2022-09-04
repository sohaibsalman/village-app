import express, { Request, Response } from "express";
import RequireAuth from "../../middlewares/require-auth";

import { Conversation, IParticipantsDetails } from "../../models/conversation";

const router = express.Router();

/**
 * Route to get all conversations against a user
 */
router.get(
  "/api/chat/conversation/",
  RequireAuth,
  async (req: Request, res: Response) => {
    const userId = req.currentUser?.id;

    const conversation = await Conversation.find({
      participants: { $elemMatch: { userId: userId } },
    });

    res.send(conversation);
  }
);

/**
 * Route to create a new conversation between two users
 */
router.post(
  "/api/chat/conversation",
  RequireAuth,
  async (req: Request, res: Response) => {
    const participants: IParticipantsDetails[] = req.body.participants;

    const conversation = new Conversation({
      participants: participants,
      messages: [],
      updatedAt: Date.now(),
      lastMessage: "",
    });

    await conversation.save();
    res.send(conversation._id);
  }
);

export { router as conversationRouter };
