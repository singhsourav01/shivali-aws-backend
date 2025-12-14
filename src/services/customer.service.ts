import CustomerRepository from "../repositories/customer.repository";

class CustomerService {
  customerRepository: CustomerRepository;

  constructor() {
    this.customerRepository = new CustomerRepository();
  }

  create = async (data: any) => {
    const customer = await this.customerRepository.create(data);
    return customer;
  };

  update = async (id: string, data: any) => {
    const customer = await this.customerRepository.update(id, data);
    return customer;
  };

  getById = async (id: string) => {
    const customer = await this.customerRepository.getById(id);
    return customer;
  };

  getByNameOrPhone = async (search: any) => {
    const customer = await this.customerRepository.getByNameOrPhone(search);
    return customer;
  };

  delete = async (id: string) => {
    const customer = await this.customerRepository.delete(id);
    return customer;
  };

  getAll = async () => {
    const customer = await this.customerRepository.getAll();
    return customer;
  };
}

export default CustomerService;
