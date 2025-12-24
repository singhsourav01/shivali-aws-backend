import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import OrderItemController from "../controllers/orderItems.controllers";
import { authenticate } from "../middlewares/auth.middleware";

const orderItemRouter = express.Router();
const orderItemController = new OrderItemController();

orderItemRouter
  .route(API_ENDPOINTS.ORDER_ITEM)
  .post(authenticate, orderItemController.create)
  .get(authenticate, orderItemController.get);

orderItemRouter
  .route(API_ENDPOINTS.ORDER_BY_ID_ITEM)
  .get(authenticate, orderItemController.getById)
  .delete(authenticate, orderItemController.delete)
  .put(authenticate, orderItemController.update);

export default orderItemRouter;
