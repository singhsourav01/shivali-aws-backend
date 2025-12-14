import { prisma } from "../configs/db.config";
import { CreateUserType } from "../types/user.types";
import { queryHandler } from "../utils/helper";

class UserRepository {
  create = async (data: CreateUserType) => {
    return queryHandler(async () => await prisma.user.create({ data }));
  };

  update = async (user_id: string, data: CreateUserType) => {
    return queryHandler(
      async () =>
        await prisma.user.update({
          where: { user_id },
          data,
        })
    );
  };

  getById = async (user_id: string) => {
    return queryHandler(
      async () =>
        await prisma.user.findUnique({
          where: { user_id },
        })
    );
  };

  delete = async (user_id: string) => {
    return queryHandler(
      async () =>
        await prisma.user.delete({
          where: { user_id },
        })
    );
  };

  getByEmailOrPhone = async (user_value: string) => {
  return prisma.user.findFirst({
    where: {
      OR: [
        {
          user_phone: {
            contains: user_value,
          },
        },
        {
          user_email: {
            contains: user_value,
          },
        },
      ],
    },
  });
};


  getByPhone = async (user_phone: string) => {
    return queryHandler(
      async () =>
        await prisma.user.findUnique({
          where: { user_phone },
        })
    );
  };

  getByEmail = async (user_email: string) => {
    return queryHandler(
      async () =>
        await prisma.user.findUnique({
          where: { user_email },
        })
    );
  };

  getAll = async () => {
    return queryHandler(async () => await prisma.user.findMany());
  };
}

export default UserRepository;
