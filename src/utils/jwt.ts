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
};
