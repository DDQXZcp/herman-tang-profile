import { Container } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import HermanTangCircle from "../../assets/HermanTangCsiroLabCircle.png";

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
        <span style={{whiteSpace: "nowrap", paddingRight: "2rem"}}>Herman Tang</span>
      </HashLink>

      <nav className={isActive ? "active" : ""}>
        {isActive && (
          <HashLink
            smooth
            to="/#home"
            className="menu-top"
            onClick={closeMenu}
          >
            <img
              className="mini-hero-image"
              src={HermanTangCircle}
              alt="Herman Tang"
            />
          </HashLink>
        )}
        <HashLink smooth to="/#home" onClick={closeMenu}>Home</HashLink>
        {/* <HashLink smooth to="/#about" onClick={closeMenu}>About me</HashLink> */}
        <HashLink smooth to="/#SoftwareCloud" onClick={closeMenu}><span style={{whiteSpace: "nowrap"}}>Software & Cloud</span></HashLink>
        <HashLink smooth to="/#AiRobotics" onClick={closeMenu}><span style={{whiteSpace: "nowrap"}}>AI & Robotics</span></HashLink>
        <HashLink smooth to="/#IT" onClick={closeMenu}><span style={{whiteSpace: "nowrap"}}>IT & Networking</span></HashLink>
        <HashLink smooth to="/#about" onClick={closeMenu}><span style={{whiteSpace: "nowrap"}}>About me</span></HashLink>
        {/* <HashLink smooth to="/#contact" onClick={closeMenu}>Contact</HashLink>
        <Link to="/IoTPage#iot" onClick={closeMenu}>
          IoT Demo
        </Link> */}
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