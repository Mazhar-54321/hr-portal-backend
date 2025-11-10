import Employee from "../models/employee.model";
import { IEmployee } from "../interfaces/employee.interface";

export const createEmployee = async (data: IEmployee) => {
  const employee = await Employee.create(data);
  return employee;
};

export const getEmployees = async (filter: any = {}, page: number = 1, limit: number = 10) => {
  const employees = await Employee.find(filter)
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Employee.countDocuments(filter);

  return { employees, total, page, limit };
};

export const getEmployeeById = async (id: string) => {
  const employee = await Employee.findById(id);
  return employee;
};

export const updateEmployee = async (id: string, data: Partial<IEmployee>) => {
  const employee = await Employee.findByIdAndUpdate(id, data, { new: true });
  return employee;
};

export const deleteEmployee = async (id: string) => {
  const employee = await Employee.findByIdAndDelete(id);
  return employee;
};
