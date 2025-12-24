import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import OrderController from "../controllers/order.controllers";
import { authenticate } from "../middlewares/auth.middleware";

const orderRouter = express.Router();
const orderController = new OrderController();

orderRouter
  .route(API_ENDPOINTS.ORDER)
  .post(authenticate, orderController.create)
  .get(authenticate, orderController.get);

orderRouter
  .route(API_ENDPOINTS.ORDER_CUSTOMER)
  .get(orderController.getByCustomerId);

orderRouter
  .route(API_ENDPOINTS.ORDER_BY_ID)
  .delete(authenticate, orderController.delete)
  .get(authenticate, orderController.getById)
  .put(authenticate, orderController.update);

export default orderRouter;
