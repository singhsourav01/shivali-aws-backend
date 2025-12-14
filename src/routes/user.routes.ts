import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import UserController from "../controllers/user.controller";

const UserRoutes = express.Router();
const userController = new UserController();

UserRoutes.route(API_ENDPOINTS.USERS).post(userController.create);

UserRoutes.route(API_ENDPOINTS.USER_LOGIN).post(userController.login);

UserRoutes.route(API_ENDPOINTS.USERS).get(userController.get);

UserRoutes.route(API_ENDPOINTS.USERS_BY_ID).get(userController.getById);

UserRoutes.route(API_ENDPOINTS.USERS_BY_ID).delete(userController.delete);

UserRoutes.route(API_ENDPOINTS.USERS_BY_ID).put(userController.update);

export default UserRoutes;
