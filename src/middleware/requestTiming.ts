import { Request, Response, NextFunction } from "express";

export const requestTiming = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = process.hrtime();
  res.on("finish", () => {
    const diff = process.hrtime(start);
    const time = diff[0] * 1e3 + diff[1] * 1e-6;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.url} - ${time.toFixed(
        3
      )}ms`
    );
  });
  next();
};
