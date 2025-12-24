import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import GarmentController from "../controllers/garment.controller";
import { authenticate } from "../middlewares/auth.middleware";

const GarmentRoutes = express.Router();
const garmentController = new GarmentController();

GarmentRoutes.route(API_ENDPOINTS.GARMENT)
  .post(authenticate, garmentController.create)
  .get(authenticate, garmentController.get);

GarmentRoutes.route(API_ENDPOINTS.GARMENT_BY_ID)
  .get(authenticate, garmentController.getById)
  .delete(authenticate, garmentController.delete)
  .put(authenticate, garmentController.update);

export default GarmentRoutes;
