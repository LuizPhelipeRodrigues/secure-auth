import { Router } from "express";
import { AuthController } from "../controllers/authController";

const controller = new AuthController() 
const authRoutes = Router()

authRoutes.post('/login', controller.login)

export { authRoutes }