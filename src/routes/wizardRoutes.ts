import express from "express";
import { getGreeting } from "../controllers/wizardController";

const router = express.Router();

router.get("/", getGreeting);

export { router as wizardRoutes };
