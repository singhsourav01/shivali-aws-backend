// utils/jwt.ts
import jwt, { Secret, SignOptions } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;

const SIGN_OPTIONS: SignOptions = {
  expiresIn: "7d",
};

export const signToken = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET, SIGN_OPTIONS);
};


export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
