// layouts/SideBarLayout/SideBarLayout.jsx
import { Outlet } from "react-router-dom";
//import Sidebar from "../../components/Sidebar";

const SideBarLayout = () => {
  return (
    <div className="sidebar-layout">
      <Sidebar />
      <main className="sidebar-main">
        <Outlet />
      </main>
    </div>
  );
};

export default SideBarLayout;
