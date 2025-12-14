import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import GarmentController from "../controllers/garment.controller";

const GarmentRoutes = express.Router();
const garmentController = new GarmentController();

GarmentRoutes.route(API_ENDPOINTS.GARMENT).post(garmentController.create);

GarmentRoutes.route(API_ENDPOINTS.GARMENT).get(garmentController.get);

GarmentRoutes.route(API_ENDPOINTS.GARMENT_BY_ID).get(garmentController.getById);

GarmentRoutes.route(API_ENDPOINTS.GARMENT_BY_ID).delete(
  garmentController.delete
);

GarmentRoutes.route(API_ENDPOINTS.GARMENT_BY_ID).put(garmentController.update);

export default GarmentRoutes;
