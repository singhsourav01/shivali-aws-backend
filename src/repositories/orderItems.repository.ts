import { prisma } from "../configs/db.config";
import { queryHandler } from "../utils/helper";

class OrderItems {
  create = async (data: any) => {
    return queryHandler(async () => await prisma.orderItem.create({ data }));
  };

  update = async (order_item_id: string, data: any) => {
    return queryHandler(
      async () =>
        await prisma.orderItem.update({
          where: { order_item_id },
          data,
        })
    );
  };

  getById = async (order_item_id: string) => {
    return queryHandler(
      async () =>
        await prisma.orderItem.findUnique({ where: { order_item_id } })
    );
  };

  delete = async (order_item_id: string) => {
    return queryHandler(
      async () => await prisma.orderItem.delete({ where: { order_item_id } })
    );
  };

  getAll = async () => {
    return queryHandler(async () => await prisma.orderItem.findMany());
  };
}

export default OrderItems;
