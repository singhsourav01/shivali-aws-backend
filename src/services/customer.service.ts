import { ApiError } from "common-microservices-utils";
import CustomerRepository from "../repositories/customer.repository";
import { StatusCodes } from "http-status-codes";
import { API_ERRORS } from "../constants/app.constant";

class CustomerService {
  customerRepository: CustomerRepository;

  constructor() {
    this.customerRepository = new CustomerRepository();
  }

  create = async (data: any) => {
    const checkNameExist = await this.customerRepository.getByName(
      data.customer_name || ""
    );
        const checkPhoneExist = await this.customerRepository.getByPhone(
      data.customer_phone
    );

    if(checkNameExist && checkPhoneExist){
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        API_ERRORS.CUSTOMER_NAME_PHONE_EXISTS
      );
    }

    if (checkNameExist) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        API_ERRORS.CUSTOMER_NAME_EXISTS
      );
    }
    if (checkPhoneExist) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        API_ERRORS.CUSTOMER_PHONE_EXISTS
      );
    }

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
