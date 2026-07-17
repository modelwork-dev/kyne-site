import { NavLink } from "react-router-dom";
import { headerLogo } from "../brand";
import { site } from "../content/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/80 shadow-[0_8px_30px_-24px_rgba(15,23,42,0.5)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-5 py-4 sm:gap-6">
        <NavLink
          to="/"
          aria-label={`${headerLogo.alt}, vai alla home`}
          className="flex min-w-0 flex-1 items-center"
        >
          <img
            src={headerLogo.src}
            alt=""
            className="h-auto w-[300px] max-w-full object-contain object-left"
            decoding="async"
            aria-hidden
          />
        </NavLink>
        <nav className="flex shrink-0 items-center gap-3 text-sm font-medium sm:gap-4">
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
