import { NavLink } from "react-router-dom";
import { headerLogo } from "../brand";
import { site } from "../content/site";

export default function Navbar() {
  return (
    <header className="border-b border-surface-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-5 py-4">
        <NavLink
          to="/"
          aria-label={`${headerLogo.alt}, vai alla home`}
          className="flex shrink-0 items-center"
        >
          <img
            src={headerLogo.src}
            alt=""
            className="h-auto w-[300px] max-w-full object-contain object-left"
            decoding="async"
            aria-hidden
          />
        </NavLink>
        <nav className="flex items-center gap-4 text-sm font-medium">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-accent-600" : "text-surface-600 hover:text-surface-900"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
