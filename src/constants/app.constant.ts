export const PORT = 8000;

export const JWT_ALGORITHM = "RS256";

export const BASE = "/admin";

export const API_ENDPOINTS = {
  STAR: "*",
  BASE: "/auth",
  SIGNUP: "/signup",
  USERS: "/users",
  USERS_BY_ID: "/users/:id",
  USER_LOGIN: "/login",
  ORDER: "/order",
  ORDER_CUSTOMER: "/order/customer/:id",
  ORDER_BY_ID: "/order/:id",
  ORDER_ITEM: "/order-item",
  ORDER_BY_ID_ITEM: "/order-item/:id",
  CUSTOMER: "/customer",
  CUSTOMER_SEARCH: "/customer-search",
  CUSTOMER_BY_ID: "/customer/:id",
  GARMENT: "/garment",
  GARMENT_BY_ID: "/garment/:id",
  SERVICE: "/service",
  SERVICE_BY_ID: "/service/:id",
  SERVICE_GARMENT_ITEM: "/service-garment-item",
  SERVICE_GARMENT_ITEM_BY_ID: "/service-garment-item/:id",
};

export const API_RESPONSES = {
  USER_CREATED: "User created successfully",
  USER_DELETED: "User deleted successfully",
  USER_UPDATED: "User updated successfully",
  USER_FETCHED: "User fetched successfully",
  USERS_FETCHED: "Users fetched successfully",
};

export const API_ERRORS = {
  ROUTE_NOT_FOUND: "Route not found",
  UNAUTHORIZED: "Unauthorized. please provide valid token",
  ALL_FIELDS_REQUIRED: "All field are required",
  DATABASE_ERROR: "Database error",
  USER_EXISTS: "Users already exists",
  SEND_PROPER_JSON: "Send proper json",
  PHONE_EMAIL_EXISTS: "Phone and email already exists",
  EMAIL_EXISTS: "Email already exists",
  PHONE_EXISTS: "Phone already exists",
  USER_DOSE_NOT_EXISTS: "User dose not exists",
  INVALID_CREDENTIALS: "Invalid credentials",
};

export const INTEGERS = {
  ZERO: 0,
  ONE: 1,
};

export const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
};

export const OTP_EXPIRY = 5 * 60 * 1000;

export const OTP_DIGITS = 6;

export const JWKS_FOLDER = "/.well-known/jwks.json";
