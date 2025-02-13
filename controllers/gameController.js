import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Get All Games
export const getAllGames = async (req, res) => {
    try {
        const games = await prisma.game.findMany();
        res.json(games);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Get Game by ID
export const getGameById = async (req, res) => {
    try {
        const { id } = req.params;
        const game = await prisma.game.findUnique({ where: { id } });

        if (!game) return res.status(404).json({ message: "Game not found" });

        res.json(game);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Create a New Game
export const createGame = async (req, res) => {
    try {
        const { title, description, genre, platform, releaseDate } = req.body;

        const newGame = await prisma.game.create({
            data: { title, description, genre, platform, releaseDate: new Date(releaseDate) },
        });

        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Update a Game
export const updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, genre, platform, releaseDate } = req.body;

        const updatedGame = await prisma.game.update({
            where: { id },
            data: { title, description, genre, platform, releaseDate: new Date(releaseDate) },
        });

        res.json(updatedGame);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Delete a Game
export const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.game.delete({ where: { id } });

        res.json({ message: "Game deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
