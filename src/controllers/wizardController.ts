import { Request, Response } from "express";
import { fetchGreeting, fetchProtected } from "../services/wizardService";

export const getGreeting = (req: Request, res: Response) => {
  const greeting = fetchGreeting();
  res.send(greeting);
};

export const getProtected = (req: Request, res: Response) => {
  const protect = fetchProtected();
  res.send(protect);
};
export const getError = (req: Request, res: Response) => {
  throw new Error("This is a simulated error for testing the error handler.");
};
