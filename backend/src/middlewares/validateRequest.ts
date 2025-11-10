import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validateRequest =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = err.issues.map((issue) => issue.message);
        res.status(400).json({ message: "Validation failed", errors });
      } else {
        res.status(500).json({ message: "Internal validation error" });
      }
    }
  };
