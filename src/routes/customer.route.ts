import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import CustomerController from "../controllers/customer.controllers";
import { authenticate } from "../middlewares/auth.middleware";

const customerRouter = express.Router();
const customerController = new CustomerController();

customerRouter
  .route(API_ENDPOINTS.CUSTOMER)
  .post(authenticate, customerController.create)
  .get(authenticate, customerController.get);

customerRouter
  .route(API_ENDPOINTS.CUSTOMER_SEARCH)
  .get(authenticate, customerController.getByNameOrPhone);

customerRouter
  .route(API_ENDPOINTS.CUSTOMER_BY_ID)
  .get(authenticate, customerController.getById)
  .delete(authenticate, customerController.delete)
  .put(authenticate, customerController.update);

export default customerRouter;
