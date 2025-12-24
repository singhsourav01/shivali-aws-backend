import { ApiResponse, asyncHandler } from "common-microservices-utils";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import UserService from "../services/user.service";
import { signupBodyPick } from "../constants/body.contant";
import _ from "lodash";
import { signToken } from "../utils/jwt";

class UserController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  create = asyncHandler(async (req: Request, res: Response) => {
    const data = _.pick(req.body, signupBodyPick);
    const user = await this.userService.create({
      user_name: data.user_name,
      user_phone: data.user_phone,
      user_email: data.user_email,
      // isActive: data.isActive,
      user_role: data.user_role,
      user_password: data.user_password,
    });

    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(StatusCodes.OK, user, API_RESPONSES.USER_CREATED));
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const { user_value, user_password } = req.body;

    const user = await this.userService.login(user_value, user_password);

    const token = signToken({
      id: user.user_id,
      role: user.user_role,
    });

    return res.status(StatusCodes.OK).json(
      new ApiResponse(
        StatusCodes.OK,
        {
          user,
          token,
        },
        "User logged in successfully"
      )
    );
  });
  getById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.userService.getById(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_FETCHED)
      );
  });
  delete = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.userService.delete(id || "");

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, null, API_RESPONSES.USER_DELETED)
      );
  });
  update = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userData = _.pick(req.body, signupBodyPick);
    const data = await this.userService.update(id, {
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      isActive: userData.isActive,
      role: userData.role,
      password: userData.password,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, data, API_RESPONSES.USER_UPDATED)
      );
  });
  get = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.userService.getAll();

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.USERS_FETCHED)
      );
  });
}

export default UserController;
