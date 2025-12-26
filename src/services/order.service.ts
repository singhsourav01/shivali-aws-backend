import OrderRepository from "../repositories/order.repository";
import CustomerRepository from "../repositories/customer.repository";

class OrderService {
  orderRepository: OrderRepository;
  customerRepository: CustomerRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
    this.customerRepository = new CustomerRepository();
  }

  create = async (data: any) => {
    const bill = await this.orderRepository.create(data);
    return bill;
  };
  update = async (id: string, data: any) => {
    console.log(id, data, " here is my data");
    const bill = await this.orderRepository.update(id, data);
    return bill;
  };

  getById = async () => {
    const bill = await this.orderRepository.getAll();
    return bill;
  };
  getAll = async () => {
    const orders = await this.orderRepository.getAll();

    const customers = await Promise.all(
      orders.map((item) => this.customerRepository.getById(item.customer_id))
    );

    // Merge and select only required fields
    const result = orders.map((order, index) => {
      const customer = customers[index];
      return {
        customer_name: customer?.customer_name,
        customer_id: order.customer_id,
        order_id: order.order_id,
        quantity: order.quantity,
        customer_phone: customer?.customer_phone,
        return_expected_by: order.return_expected_by,
        availability_status: order.availability_status,
        status: order.status,
      };
    });

    return result;
  };

  delete = async (id: string) => {
    const bill = await this.orderRepository.delete(id);
    return bill;
  };

  getByCustomerId = async (id: string) => {
    const orders = await this.orderRepository.getByCustomerId(id);
    const customers = await Promise.all(
      orders.map((item) => this.customerRepository.getById(item.customer_id))
    );

    // Merge and select only required fields
    const result = orders.map((order, index) => {
      const customer = customers[index];
      return {
        customer_name: customer?.customer_name,
        customer_id: order.customer_id,
        order_id: order.order_id,
        order_created: order.createdAt,
        customer_phone: customer?.customer_phone,
        return_expected_by: order.return_expected_by,
        availability_status: order.availability_status,
        status: order.status,
        quantity: order.quantity,
      };
    });

    return result;
  };
}

export default OrderService;
