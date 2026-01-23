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
    const order = await this.orderRepository.create(data);
    return order;
  };
  update = async (id: string, data: any) => {
    const order = await this.orderRepository.update(id, data);
    return order;
  };

  getById = async (order_id: string) => {
    const order = await this.orderRepository.getById(order_id);
    return order;
  };

   getByIdSpecial = async (order_id: string) => {
    const order = await this.orderRepository.getByIdSpecial(order_id);
    return order;
  };
  getAll = async () => {
    const orders = await this.orderRepository.getAll();

    const customers = await Promise.all(
      orders.map((item: any) => this.customerRepository.getById(item.customer_id))
    );

    const result = orders.map((order: any, index: any) => {
      const customer = customers[index];
      return {
        customer_seq: customer?.customer_seq,
        customer_name: customer?.customer_name,
        customer_id: order.customer_id,
        order_id: order.order_id,
        return_expected_by: order.return_expected_by,
        created_at: order.createdAt,
        availability_status: order.availability_status,
        status: order.status,
      };
    });
    return result;
  };

  delete = async (id: string) => {
    const order = await this.orderRepository.delete(id);
    return order;
  };

  getByCustomerId = async (id: string) => {
    const orders = await this.orderRepository.getByCustomerId(id);
    const customers = await Promise.all(
      orders.map((item: any) => this.customerRepository.getById(item.customer_id))
    );

    const result = orders.map((order: any, index: any) => {
      const customer = customers[index];
      return {
        customer_seq: customer?.customer_seq,
        customer_name: customer?.customer_name,
        order_id: order.order_id,
        return_expected_by: order.return_expected_by,
        created_at: order.createdAt,
        status: order.status,
        quantity: order.quantity,
      };
    });

    return result;
  };
  getTodayOrders = async (date: any) => {
    const selectedDate = date ? new Date(date) : new Date();
    const start = new Date(selectedDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setDate(start.getDate() + 1);

    return this.orderRepository.getTodayOrders(start, end);
  };

getOrdersByReturnExpectedDate = async (date: any) => {
  const selectedDate = date ? new Date(date) : new Date();

  // Normalize to UTC day boundaries
  const start = new Date(Date.UTC(
    selectedDate.getUTCFullYear(),
    selectedDate.getUTCMonth(),
    selectedDate.getUTCDate(),
    0, 0, 0, 0
  ));

  const end = new Date(start);
  end.setUTCDate(end.getUTCDate() + 1);

  const orders = await this.orderRepository.getOrdersByReturnExpectedDate(start, end);

  return orders.map((order: any) => {
    const selected_garments: Record<string, number> = {};
    let total = 0;

    order.items.forEach((item: any) => {
      const garmentName = item.garment.garment_name;
      selected_garments[garmentName] =
        (selected_garments[garmentName] || 0) + item.quantity;
      total += item.quantity;
    });

    return {
      order_id: order.order_id,
      customer_name: order.customer.customer_name,
      customer_phone: order.customer.customer_phone,
      customer_seq: order.customer.customer_seq,
      availability_status: order.availability_status,
      return_expected_by: order.return_expected_by,
      status: order.status,
      order_created: order.createdAt,
      total,
      selected_garments,
    };
  });
};



  getOrderDetails = async (order_id: string) => {
    const order = await this.orderRepository.getOrderDetail(order_id);
    return order;
  };
}

export default OrderService;
