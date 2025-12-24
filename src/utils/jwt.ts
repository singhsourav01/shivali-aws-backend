<<<<<<< HEAD
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import type { StringValue } from "ms";

const JWT_SECRET: Secret = process.env.JWT_SECRET!;

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

const JWT_EXPIRES_IN: StringValue =
  (process.env.JWT_EXPIRES_IN as StringValue) || 60;

export const signToken = (payload: object): string => {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN,
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
=======
import jwt, { Secret } from "jsonwebtoken";

const ACCESS_SECRET: Secret = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_SECRET: Secret = process.env.REFRESH_TOKEN_SECRET!;

export const generateAccessToken = (payload: object): string => {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: Number(process.env.ACCESS_TOKEN_EXPIRES_IN),
  });
};

export const generateRefreshToken = (payload: object): string => {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: Number(process.env.REFRESH_TOKEN_EXPIRES_IN),
  });
>>>>>>> 2acefb3d3bc37fd51ba4dcc7a5f2c09d82b5d0f6
};
