import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import CustomerController from "../controllers/customer.controllers";
// import { authenticate } from "../middlewares/auth.middleware";

const customerRouter = express.Router();
const customerController = new CustomerController();

customerRouter
  .route(API_ENDPOINTS.CUSTOMER)
  .post(customerController.create)
  .get(customerController.get);

customerRouter
  .route(API_ENDPOINTS.CUSTOMER_SEARCH)
  .get(customerController.getByNameOrPhone);

customerRouter
  .route(API_ENDPOINTS.CUSTOMER_BY_ID)
  .get(customerController.getById)
  .delete(customerController.delete)
  .put(customerController.update);

export default customerRouter;
