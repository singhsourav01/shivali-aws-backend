import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";
import garmentRouter from "./routes/garment.route";
import { StatusCodes } from "http-status-codes";
import { ApiError, errorHandler } from "common-microservices-utils";
import cors from "cors";
import { API_ERRORS } from "./constants/app.constant";
import serviceRouter from "./routes/service.route";
import customerRouter from "./routes/customer.route";
import orderItemRouter from "./routes/orderItems.route";
import orderRouter from "./routes/order.route";
// import serviceGarmentItemRoute from "./routes/servicegarmentitems";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.SEND_PROPER_JSON);
  }
  return next();
});

app.use("/users", userRouter);
app.use("/customer", customerRouter);
app.use("/garment", garmentRouter);
app.use("/service", serviceRouter);
app.use("/order", orderRouter);
app.use("/order-item", orderItemRouter);
// app.use("/service-garment", serviceGarmentItemRoute);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return errorHandler(err, req, res, next);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
