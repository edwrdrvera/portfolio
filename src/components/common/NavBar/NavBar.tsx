import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { ThemeToggle } from "@/components/common/ThemeToggle/ThemeToggle";
import { Menu } from "lucide-react";

const NavBar = () => {
  const linkStyle =
    "nav-link px-3 py-2 lowercase rounded-full hover:bg-base-200 transition-colors tracking-tight text-sm font-mono font-semibold opacity-80 hover:opacity-100";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
      activeElement.blur();
    }
  };

  return (
    <nav className="font-sf fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center justify-between gap-1 md:gap-4 rounded-full bg-base-100/80 backdrop-blur-md px-4 md:px-6 py-2 shadow-sm border border-base-content/10 transition-colors duration-300 w-[95%] md:w-auto max-w-fit">
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-md font-bold tracking-wide px-2 md:mr-2 opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
      >
        エドワード
      </Link>

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className={linkStyle}>
                about
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className={linkStyle}>
                experience
              </a>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className={linkStyle}>
                projects
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-1 md:pl-2">
        <div className="hidden md:block w-px h-5 bg-base-content/10 mr-2"></div>
        
        <ThemeToggle />

        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" aria-label="Toggle Menu" className="p-1.5 rounded-full hover:bg-base-200 transition-colors flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 active:scale-95 duration-200">
            <Menu className="h-5 w-5" />
          </div>
          <ul tabIndex={0} className="dropdown-content menu p-2 mt-4 shadow-lg bg-base-100/95 backdrop-blur-md rounded-2xl w-48 border border-base-content/10 flex flex-col gap-1">
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className={`${linkStyle} w-full rounded-xl`}>
                about
              </a>
            </li>
            <li>
              <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className={`${linkStyle} w-full rounded-xl`}>
                experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className={`${linkStyle} w-full rounded-xl`}>
                projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
