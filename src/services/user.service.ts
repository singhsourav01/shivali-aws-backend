import { ApiError } from "common-microservices-utils";
import UserRepository from "../repositories/user.repository";
import { StatusCodes } from "http-status-codes";
import { API_ERRORS } from "../constants/app.constant";
import { signToken } from "../utils/jwt";

class UserService {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  login = async (user_value: string, user_password: string) => {
    const user = await this.userRepository.getByEmailOrPhone(user_value);
    if(!user) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, API_ERRORS.USER_DOSE_NOT_EXISTS);
    }
    if ( user?.user_password != user_password) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, API_ERRORS.INVALID_CREDENTIALS);
    }
    return user;
  };

  create = async (data: any) => {
    const emailExists = await this.userRepository.getByEmail(data.user_email);
    const phoneExists = await this.userRepository.getByPhone(data.user_phone);
    if (emailExists && phoneExists) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        API_ERRORS.PHONE_EMAIL_EXISTS
      );
    }

    if (emailExists) {
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.EMAIL_EXISTS);
    }

    if (phoneExists) {
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.PHONE_EXISTS);
    }
    
    const user = await this.userRepository.create(data);
    return user;
  };

  delete = async (id: string) => {
    const userExists = await this.getById(id);

    if (!userExists) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        API_ERRORS.USER_DOSE_NOT_EXISTS
      );
    }
    return await this.userRepository.delete(id);
  };

  update = async (id: string, data: any) => {
    const userExists = await this.getById(id);

    if (!userExists) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        API_ERRORS.USER_DOSE_NOT_EXISTS
      );
    }
    return await this.userRepository.update(id, data);
  };

  getById = async (uld_id: string) => {
    const user = await this.userRepository.getById(uld_id);
    return user;
  };

  getByPhone = async (phone: string) => {
    const user = await this.userRepository.getByPhone(phone);
    return user;
  };

  getByEmail = async (email: string) => {
    const user = await this.userRepository.getByEmail(email);
    return user;
  };

  getAll = async () => {
    const user = this.userRepository.getAll();
    return user;
  };
}

export default UserService;
