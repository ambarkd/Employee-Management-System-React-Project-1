const employees = [
  {
    id: 1,
    name: "Pallavi Dey",
    email: "pallavi@gmail.com",
    password: "123",
    role: "employee",
    designation: "HR Executive",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Review Leave Applications",
        taskDescription:
          "Review pending employee leave applications and update their status.",
        taskDate: "2026-08-26",
        category: "HR",
        priority: "Medium",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Employee Roster",
        taskDescription:
          "Update the weekly employee roster based on availability and leave requests.",
        taskDate: "2026-08-25",
        category: "HR",
        priority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Employee Records",
        taskDescription:
          "Update employee contact details and other required records.",
        taskDate: "2026-08-20",
        category: "HR",
        priority: "Low",
      },
    ],
  },

  {
    id: 2,
    name: "Priya Das",
    email: "priya@gmail.com",
    password: "123",
    role: "employee",
    designation: "UI/UX Designer",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Dashboard UI",
        taskDescription:
          "Improve the dashboard layout based on the latest design feedback.",
        taskDate: "2026-08-27",
        category: "Design",
        priority: "Medium",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "New Figma Design Added",
        taskDescription:
          "Create the homepage design for the newly assigned project.",
        taskDate: "2026-08-25",
        category: "Design",
        priority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Complete Mobile Design",
        taskDescription:
          "Complete responsive mobile designs for the product pages.",
        taskDate: "2026-08-21",
        category: "Design",
        priority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Design Revision",
        taskDescription:
          "Complete the requested design revisions before the deadline.",
        taskDate: "2026-08-19",
        category: "Design",
        priority: "High",
      },
    ],
  },

  {
    id: 3,
    name: "Arjun Roy",
    email: "arjun@gmail.com",
    password: "123",
    role: "employee",
    designation: "Project Manager",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Progress Review",
        taskDescription:
          "Review the progress of all team members and identify pending tasks.",
        taskDate: "2026-08-26",
        category: "Management",
        priority: "Medium",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Project Meeting",
        taskDescription:
          "Attend the client meeting and discuss the current project requirements.",
        taskDate: "2026-08-25",
        category: "Meeting",
        priority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Project Status Report",
        taskDescription: "Prepare and share the weekly project status report.",
        taskDate: "2026-08-20",
        category: "Management",
        priority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Follow-up",
        taskDescription:
          "Follow up with the client regarding pending project feedback.",
        taskDate: "2026-08-19",
        category: "Meeting",
        priority: "Medium",
      },
    ],
  },

  {
    id: 4,
    name: "Sourav Sen",
    email: "sourav.sen@gmail.com",
    password: "123",
    role: "employee",
    designation: "Frontend Developer",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add New Functionality",
        taskDescription:
          "Implement the new functionality requested for the employee dashboard.",
        taskDate: "2026-08-27",
        category: "Development",
        priority: "Medium",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription:
          "Integrate the employee API with the dashboard application.",
        taskDate: "2026-08-28",
        category: "Development",
        priority: "High",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "New Project Setup",
        taskDescription:
          "Set up the development environment for the newly assigned project.",
        taskDate: "2026-08-25",
        category: "Development",
        priority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Issue",
        taskDescription:
          "Fix the authentication issue affecting employee login.",
        taskDate: "2026-08-21",
        category: "Bug Fix",
        priority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Complete Feature Testing",
        taskDescription: "Test the newly developed feature before deployment.",
        taskDate: "2026-08-18",
        category: "Testing",
        priority: "Low",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Subhas Chatterjee",
    email: "adminsubhas@gmail.com",
    password: "123",
    role: "admin",
    designation: "Administrator",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
