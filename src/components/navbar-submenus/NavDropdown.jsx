import { Link } from "react-router-dom";

const NavDropdown = ({ title, to, items }) => {
  return (
    <div className="relative group">
      <Link
        to={to}
        className="px-2 text-xl text-rabbit font-medium hover:text-zinc-700"
      >
        {title}
      </Link>

      {/* DROPDOWN */}
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2 px-6
                   w-56 bg-white shadow-black rounded-2xl
                   opacity-0 invisible
                   group-hover:opacity-100 group-hover:visible
                   transition-all duration-200 z-50"
      >
        <ul className="py-3">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="block px-4 py-2 text-xl text-rabbit font-medium hover:text-zinc-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDropdown;
