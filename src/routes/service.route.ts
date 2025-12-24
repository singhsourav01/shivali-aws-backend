import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import ServiceController from "../controllers/service.controller";
import { authenticate } from "../middlewares/auth.middleware";

const serviceRouter = express.Router();
const serviceController = new ServiceController();

serviceRouter
  .route(API_ENDPOINTS.SERVICE)
  .post(authenticate, serviceController.create)
  .get(authenticate, serviceController.get);

serviceRouter
  .route(API_ENDPOINTS.SERVICE_BY_ID)
  .get(authenticate, serviceController.getById)
  .delete(authenticate, serviceController.delete)
  .put(authenticate, serviceController.update);

export default serviceRouter;
