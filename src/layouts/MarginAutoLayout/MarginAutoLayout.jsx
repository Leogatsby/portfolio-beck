// layouts/MarginAutoLayout/MarginAutoLayout.jsx
import { Outlet } from "react-router-dom";
import "./MarginAutoLayout.scss";
import HeadNav from "../../components/HeadNav/HeadNav";

const MarginAutoLayout = () => {
  return (
    <>
      <HeadNav />
      <div className="margin-auto-layout">
        <Outlet />
      </div>
    </>
  );
};

export default MarginAutoLayout;
