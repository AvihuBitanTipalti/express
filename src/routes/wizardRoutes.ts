import express from "express";
import {
  getError,
  getGreeting,
  getProtected,
} from "../controllers/wizardController";
import { authenticate } from "../middleware/authenticate";

const router = express.Router();

router.get("/", getGreeting);

router.get("/protected", authenticate, getProtected);

router.get("/error", getError);

export { router as wizardRoutes };
