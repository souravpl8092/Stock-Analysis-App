import express from "express";
import cors from "cors";
import stockRoutes from "./routes/stockRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/stocks", stockRoutes);

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server started successfully`);
  console.log(`🌐 Listening on port ${PORT}`);
  console.log(`🚀 Ready to accept requests`);
});
