import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";
// import { Socket } from "dgram";

// create express app and http server
const app = express();
const server = http.createServer(app);

// initialize socket.io
export const io = new Server(server, {
  cors: { origin: "*" },
});

// store online users
export const userScocketMap = {}; // {userId: socketId}

// socket.io connection handler
io.on("connection", (Socket) => {
  const userId = Socket.handshake.query.userId;
  console.log("User connected", userId);

  if (userId) userScocketMap[userId] = Socket.id;
  // emit online users to all connected clients
  io.emit("getOnlineUsers", Object.keys(userScocketMap));

  Socket.on("disconnect", () => {
    console.log("User Disconnected", userId);
    delete userScocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userScocketMap));
  });
});

//middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Routes setup
app.use("/api/status", (req, res) => res.send("Server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

// Connect to MongoDB
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server is running on PORT: " + PORT));
