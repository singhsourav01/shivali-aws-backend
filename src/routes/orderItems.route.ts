import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import OrderItemController from "../controllers/orderItems.controllers";

const orderItemRouter = express.Router();
const orderItemController = new OrderItemController();

orderItemRouter
  .route(API_ENDPOINTS.ORDER_ITEM)
  .post(orderItemController.create);

orderItemRouter.route(API_ENDPOINTS.ORDER_ITEM).get(orderItemController.get);

orderItemRouter
  .route(API_ENDPOINTS.ORDER_BY_ID_ITEM)
  .get(orderItemController.getById);

orderItemRouter
  .route(API_ENDPOINTS.ORDER_BY_ID_ITEM)
  .delete(orderItemController.delete);

orderItemRouter
  .route(API_ENDPOINTS.ORDER_BY_ID_ITEM)
  .put(orderItemController.update);

export default orderItemRouter;
