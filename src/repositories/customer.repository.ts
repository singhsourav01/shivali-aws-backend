import { prisma } from "../configs/db.config";
import { queryHandler } from "../utils/helper";

class Customer {
create = async (data: any) => {
  return queryHandler(async () => {
    return prisma.$transaction(async (tx) => {
      const seq = await tx.customerSequence.create({
        data: {},
      });

      const customerUid = `CU_${seq.id}`;

      return tx.customer.create({
        data: {
          ...data,
          customer_unique_id: customerUid,
        },
      });
    });
  });
};


  update = async (customer_id: string, data: any) => {
    return queryHandler(
      async () =>
        await prisma.customer.update({
          where: { customer_id },
          data,
        })
    );
  };

  getById = async (customer_id: string) => {
    return queryHandler(
      async () => await prisma.customer.findUnique({ where: { customer_id } })
    );
  };
  getByName = async (customer_name: string) => {
    return queryHandler(
      async () => await prisma.customer.findFirst({ where: { customer_name } })
    );
  };

  delete = async (customer_id: string) => {
    return queryHandler(
      async () => await prisma.customer.delete({ where: { customer_id } })
    );
  };

  getAll = async () => {
    return queryHandler(async () => await prisma.customer.findMany());
  };

  getByNameOrPhone = async (search: any) => {
    return await prisma.customer.findMany({
      where: {
        OR: [
          {
            customer_name: {
              contains: search,
            },
          },
          {
            customer_phone: {
              contains: search,
            },
          },
        ],
      },
    });
  };
}

export default Customer;
