import { ApiResponse, asyncHandler } from "common-microservices-utils";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import OrderItemService from "../services/orderItems.service";
import { orderItemBodyPick } from "../constants/body.contant";
import _ from "lodash";
import OrderService from "../services/order.service";

class UserController {
  orderItemService: OrderItemService;
  orderService: OrderService;

  constructor() {
    this.orderItemService = new OrderItemService();
    this.orderService = new OrderService();
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
    const userData = _.pick(req.body, orderItemBodyPick);
    const sourav = await this.orderService.update(userData.order_id, {
      status: userData.status,
    });
    console.log(sourav, "sourav singh");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, sourav, API_RESPONSES.USER_UPDATED)
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
