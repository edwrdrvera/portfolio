import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

const NavBar = () => {
    const linkStyle =
        "px-2 py-2 uppercase rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors";

    return (
        <nav className="font-base fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-2xl border border-gray-200 bg-white px-8 py-2 shadow-sm">
            <Link to="/" className="text-md font-bold">
                エドワード
            </Link>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/about" className={linkStyle}>
                                About
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/cv" className={linkStyle}>
                                CV
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/cv" className={linkStyle}>
                                Contact
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
};

export default NavBar;
