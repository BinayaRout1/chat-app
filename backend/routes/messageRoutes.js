import express from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  getMessages,
  getusersForSidebar,
  markMessageAsSeen,
  sendMessage,
} from "../controllers/messageController.js";

const messageRouter = express.Router();

// ✅ static first
messageRouter.get("/users", protectRoute, getusersForSidebar);
messageRouter.get("/mark/:id", protectRoute, markMessageAsSeen);

// ✅ dynamic after static
messageRouter.get("/:id", protectRoute, getMessages);

// ✅ send message
messageRouter.post("/send/:id", protectRoute, sendMessage);

export default messageRouter;
