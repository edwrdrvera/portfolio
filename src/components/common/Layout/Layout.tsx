import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import ContactSection from "../ContactSection/ContactSection";

const Layout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <NavBar />
      <main className="w-full mx-auto max-w-5xl md:max-w-6xl pt-16 md:pt-20 px-4 md:px-6 flex-grow">
        <Outlet />
      </main>
      <ContactSection />
    </div>
  );
};

export default Layout;