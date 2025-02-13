import express from "express";
import { fetchRealWorldGames } from "../utils/fetchGames.js";

const router = express.Router();

router.get("/real-world", fetchRealWorldGames);

export default router;
