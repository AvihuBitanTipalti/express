import { Request, Response, NextFunction } from "express";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return; // Ensure the function stops here if unauthorized
  }

  const token = authHeader.split(" ")[1];
  if (token === "your-secure-token") {
    next(); // Call next() if authorized
  } else {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
