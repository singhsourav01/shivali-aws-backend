import jwt, { Secret, SignOptions } from "jsonwebtoken";
import type { StringValue } from "ms";

/* ---------- ENV VALIDATION ---------- */
const JWT_SECRET: Secret = process.env.JWT_SECRET!;
const REFRESH_SECRET: Secret = process.env.JWT_REFRESH_SECRET!;

if (!JWT_SECRET) {
  throw new Error("JWT secrets are not defined");
}

/* ---------- EXPIRY ---------- */
const ACCESS_EXPIRES_IN: StringValue =
  (process.env.ACCESS_TOKEN_EXPIRES_IN as StringValue) || "5m";

const REFRESH_EXPIRES_IN: StringValue =
  (process.env.REFRESH_TOKEN_EXPIRES_IN as StringValue) || "7d";

/* ---------- TOKEN GENERATORS ---------- */
export const generateAccessToken = (payload: object): string => {
  const options: SignOptions = {
    expiresIn: ACCESS_EXPIRES_IN,
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

export const generateRefreshToken = (payload: object): string => {
  const options: SignOptions = {
    expiresIn: REFRESH_EXPIRES_IN,
  };

  return jwt.sign(payload, REFRESH_SECRET, options);
};

/* ---------- VERIFIERS ---------- */
export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, REFRESH_SECRET);
};
