import { Container } from "./styles";
import AwsSaa from "../../assets/AwsSaa.png";
import { Fade } from "react-awesome-reveal";
import CampusRideFrontend from "../../assets/CampusRide-Frontend.gif";
import CampusRideArchitecture from "../../assets/CampusRide-Architecture.png";
import FingerRight from "../../assets/FingerRight.png";
import FingerDown from "../../assets/FingerDown.gif";
import TechIcon from "../../assets/TechIcon.png";
import CCNA from "../../assets/ccna.png"
import RedHatIcon from "../../assets/redhat-icon.svg"
import CiscoRack from "../../assets/CiscoRack.jpeg"
import PacketTracer from "../../assets/PacketTracer.png"
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export function IT() {
  const gallery = [CampusRideFrontend, CampusRideArchitecture];
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <Container id="IT">
      <div className="about-text">
        <Fade direction="right">
          <h2 style={{ color: "var(--accent-yellow)" }}>IT & Networking</h2>

          <div className="hard-skills">
            {[CCNA].map((icon, index) => (
              <div className="hability" key={index}>
                <Fade direction="up" delay={100 + index * 20}>
                  <div className="icon-wrapper-large"> {/* ✅ Wrap icon with a circle */}
                    <img src={icon} alt="Skill Icon" style={{ transform: "translateY(6px)" }}/>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </Fade>

        <Fade direction="right" delay={100}>
          <h3>
            <img src={FingerRight} alt="Finger Right" width="20px"/> Cisco Certified Network Associate
          </h3>
          <h3>
            <img src={FingerRight} alt="Finger Right" width="20px"/> Red Hat Certified System Administrator Training
          </h3>

          <p>
            I design and configure LANs and establish network connectivity through router and switch setup. 
            I also have experience deploying servers and implementing secure access controls for authorized users.
          </p>
        </Fade>

        <Fade direction="right" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            <span className="highlight">What I can deliver</span>
          </p>
          <p>
            <img src={TechIcon} alt="Tech Icon" width="20px"/> Network Connectivity (e.g. Router, Switch, Firewall, VPN)
          </p>
          <p>
            <img src={TechIcon} alt="Tech Icon" width="20px"/> Server Management (e.g. Web Server, Database Server, File Server)
          </p>

        </Fade>
      </div>

      <div className="demo-image" style={{ justifySelf: "start", alignSelf: "start" }}>
        <img src={CiscoRack} alt="Cisco Rack" style={{ maxHeight: "300px" }} />
        <img src={PacketTracer} alt="Packet Tracer" style={{ maxHeight: "260px" }} />
      </div>
    </Container>
  );
}