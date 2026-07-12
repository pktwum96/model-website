import { Outlet, useLocation } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Root() {
  const location = useLocation();

  // Render Header on homepage only
  const header =
    location.pathname === "/home" || location.pathname === "/" ? (
      <HomeHeader />
    ) : null;

  return (
    <>
      {header ? header : <NavBar />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
