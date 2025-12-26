import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import GarmentController from "../controllers/garment.controller";
// import { authenticate } from "../middlewares/auth.middleware";

const GarmentRoutes = express.Router();
const garmentController = new GarmentController();

GarmentRoutes.route(API_ENDPOINTS.GARMENT)
  .post(garmentController.create)
  .get(garmentController.get);

GarmentRoutes.route(API_ENDPOINTS.GARMENT_BY_ID)
  .get(garmentController.getById)
  .delete(garmentController.delete)
  .put(garmentController.update);

export default GarmentRoutes;
