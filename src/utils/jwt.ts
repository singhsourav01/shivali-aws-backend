import jwt, { Secret, SignOptions } from "jsonwebtoken";
import type { StringValue } from "ms";

const JWT_SECRET: Secret = process.env.JWT_SECRET!;

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

const JWT_EXPIRES_IN: StringValue =
  (process.env.JWT_EXPIRES_IN as StringValue) || "7d";

export const signToken = (payload: object): string => {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN,
  };

  return jwt.sign(payload, JWT_SECRET, options);
};
