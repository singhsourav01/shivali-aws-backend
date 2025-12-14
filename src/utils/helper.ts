import bcrypt from "bcryptjs";
import { ApiError } from "common-microservices-utils";
import { StatusCodes } from "http-status-codes";
import { API_ERRORS, OTP_DIGITS } from "../constants/app.constant";

export const queryHandler = async <T>(
  queryPromise: () => Promise<T>
): Promise<T> => {
  try {
    return await queryPromise();
  } catch (error) {
    console.log(error);
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      API_ERRORS.DATABASE_ERROR
    );
  }
};

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const isPasswordCorrect = async (newPass: string, oldPass: string) => {
  return await bcrypt.compare(newPass, oldPass);
};

export const getLinkData = (
  currentPage: number,
  pageSize: number,
  count: number,
  apiLink: string,
  query: { [key: string]: [value: string] } = {}
) => {
  const totalPages = Math.ceil(count / pageSize);
  let params = "";
  Object.keys(query)?.map((key) => {
    if (query[key]) params += `&${key}=${query[key]}`;
  });

  const next =
    currentPage < totalPages
      ? `${process.env.SWAGGER_URL}${apiLink}?page=${
          currentPage + 1
        }&page_size=${pageSize}${params}`
      : null;
  const prev =
    currentPage > 1 && currentPage - 1 < totalPages
      ? `${process.env.SWAGGER_URL}${apiLink}?page=${
          currentPage - 1
        }&page_size=${pageSize}${params}`
      : null;

  return {
    totalPages: totalPages,
    currentPage: currentPage,
    pageSize: pageSize,
    next: next,
    prev: prev,
  };
};
