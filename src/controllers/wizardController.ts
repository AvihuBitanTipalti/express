import { Request, Response } from "express";
import { fetchGreeting } from "../services/wizardService";

export const getGreeting = (req: Request, res: Response) => {
  const greeting = fetchGreeting();
  res.send(greeting);
};
