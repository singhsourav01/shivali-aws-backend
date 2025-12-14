import { prisma } from "../configs/db.config";

export type createCustomerType = Parameters<
  typeof prisma.customer.create
>[0]["data"];

export type updateCustomerType = Parameters<
  typeof prisma.customer.update
>[0]["data"];
