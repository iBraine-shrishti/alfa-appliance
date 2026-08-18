import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import TopBar from "../components/header/TopBar";
import Header from "../components/header/Header"; // This is now your Sticky Middle Bar
import Navbar from "../components/header/Navbar";
import Container from "../components/common/Container";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white">     
      <TopBar />

      <Header />

     <div className="hidden bg-navy-900/[0.03] lg:block">
        <Container className="py-2.5">
          <Navbar />
        </Container>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;