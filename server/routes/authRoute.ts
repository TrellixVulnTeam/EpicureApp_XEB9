import authController from '../controllers/authController.js';
import express from "express";
import authMiddleware from '../middlewares/authMiddleware.js';
const authRouter = express.Router();

const newAuthController = new authController;

authRouter.post("/signin", newAuthController.signin);

authRouter.post("/signup", newAuthController.signup);

authRouter.get("/", authMiddleware, newAuthController.getUserById);

authRouter.delete("/", authMiddleware, newAuthController.deleteUser);


export default authRouter;