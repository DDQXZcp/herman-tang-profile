import { Container } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { useState } from "react";

export function Header() {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const onHomepage = location.pathname === "/";

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to="/#home" className="logo" onClick={closeMenu}>
        <span>Herman Tang</span>
      </HashLink>

      <nav className={isActive ? "active" : ""}>
        <HashLink smooth to="/#home" onClick={closeMenu}>Home</HashLink>
        <HashLink smooth to="/#about" onClick={closeMenu}>About me</HashLink>
        <HashLink smooth to="/#project" onClick={closeMenu}>Project</HashLink>
        <HashLink smooth to="/#contact" onClick={closeMenu}>Contact</HashLink>
        <Link to="/IoTPage#iot" onClick={closeMenu}>
          IoT Demo
        </Link>
      </nav>

      <div
        aria-expanded={isActive ? "true" : "false"}
        aria-haspopup="true"
        aria-label={isActive ? "Close menu" : "Open menu"}
        className={isActive ? "menu active" : "menu"}
        onClick={() => setActive(!isActive)}
      ></div>
    </Container>
  );
}