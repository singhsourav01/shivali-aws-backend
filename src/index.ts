import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { StatusCodes } from "http-status-codes";
import { errorHandler } from "common-microservices-utils";

import userRouter from "./routes/user.routes";
import customerRouter from "./routes/customer.route";
import garmentRouter from "./routes/garment.route";
import serviceRouter from "./routes/service.route";
import orderRouter from "./routes/order.route";
import orderItemRouter from "./routes/orderItems.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

/** Routes */
app.use("/users", userRouter);
app.use("/customer", customerRouter);
app.use("/garment", garmentRouter);
app.use("/service", serviceRouter);
app.use("/order", orderRouter);
app.use("/order-item", orderItemRouter);

/** Error handler — MUST be last */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  return errorHandler(err, req, res, next);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
