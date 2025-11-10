import { Router } from "express";
import { changeRole } from "../controllers/roleController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";

const router = Router();

router.patch("/:id", authMiddleware, roleMiddleware(["Admin"]), changeRole);

export default router;
