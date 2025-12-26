import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import OrderItemController from "../controllers/orderItems.controllers";
// import { authenticate } from "../middlewares/auth.middleware";

const orderItemRouter = express.Router();
const orderItemController = new OrderItemController();

orderItemRouter
  .route(API_ENDPOINTS.ORDER_ITEM)
  .post(orderItemController.create)
  .get(orderItemController.get);

orderItemRouter
  .route(API_ENDPOINTS.ORDER_BY_ID_ITEM)
  .get(orderItemController.getById)
  .delete(orderItemController.delete)
  .put(orderItemController.update);

export default orderItemRouter;
