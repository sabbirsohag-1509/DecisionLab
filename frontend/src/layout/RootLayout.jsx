import { Outlet } from "react-router";
import Navbar from "./../component/Navbar/Navbar";
import Footer from "./../component/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-10 pb-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
