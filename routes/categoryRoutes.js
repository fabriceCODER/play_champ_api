import express from "express";
import { getAllCategories, createCategory } from "../controllers/categoryController.js";
import { verifyToken, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllCategories);
router.post("/", verifyToken, isAdmin, createCategory); // Only admins can add categories

export default router;
