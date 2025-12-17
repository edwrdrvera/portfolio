import { NavLink } from "react-router";

const BASE_LINK_STYLES =
    "block p-0 text-[#666] transition-colors duration-150 hover:text-black";

const Logo = () => {
    return (
        <h1 className="font-base mb-10 text-[1.25rem] font-black">
            <NavLink to="/" className={BASE_LINK_STYLES}>
                エドワード
            </NavLink>
        </h1>
    );
};

const SideNavLinks = () => {
    const navLinkClasses =
        "text-gray-600 transition-colors duration-150 hover:text-black block";

    return (
        <div className="flex flex-col uppercase tracking-[0.05rem] font-medium text-xl mt-2 gap-4">
            <NavLink to="/about" className={navLinkClasses}>
                About
            </NavLink>
            <NavLink to="/cv" className={navLinkClasses}>
                CV
            </NavLink>
        </div>
    );
};

const ContactSection = () => {
    const contactLinkClasses =
        "text-base text-gray-600 transition-colors duration-150 hover:text-black block";

    return (
        <nav>
            <h3 className="font-medium text-sm uppercase tracking-[0.05rem] text-[#adadad]">
                Contact
            </h3>
            <div className="flex flex-col gap-2 mt-2 pb-4">
                <a
                    href="https://github.com/edwrdrvera"
                    className={contactLinkClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/edward-rivera-e1213"
                    className={contactLinkClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:earivera.dev@outlook.com"
                    className={contactLinkClasses}
                >
                    Mail
                </a>
            </div>
        </nav>
    );
};

function SideNav() {
    return (
        <aside className="w-48 h-screen border-r border-[#eee] p-6 fixed left-0 top-0 flex flex-col bg-white">
            <Logo />

            <div className="flex flex-col grow justify-between">
                <SideNavLinks />
                <ContactSection />
            </div>
        </aside>
    );
}

export default SideNav;
