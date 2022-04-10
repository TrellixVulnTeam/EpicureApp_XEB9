import authController from '../controllers/authController.js';
import express from "express";
import authMiddleware from '../middlewares/authMiddleware.js';
const authRouter = express.Router();

const newauthController = new authController;

authRouter.post("/signin", newauthController.signin);

authRouter.post("/signup", newauthController.signup);

authRouter.get("/:id", newauthController.getUserById);

authRouter.delete("/", authMiddleware, newauthController.deleteUser);


export default authRouter;