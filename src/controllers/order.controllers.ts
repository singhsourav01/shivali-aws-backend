import { ApiResponse, asyncHandler } from "common-microservices-utils";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import OrderService from "../services/order.service";
import { orderBodyPick } from "../constants/body.contant";
import _ from "lodash";

class OrderController {
  orderService: OrderService;
  constructor() {
    this.orderService = new OrderService();
  }

  create = asyncHandler(async (req: Request, res: Response) => {
    const data = _.pick(req.body, orderBodyPick);
    const order = await this.orderService.create({
      customer_id: data.customer_id,
      availability_status: data.availability_status,
      return_expected_by: data.return_expected_by,
      status: data.status,
      quantity: data.quantity,
    });

    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(StatusCodes.OK, order, API_RESPONSES.USER_CREATED));
  });

  getById = asyncHandler(async (req: Request, res: Response) => {
    // const { id } = req.params;
    const data = await this.orderService.getById();

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_FETCHED)
      );
  });
  delete = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.orderService.delete(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, null, API_RESPONSES.USER_DELETED)
      );
  });
  update = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userData = _.pick(req.body, orderBodyPick);
    const data = await this.orderService.update(id, {
      customer_id: userData.customer_id,
      availability_status: userData.availability_status,
      return_expected_by: userData.return_expected_by,
      status: userData.status,
      quantity: userData.quantity,

    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_UPDATED)
      );
  });
  get = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.orderService.getAll();

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.USERS_FETCHED)
      );
  });
  getByCustomerId = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.orderService.getByCustomerId(id);

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.USERS_FETCHED)
      );
  });
}

export default OrderController;
