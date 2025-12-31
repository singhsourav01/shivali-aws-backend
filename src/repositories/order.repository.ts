import { prisma } from "../configs/db.config";
import { queryHandler } from "../utils/helper";

class Bill {
  create = async (data: any) => {
    return queryHandler(async () => await prisma.order.create({ data }));
  };

  update = async (order_id: string, data: any) => {
    return queryHandler(
      async () =>
        await prisma.order.update({
          where: { order_id },
          data,
        })
    );
  };

  getByorder_Id = async (order_id: string) => {
    return queryHandler(
      async () => await prisma.order.findUnique({ where: { order_id } })
    );
  };

  delete = async (order_id: string) => {
    return queryHandler(
      async () => await prisma.order.delete({ where: { order_id } })
    );
  };
  getAll = async () => {
    const data = await queryHandler(async () =>
      prisma.order.findMany({
        orderBy: {
          createdAt: "desc",
        },
        distinct: ["customer_id"],
      })
    );
    return data;
  };

  getByCustomerId = async (customer_id: string) => {
    return queryHandler(
      async () =>
        await prisma.order.findMany({
          where: { customer_id },
          orderBy: { createdAt: "desc" },
        })
    );
  };
  getTodayOrders = async (start: Date, end: Date) => {
    return prisma.order.findMany({
      where: {
        createdAt: {
          gte: start,
          lt: end,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  };
}

export default Bill;
