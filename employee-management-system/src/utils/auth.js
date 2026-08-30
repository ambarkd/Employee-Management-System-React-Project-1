export const restoreLoggedInUser = (authData) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    return null;
  }

  // Restore Admin
  if (loggedInUser.role === "admin") {
    const admin = authData.admin?.find(
      (admin) => admin.email === loggedInUser.email,
    );

    if (admin) {
      return {
        role: "admin",
        userData: admin,
      };
    }
  }

  // Restore Employee
  if (loggedInUser.role === "employee") {
    const employee = authData.employees?.find(
      (employee) => employee.email === loggedInUser.email,
    );

    if (employee) {
      return {
        role: "employee",
        userData: employee,
      };
    }
  }

  return null;
};

export const loginUser = (authData, email, password) => {
  const admin = authData.admin?.find(
    (admin) => admin.email === email && admin.password === password,
  );

  const employee = authData.employees?.find(
    (employee) => employee.email === email && employee.password === password,
  );

  if (!admin && !employee) {
    return null;
  }

  const loggedUser = admin || employee;
  const role = admin ? "admin" : "employee";

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify({
      role,
      email: loggedUser.email,
    }),
  );

  return {
    role,
    userData: loggedUser,
  };
};
