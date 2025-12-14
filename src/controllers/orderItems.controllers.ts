import { ApiResponse, asyncHandler } from "common-microservices-utils";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import OrderItemService from "../services/orderItems.service";
import { orderItemBodyPick } from "../constants/body.contant";
import _ from "lodash";

class UserController {
  orderItemService: OrderItemService;
  constructor() {
    this.orderItemService = new OrderItemService();
  }

  create = asyncHandler(async (req: Request, res: Response) => {
    const data = _.pick(req.body, orderItemBodyPick);
    const billItem = await this.orderItemService.create({
      order_id: data.order_id,
      garment_id: data.garment_id,
      quantity: data.quantity,
      status: "PENDING",
    });

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, billItem, API_RESPONSES.USER_CREATED)
      );
  });

  getById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.orderItemService.getById(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_FETCHED)
      );
  });
  delete = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.orderItemService.delete(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, null, API_RESPONSES.USER_DELETED)
      );
  });
  update = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userData = _.pick(req.body, orderItemBodyPick);
    const data = await this.orderItemService.update(id, {
      customer_id: userData.customer_id,
      return_expected_by: userData.return_expected_by,
      status: userData.status,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_UPDATED)
      );
  });
  get = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.orderItemService.getAll();

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.USERS_FETCHED)
      );
  });
}

export default UserController;
