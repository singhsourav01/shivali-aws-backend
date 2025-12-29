import { ApiResponse, asyncHandler } from "common-microservices-utils";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import DashboardSummaryService from "../services/dashboard.service";

class DashboardSummaryController {
  dashboardSummaryService: DashboardSummaryService;
  constructor() {
    this.dashboardSummaryService = new DashboardSummaryService();
  }

  getDashboardSummary = asyncHandler(async (req: Request, res: Response) => {
    const user = await this.dashboardSummaryService.getDashboardSummary();

    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(StatusCodes.OK, user, API_RESPONSES.USER_CREATED));
  });
}

export default DashboardSummaryController;
