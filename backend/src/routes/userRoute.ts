import { Router } from "express";
import { register, login, refresh, logout } from "../controllers/userController";
import { validateRequest } from "../middlewares/validateRequest";
import { registerSchema, loginSchema } from "../schemas/userSchema";

const router = Router();

router.post("/register", validateRequest(registerSchema), register);
router.post("/login", validateRequest(loginSchema), login);
router.get("/refresh", refresh);
router.post("/logout", logout);

export default router;
