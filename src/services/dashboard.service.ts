import DashboardSummary from "../repositories/dashboard.repositories";

class DashboardSummaryService {
  dashboardSummary: DashboardSummary;

  constructor() {
    this.dashboardSummary = new DashboardSummary();
  }

  getDashboardSummary = async () => {
    const customer = await this.dashboardSummary.getDashboardSummary();
    return customer;
  };
}

export default DashboardSummaryService;
