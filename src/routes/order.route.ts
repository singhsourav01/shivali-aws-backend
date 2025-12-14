import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import OrderController from "../controllers/order.controllers";

const orderRouter = express.Router();
const orderController = new OrderController();

orderRouter.route(API_ENDPOINTS.ORDER).post(orderController.create);

orderRouter.route(API_ENDPOINTS.ORDER).get(orderController.get);

orderRouter.route(API_ENDPOINTS.ORDER_BY_ID).get(orderController.getById);

orderRouter
  .route(API_ENDPOINTS.ORDER_CUSTOMER)
  .get(orderController.getByCustomerId);

orderRouter.route(API_ENDPOINTS.ORDER_BY_ID).delete(orderController.delete);

orderRouter.route(API_ENDPOINTS.ORDER_BY_ID).put(orderController.update);

export default orderRouter;
