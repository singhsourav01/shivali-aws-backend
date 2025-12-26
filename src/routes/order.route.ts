import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import OrderController from "../controllers/order.controllers";
import {} from "../middlewares/auth.middleware";

const orderRouter = express.Router();
const orderController = new OrderController();

orderRouter
  .route(API_ENDPOINTS.ORDER)
  .post(orderController.create)
  .get(orderController.get);

orderRouter
  .route(API_ENDPOINTS.ORDER_CUSTOMER)
  .get(orderController.getByCustomerId);

orderRouter
  .route(API_ENDPOINTS.ORDER_BY_ID)
  .delete(orderController.delete)
  .get(orderController.getById)
  .put(orderController.update);

export default orderRouter;
