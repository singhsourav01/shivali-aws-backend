import { ApiResponse, asyncHandler } from "common-microservices-utils";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import GarmentService from "../services/garment.service";
import { garmentBodyPick } from "../constants/body.contant";
import _ from "lodash";

class UserController {
  garmentService: GarmentService;
  constructor() {
    this.garmentService = new GarmentService();
  }

  create = asyncHandler(async (req: Request, res: Response) => {
    const data = _.pick(req.body, garmentBodyPick);
    const user = await this.garmentService.create({
      garment_name: data.garment_name,
      description: data.description,
    });

    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(StatusCodes.OK, user, API_RESPONSES.USER_CREATED));
  });

  getById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.garmentService.getById(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_FETCHED)
      );
  });
  delete = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.garmentService.delete(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, null, API_RESPONSES.USER_DELETED)
      );
  });
  update = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userData = _.pick(req.body, garmentBodyPick);
    const data = await this.garmentService.update(id, {
      name: userData.name,
      description: userData.description,
      isActive: userData.isActive,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_UPDATED)
      );
  });
  get = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.garmentService.getAll();

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.USERS_FETCHED)
      );
  });
}

export default UserController;
