import { prisma } from "../configs/db.config";
import { queryHandler } from "../utils/helper";

class ServiceRepository {
  create = async (data: any) => {
    return queryHandler(async () => await prisma.service.create({ data }));
  };

  update = async (service_id: string, data: any) => {
    return queryHandler(
      async () => await prisma.service.update({ where: { service_id }, data })
    );
  };

  delete = async (service_id: string) => {
    return queryHandler(
      async () => await prisma.service.delete({ where: { service_id } })
    );
  };

  getById = async (service_id: string) => {
    return queryHandler(
      async () => await prisma.service.findUnique({ where: { service_id } })
    );
  };

  getAll = async () => {
    return queryHandler(async () => await prisma.service.findMany());
  };
}

export default ServiceRepository;
