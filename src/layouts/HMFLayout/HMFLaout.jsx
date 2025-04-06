// layouts/NormalLayout/NormalLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HMFLayout = () => {
  return (
    <div className="HMFLayout">
      <Header />
      <main className="MainLayout">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HMFLayout;
