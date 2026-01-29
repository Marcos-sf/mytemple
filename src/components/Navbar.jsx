import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
  // { name: "Donate", path: "/donate" },
];

export default function Navbar() {
  return (
    <nav className="bg-saffron w-full border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between md:justify-center gap-1 md:gap-12 py-3 overflow-x-auto">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `whitespace-nowrap px-4 py-1 text-sm md:text-base font-bold uppercase tracking-wide transition-colors ${isActive
                  ? "text-black border-b-2 border-black"
                  : "text-white hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
