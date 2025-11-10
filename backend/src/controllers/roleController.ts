import { Request, Response } from "express";
import { changeEmployeeRole } from "../services/roleService";
import { getAllRoles } from "../utils/user.util";

export const changeRole = async (req: Request, res: Response) => {
  try {
    const { role } = req.body;
    if (!getAllRoles().includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const employee = await changeEmployeeRole(req.params.id, role as any);
    if (!employee) return res.status(404).json({ message: "Employee not found" });

    res.json({ message: "Role updated successfully", employee });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
