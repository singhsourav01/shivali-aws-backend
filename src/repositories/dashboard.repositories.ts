import { queryHandler } from "../utils/helper";
import { prisma } from "../configs/db.config";

class DashboardSummary {
  getDashboardSummary = async () => {
    return queryHandler(async () => {
      const [
        usersCount,
        customersCount,
        totalOrders,
        pendingOrders,
        inProgressOrders,
        completedOrders,
        deliveredOrders,
        cancelledOrders,
        mahaUrgentOrders,
        urgentOrders,
        normalOrders,
        todayOrders,
      ] = await Promise.all([
        prisma.user.count(),

        prisma.customer.count(),

        prisma.order.count(),

        prisma.order.count({
          where: { status: "PENDING" },
        }),

        prisma.order.count({
          where: { status: "IN_PROGRESS" },
        }),

        prisma.order.count({
          where: { status: "COMPLETED" },
        }),

        prisma.order.count({
          where: { status: "DELIVERED" },
        }),

        prisma.order.count({
          where: { status: "CANCELLED" },
        }),

        prisma.order.count({
          where: { availability_status: "MAHA_URGENT" },
        }),

        prisma.order.count({
          where: { availability_status: "URGENT" },
        }),

        prisma.order.count({
          where: { availability_status: "NORMAL" },
        }),

        prisma.order.count({
          where: {
            createdAt: {
              gte: new Date(new Date().setHours(0, 0, 0, 0)),
            },
          },
        }),
      ]);

      return {
        users: usersCount,
        customers: customersCount,
        orders: {
          total: totalOrders,
          pending: pendingOrders,
          in_progress: inProgressOrders,
          completed: completedOrders,
          delivered: deliveredOrders,
          cancelled: cancelledOrders,
        },
        availability: {
          maha_urgent: mahaUrgentOrders,
          urgent: urgentOrders,
          normal: normalOrders,
        },
        today_orders: todayOrders,
      };
    });
  };
}

export default DashboardSummary;
