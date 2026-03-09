import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { ThemeToggle } from "@/components/common/ThemeToggle/ThemeToggle";

const NavBar = () => {
  const linkStyle =
    "px-3 py-2 lowercase rounded-full hover:bg-base-200 transition-colors tracking-tight text-sm font-mono font-semibold opacity-80 hover:opacity-100";

  return (
    <nav className="font-sf fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full bg-base-100/80 backdrop-blur-md px-6 py-2 shadow-sm border border-base-content/10 transition-colors duration-300">
      <Link to="/" className="text-md font-bold tracking-wide mr-2 opacity-90 hover:opacity-100 transition-opacity">
        エドワード
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="#about" className={linkStyle}>
                about
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="#projects" className={linkStyle}>
                projects
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="#experience" className={linkStyle}>
                experience
              </a>
            </NavigationMenuLink>
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
