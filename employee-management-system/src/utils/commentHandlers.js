import {
  addCommentToTask,
  deleteCommentFromTask,
  updateEmployeeInLocalStorage,
} from "./taskHandlers";

// Employee - Add Comment
export const handleEmployeeAddComment = (loggedInUserData, taskId, comment) => {
  if (!loggedInUserData) return null;

  const updatedEmployee = addCommentToTask(loggedInUserData, taskId, comment);

  if (!updatedEmployee) return null;

  updateEmployeeInLocalStorage(updatedEmployee);

  return updatedEmployee;
};

// Employee - Delete Comment
export const handleEmployeeDeleteComment = (
  loggedInUserData,
  taskId,
  commentIndex,
) => {
  if (!loggedInUserData) return null;

  const updatedEmployee = deleteCommentFromTask(
    loggedInUserData,
    taskId,
    commentIndex,
  );

  if (!updatedEmployee) return null;

  updateEmployeeInLocalStorage(updatedEmployee);

  return updatedEmployee;
};

// Admin - Add Comment
export const handleAdminAddComment = (employeeId, taskId, comment) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const employee = employees.find((employee) => employee.id === employeeId);

  if (!employee) return null;

  const updatedEmployee = addCommentToTask(employee, taskId, comment);

  if (!updatedEmployee) return null;

  const updatedEmployees = employees.map((employee) =>
    employee.id === employeeId ? updatedEmployee : employee,
  );

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));

  return updatedEmployee;
};

// Admin - Delete Comment
export const handleAdminDeleteComment = (employeeId, taskId, commentIndex) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const employee = employees.find((employee) => employee.id === employeeId);

  if (!employee) return null;

  const updatedEmployee = deleteCommentFromTask(employee, taskId, commentIndex);

  if (!updatedEmployee) return null;

  const updatedEmployees = employees.map((employee) =>
    employee.id === employeeId ? updatedEmployee : employee,
  );

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));

  return updatedEmployee;
};
