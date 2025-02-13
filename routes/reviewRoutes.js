import express from "express";
import { createReview } from "../controllers/reviewController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createReview); // Only authenticated users can review

export default router;
