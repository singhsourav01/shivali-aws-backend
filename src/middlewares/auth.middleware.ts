<<<<<<< HEAD
import { verifyToken } from "../utils/jwt";

export const authenticate = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
=======
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
>>>>>>> 2acefb3d3bc37fd51ba4dcc7a5f2c09d82b5d0f6
  }

  const token = authHeader.split(" ")[1];

  try {
<<<<<<< HEAD
    req.user = verifyToken(token);
    next();
  } catch {
    return res.status(401).json({ message: "Token expired or invalid" });
=======
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
>>>>>>> 2acefb3d3bc37fd51ba4dcc7a5f2c09d82b5d0f6
  }
};
