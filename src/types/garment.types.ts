import { prisma } from "../configs/db.config";

export type CreateGarmentType = Parameters<
  typeof prisma.garment.create
>[0]["data"];

export type UpdateGarmentType = Parameters<
  typeof prisma.garment.update
>[0]["data"];
