import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { ThemeToggle } from "@/components/common/ThemeToggle/ThemeToggle";

const NavBar = () => {
  const linkStyle =
    "nav-link px-3 py-2 lowercase rounded-full hover:bg-base-200 transition-colors tracking-tight text-sm font-mono font-semibold opacity-80 hover:opacity-100";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="font-sf fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full bg-base-100/80 backdrop-blur-md px-6 py-2 shadow-sm border border-base-content/10 transition-colors duration-300">
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-md font-bold tracking-wide mr-2 opacity-90 hover:opacity-100 transition-opacity"
      >
        エドワード
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className={linkStyle}>
              about
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className={linkStyle}>
              projects
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className={linkStyle}>
              experience
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="pl-4 ml-2 border-l border-base-content/10 flex items-center">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
