import express from "express";
import { API_ENDPOINTS } from "../constants/app.constant";
import UserController from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";
<<<<<<< HEAD
=======

>>>>>>> 2acefb3d3bc37fd51ba4dcc7a5f2c09d82b5d0f6

const UserRoutes = express.Router();
const userController = new UserController();

<<<<<<< HEAD
UserRoutes.route(API_ENDPOINTS.USERS).post(authenticate, userController.create);
UserRoutes.route(API_ENDPOINTS.USER_LOGIN).post(userController.login);
=======
UserRoutes.route(API_ENDPOINTS.USERS).post(userController.create);

UserRoutes
  .route(API_ENDPOINTS.USER_LOGIN)
  .post(userController.login)
>>>>>>> 2acefb3d3bc37fd51ba4dcc7a5f2c09d82b5d0f6

UserRoutes.route(API_ENDPOINTS.USERS).get(authenticate, userController.get);

UserRoutes.route(API_ENDPOINTS.USERS_BY_ID)
  .get(authenticate, userController.getById)
  .put(authenticate, userController.update)
  .delete(authenticate, userController.delete);

export default UserRoutes;
