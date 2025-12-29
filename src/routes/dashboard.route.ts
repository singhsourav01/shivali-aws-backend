import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import DashboardSummaryController from "../controllers/dashboard.controller";

const dashboardRouter = express.Router();
const dashboardController = new DashboardSummaryController();

dashboardRouter
  .route(API_ENDPOINTS.DASHBOARD)
  .get(dashboardController.getDashboardSummary);

export default dashboardRouter;
