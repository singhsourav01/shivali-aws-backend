import { ApiResponse, asyncHandler } from "common-microservices-utils";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import CustomerService from "../services/customer.service";
import { customerBodyPick } from "../constants/body.contant";
import _ from "lodash";

class UserController {
  customerService: CustomerService;
  constructor() {
    this.customerService = new CustomerService();
  }

  create = asyncHandler(async (req: Request, res: Response) => {
    const data = req.body;
    const user = await this.customerService.create({
      customer_name: data.customer_name,
      customer_phone: data.customer_phone,
      customer_email: data.customer_email,
      user_id: "1583b9fa-79bd-435e-a4a8-e0e0d226c90d",
      customer_address: data.customer_addr,
    });

    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(StatusCodes.OK, user, API_RESPONSES.USER_CREATED));
  });

  getById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.customerService.getById(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_FETCHED)
      );
  });
  delete = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.customerService.delete(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, null, API_RESPONSES.USER_DELETED)
      );
  });
  update = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userData = _.pick(req.body, customerBodyPick);
    const data = await this.customerService.update(id, {
      customer_name: userData.customer_name,
      customer_phone: userData.customer_phone,
      customer_email: userData.customer_email,
      customer_address: userData.customer_address,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_UPDATED)
      );
  });
  get = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.customerService.getAll();

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.USERS_FETCHED)
      );
  });
  getByNameOrPhone = asyncHandler(async (req: Request, res: Response) => {
    const { search } = req.query;

    const result = await this.customerService.getByNameOrPhone(search);

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.USERS_FETCHED)
      );
  });
}

export default UserController;
