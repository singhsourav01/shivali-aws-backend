import { ApiResponse, asyncHandler } from "common-microservices-utils";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import ServiceService from "../services/service.service";
import { servicesBodyPick } from "../constants/body.contant";
import _ from "lodash";

class UserController {
  serviceService: ServiceService;
  constructor() {
    this.serviceService = new ServiceService();
  }

  create = asyncHandler(async (req: Request, res: Response) => {
    const data = _.pick(req.body, servicesBodyPick);
    const user = await this.serviceService.create({
      service_name: data.service_name,
      garment_id: data.garment_id,
    });

    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(StatusCodes.OK, user, API_RESPONSES.USER_CREATED));
  });

  getById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.serviceService.getById(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_FETCHED)
      );
  });
  delete = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.serviceService.delete(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, null, API_RESPONSES.USER_DELETED)
      );
  });
  update = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userData = _.pick(req.body, servicesBodyPick);
    const data = await this.serviceService.update(id, {
      service_name: userData.service_name,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_UPDATED)
      );
  });
  get = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.serviceService.getAll();

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.USERS_FETCHED)
      );
  });
}

export default UserController;
