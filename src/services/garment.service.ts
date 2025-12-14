import GarmentRepository from "../repositories/garment.repository";

class GarmentService {
  garmentRepository: GarmentRepository;

  constructor() {
    this.garmentRepository = new GarmentRepository();
  }

  create = async (data: any) => {
    const garment = await this.garmentRepository.create(data);
    return garment;
  };

  update = async (id: string, data: any) => {
    const garment = await this.garmentRepository.update(id, data);
    return garment;
  };

  getAll = async () => {
    const garment = await this.garmentRepository.getAll();
    return garment;
  };

  delete = async (id: string) => {
    const garment = await this.garmentRepository.delete(id);
    return garment;
  };

  getById = async (id: string) => {
    const garment = await this.garmentRepository.getById(id);
    return garment;
  };
}

export default GarmentService;
