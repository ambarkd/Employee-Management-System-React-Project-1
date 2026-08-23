import Header from "../layout/Header";
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-[1440px] px-6 py-4">
        <Header />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
