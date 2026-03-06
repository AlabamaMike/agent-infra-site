import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`}
      end={to === "/"}
    >
      {children}
    </NavLink>
  );
}

export function SiteLayout() {
  useEffect(() => {
    const id = "agent-infra-fonts";
    if (document.getElementById(id)) {
      return;
    }

    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700;900&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-brand">
            <span className="site-brand__mark" />
            <span>Agent Infrastructure Layer</span>
          </NavLink>
          <nav className="site-nav" aria-label="Primary">
            <NavItem to="/">Overview</NavItem>
            <NavItem to="/framework">Framework</NavItem>
            <NavItem to="/deep-dives">Deep Dives</NavItem>
          </nav>
        </div>
      </header>
      <div className="site-header__accent" />
      <main>
        <Outlet />
      </main>
      <div className="site-header__accent" />
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>Agent Infrastructure Layer | Client Education Briefing | March 2026</p>
          <p>Research and analysis for informational purposes.</p>
        </div>
      </footer>
    </div>
  );
}
