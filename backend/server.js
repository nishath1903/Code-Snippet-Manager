import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import snippetRoutes from "./routes/snippetRoutes.js";


dotenv.config();
connectDB();

const app = express();

// Replace app.use(cors()) with this:
app.use(cors({
  origin: ["http://localhost:5173", /\.vercel\.app$/], // Allows local dev and any Vercel deployment
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Mount routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Code Snippet Manager API is running...");
});

app.use("/api/snippets", snippetRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


