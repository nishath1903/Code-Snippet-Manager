import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createSnippet,
  getSnippets,
  updateSnippet,
  deleteSnippet
} from "../controllers/snippetController.js";

const router = express.Router();

router.post("/", authMiddleware, createSnippet);
router.get("/", authMiddleware, getSnippets);
router.get("/:id", authMiddleware, getSnippets);
router.put("/:id", authMiddleware, updateSnippet);
router.delete("/:id", authMiddleware, deleteSnippet);

export default router;
