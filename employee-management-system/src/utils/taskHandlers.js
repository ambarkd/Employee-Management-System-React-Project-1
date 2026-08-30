export const updateTaskStatus = (loggedInUserData, taskId, status) => {
  if (!loggedInUserData) {
    return null;
  }

  const updatedTasks = loggedInUserData.tasks.map((task) => {
    if (task.id !== taskId) {
      return task;
    }

    return {
      ...task,
      active: status === "active",
      newTask: false,
      completed: status === "completed",
      failed: status === "failed",
    };
  });

  // Recalculate task counts
  const updatedTaskCounts = {
    active: updatedTasks.filter((task) => task.active).length,
    newTask: updatedTasks.filter((task) => task.newTask).length,
    completed: updatedTasks.filter((task) => task.completed).length,
    failed: updatedTasks.filter((task) => task.failed).length,
  };

  return {
    ...loggedInUserData,
    tasks: updatedTasks,
    taskCounts: updatedTaskCounts,
  };
};

export const updateEmployeeInLocalStorage = (updatedEmployee) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const updatedEmployees = employees.map((employee) =>
    employee.id === updatedEmployee.id ? updatedEmployee : employee,
  );

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
};

export const addCommentToTask = (loggedInUserData, taskId, comment) => {
  if (!loggedInUserData) {
    return null;
  }

  const updatedTasks = loggedInUserData.tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        comments: [...(task.comments || []), comment],
      };
    }

    return task;
  });

  return {
    ...loggedInUserData,
    tasks: updatedTasks,
  };
};

export const deleteCommentFromTask = (
  loggedInUserData,
  taskId,
  commentIndex,
) => {
  if (!loggedInUserData) {
    return null;
  }

  const updatedTasks = loggedInUserData.tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        comments: task.comments.filter((_, index) => index !== commentIndex),
      };
    }

    return task;
  });

  return {
    ...loggedInUserData,
    tasks: updatedTasks,
  };
};
