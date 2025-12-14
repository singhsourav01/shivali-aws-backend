import { prisma } from "../configs/db.config";

export type CreateUserType = Parameters<typeof prisma.user.create>[0]["data"];

export type UpdateUserType = Parameters<typeof prisma.user.update>[0]["data"];

export type GetAllUsersParams = {
  page: number;
  limit: number;
};
