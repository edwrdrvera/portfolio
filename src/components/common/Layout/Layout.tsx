import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <div className="flex w-full">
      <NavBar />
      <main className="w-full mx-auto max-w-5xl md:max-w-6xl pt-16 md:pt-20 px-4 md:px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;