import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import gameRoutes from "./routes/gameRoutes.js";
import authRoute from "./routes/authRoute.js";

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/games", gameRoutes);
app.use("/api/auth", authRoute);

export default app;
