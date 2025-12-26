import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import UserController from "../controllers/user.controller";
// import { authenticate } from "../middlewares/auth.middleware";

const UserRoutes = express.Router();
const userController = new UserController();

// Public routes
UserRoutes.route(API_ENDPOINTS.USERS).post(userController.create);
UserRoutes.route(API_ENDPOINTS.USER_LOGIN).post(userController.login);

// Protected routes
UserRoutes.route(API_ENDPOINTS.USERS).get(userController.get);

UserRoutes.route(API_ENDPOINTS.USERS_BY_ID)
  .get(userController.getById)
  .put(userController.update)
  .delete(userController.delete);

export default UserRoutes;
