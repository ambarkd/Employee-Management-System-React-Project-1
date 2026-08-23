const employees = [
  {
    id: 1,
    email: "hr@example.com",
    password: "123",
    role: "HR",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Employee Roster",
        taskDescription:
          "Update the weekly employee roster based on availability and leave requests.",
        taskDate: "2026-08-25",
        category: "HR",
      },
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
      },
    ],
  },

  {
    id: 2,
    email: "designer@example.com",
    password: "123",
    role: "Designer",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "New Figma Design Added",
        taskDescription:
          "Create the homepage design for the newly assigned project.",
        taskDate: "2026-08-25",
        category: "Design",
      },
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
      },
    ],
  },

  {
    id: 3,
    email: "manager@example.com",
    password: "123",
    role: "Manager",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Project Meeting",
        taskDescription:
          "Attend the client meeting and discuss the current project requirements.",
        taskDate: "2026-08-25",
        category: "Meeting",
      },
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
      },
    ],
  },

  {
    id: 4,
    email: "developer@example.com",
    password: "123",
    role: "Developer",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "New Project Setup",
        taskDescription:
          "Set up the development environment for the newly assigned project.",
        taskDate: "2026-08-25",
        category: "Development",
      },
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
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription:
          "Integrate the employee API with the dashboard application.",
        taskDate: "2026-08-28",
        category: "Development",
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
      },
    ],
  },

  {
    id: 5,
    email: "serveradmin@example.com",
    password: "123",
    role: "Server Administrator",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "System Update",
        taskDescription:
          "Apply the latest system updates and verify all services.",
        taskDate: "2026-08-25",
        category: "System",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Server Routing",
        taskDescription:
          "Investigate and fix the routing issue affecting application requests.",
        taskDate: "2026-08-26",
        category: "Server",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription:
          "Complete the scheduled database backup and verify its integrity.",
        taskDate: "2026-08-20",
        category: "Server",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Server Performance Check",
        taskDescription:
          "Monitor server performance and identify any resource issues.",
        taskDate: "2026-08-27",
        category: "Monitoring",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "SSL Certificate Renewal",
        taskDescription:
          "Renew the SSL certificate before the scheduled expiry date.",
        taskDate: "2026-08-19",
        category: "Security",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
};
