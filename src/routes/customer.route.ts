import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import CustomerController from "../controllers/customer.controllers";

const customerRouter = express.Router();
const customerController = new CustomerController();

customerRouter.route(API_ENDPOINTS.CUSTOMER).post(customerController.create);

customerRouter.route(API_ENDPOINTS.CUSTOMER).get(customerController.get);
customerRouter
  .route(API_ENDPOINTS.CUSTOMER_SEARCH)
  .get(customerController.getByNameOrPhone);

customerRouter
  .route(API_ENDPOINTS.CUSTOMER_BY_ID)
  .get(customerController.getById);

customerRouter
  .route(API_ENDPOINTS.CUSTOMER_BY_ID)
  .delete(customerController.delete);

customerRouter
  .route(API_ENDPOINTS.CUSTOMER_BY_ID)
  .put(customerController.update);

export default customerRouter;
