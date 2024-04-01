import { Outlet, useLocation } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import NavBar from "../components/NavBar";

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
    </>
  );
}

export default Root;
