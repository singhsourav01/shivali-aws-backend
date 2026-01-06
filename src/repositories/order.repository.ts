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
    const orders = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: start,
          lt: end,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        order_id: true,
        availability_status: true,
        return_expected_by: true,
        status: true,
        createdAt: true,
        customer: {
          select: {
            customer_name: true,
            customer_phone: true,
          },
        },
        items: {
          select: {
            quantity: true,
            garment: {
              select: {
                garment_name: true,
              },
            },
          },
        },
      },
    });

    return orders.map((order) => {
      const selected_garments: Record<string, number> = {};
      let total = 0;

      order.items.forEach((item) => {
        const garmentName = item.garment.garment_name;

        selected_garments[garmentName] =
          (selected_garments[garmentName] || 0) + item.quantity;

        total += item.quantity;
      });

      return {
        order_id: order.order_id,
        customer_name: order.customer.customer_name,
        customer_phone: order.customer.customer_phone,
        availability_status: order.availability_status,
        return_expected_by: order.return_expected_by,
        status: order.status,
        order_created: order.createdAt,
        total,
        selected_garments,
      };
    });
  };

  getOrderDetail = async (order_id: string) => {
    return prisma.order.findUnique({
      where: { order_id: order_id },
      select: {
        return_expected_by: true,
        createdAt: true,
        customer: {
          select: {
            customer_name: true,
          },
        },
        items: {
          select: {
            quantity: true,
            garment: {
              select: {
                garment_name: true,
              },
            },
          },
        },
      },
    });
  };
}

export default Bill;
