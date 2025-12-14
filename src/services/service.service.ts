import ServiceRepository from "../repositories/service.repository";

class ServiceService {
  serviceRepository: ServiceRepository;

  constructor() {
    this.serviceRepository = new ServiceRepository();
  }

  create = async (data: any) => {
    const service = await this.serviceRepository.create(data);
    return service;
  };
  update = async (id: string, data: any) => {
    const service = await this.serviceRepository.update(id, data);
    return service;
  };
  delete = async (id: string) => {
    const service = await this.serviceRepository.delete(id);
    return service;
  };
  getAll = async () => {
    const service = await this.serviceRepository.getAll();
    return service;
  };
  getById = async (id: string) => {
    const service = await this.serviceRepository.getById(id);
    return service;
  };
}
export default ServiceService;
