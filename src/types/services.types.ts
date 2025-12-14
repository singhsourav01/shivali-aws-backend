import { prisma } from "../configs/db.config";

export type CreateServiceType = Parameters<
  typeof prisma.service.create
>[0]["data"];

export type UpdateServiceType = Parameters<
  typeof prisma.service.update
>[0]["data"];
