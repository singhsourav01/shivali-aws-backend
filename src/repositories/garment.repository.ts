import { queryHandler } from "../utils/helper";
import { prisma } from "../configs/db.config";

class Garments {
  create = async (data: any) => {
    return queryHandler(async () => await prisma.garment.create({ data }));
  };

  update = async (garment_id: string, data: any) => {
    return queryHandler(
      async () =>
        await prisma.garment.update({
          where: { garment_id },
          data,
        })
    );
  };

  getById = async (garment_id: string) => {
    return queryHandler(
      async () => await prisma.garment.findUnique({ where: { garment_id } })
    );
  };

  delete = async (garment_id: string) => {
    return queryHandler(
      async () => await prisma.garment.delete({ where: { garment_id } })
    );
  };

  getAll = async () => {
    return queryHandler(async () => await prisma.garment.findMany());
  };
}

export default Garments;
