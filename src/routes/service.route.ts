import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import ServiceController from "../controllers/service.controller";

const serviceRouter = express.Router();
const serviceController = new ServiceController();

serviceRouter.route(API_ENDPOINTS.SERVICE).post(serviceController.create);

serviceRouter.route(API_ENDPOINTS.SERVICE).get(serviceController.get);

serviceRouter.route(API_ENDPOINTS.SERVICE_BY_ID).get(serviceController.getById);

serviceRouter
  .route(API_ENDPOINTS.SERVICE_BY_ID)
  .delete(serviceController.delete);

serviceRouter.route(API_ENDPOINTS.SERVICE_BY_ID).put(serviceController.update);

export default serviceRouter;
