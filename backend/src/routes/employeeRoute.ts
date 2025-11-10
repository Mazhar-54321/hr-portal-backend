import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/employeeController";
import { validateRequest } from "../middlewares/validateRequest";
import { employeeSchema } from "../schemas/employeeSchema";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";
import { getDeleteRoles, getUpdateRoles } from "../utils/user.util";

const router = Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(getUpdateRoles()),
  validateRequest(employeeSchema),
  create
);

router.get("/", authMiddleware, getAll);

router.get("/:id", authMiddleware, getById);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(getUpdateRoles()),
  validateRequest(employeeSchema),
  update
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(getDeleteRoles()),
  remove
);

export default router;
