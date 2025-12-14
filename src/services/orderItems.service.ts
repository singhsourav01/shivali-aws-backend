import OrderItemRepository from "../repositories/orderItems.repository";

class OrderItemService {
  orderItemRepository: OrderItemRepository;

  constructor() {
    this.orderItemRepository = new OrderItemRepository();
  }

  create = async (data: any) => {
    const bill = await this.orderItemRepository.create(data);
    return bill;
  };
  update = async (id: string, data: any) => {
    const bill = await this.orderItemRepository.update(id, data);
    return bill;
  };

  getById = async (id: string) => {
    const bill = await this.orderItemRepository.getById(id);
    return bill;
  };
  getAll = async () => {
    const bill = await this.orderItemRepository.getAll();
    return bill;
  };
  delete = async (id: string) => {
    const bill = await this.orderItemRepository.delete(id);
    return bill;
  };
}

export default OrderItemService;
