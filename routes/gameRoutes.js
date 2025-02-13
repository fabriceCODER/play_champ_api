import express from "express";
import {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame,
} from "../controllers/gameController.js";
import { verifyToken, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllGames);       // Public: Get all games
router.get("/:id", getGameById);     // Public: Get game by ID

router.post("/", verifyToken, isAdmin, createGame);    // Admin only: Create game
router.put("/:id", verifyToken, isAdmin, updateGame);  // Admin only: Update game
router.delete("/:id", verifyToken, isAdmin, deleteGame); // Admin only: Delete game

export default router;
