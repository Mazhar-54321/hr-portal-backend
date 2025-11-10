import { UserRole } from "../interfaces/user.interface";
import Employee from "../models/employee.model";

export const changeEmployeeRole = async (employeeId: string, role: UserRole) => {
  const employee = await Employee.findByIdAndUpdate(
    employeeId,
    { role },
    { new: true }
  );
  return employee;
};
