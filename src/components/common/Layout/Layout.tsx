import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <div className="flex h-screen w-full">
      <NavBar />
      <main className="container mx-auto max-w-5xl pt-24 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;