import { Container } from "./styles";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import AwsIcon from "../../assets/aws-icon.png";
import AwsSaa from "../../assets/AwsSaa.png";
import { Fade } from "react-awesome-reveal";
import CampusRideFrontend from "../../assets/CampusRide-Frontend.gif";
import CampusRideArchitecture from "../../assets/CampusRide-Architecture.png";
import FingerRight from "../../assets/FingerRight.png";
import FingerDown from "../../assets/FingerDown.gif";
import TechIcon from "../../assets/TechIcon.png";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export function Architecture() {
  const gallery = [CampusRideFrontend, CampusRideArchitecture];
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <Container id="SoftwareCloud">
      <div className="about-text">
        <Fade direction="right">
          <h2 style={{ color: "var(--accent-yellow)" }}>Software & Cloud Services</h2>

          <div className="hard-skills">
            {[AwsSaa].map((icon, index) => (
              <div className="hability" key={index}>
                <Fade direction="up" delay={100 + index * 20}>
                  <div className="icon-wrapper-large"> {/* ✅ Wrap icon with a circle */}
                    <img src={icon} alt="Skill Icon" />
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </Fade>

        <Fade direction="right" delay={100}>
            <h3>
              <img src={FingerRight} alt="Finger Right" width="20px"/> 3 years of web+cloud development experience
            </h3>
            <h3>
              <img src={FingerRight} alt="Finger Right" width="20px"/> Certified AWS Solutions Architect - Associate
            </h3>

        <p>
          I deliver <span className="highlight">full-stack solutions</span>  with <span className="highlight">well-architected cloud deployments. </span>
          I am experienced in most of the modern frontend / backend frameworks and DevOps tools that automates the deployment.
        </p>
        <div className="brand-bar">
          <p className="brand">React</p>
          <p className="brand">Next.js</p>
          <p className="brand" style={{ background: "var(--BackendGreen)" }}>Spring Boot</p>
          <p className="brand" style={{ background: "var(--BackendGreen)" }}>.Net</p>
          <p className="brand" style={{ background: "var(--BackendGreen)" }}>Nginx</p>
          <p className="brand" style={{ background: "var(--DockerBlue)" }}>CI/CD</p>
          <p className="brand" style={{ background: "var(--DockerBlue)" }}>Docker</p>
          <p className="brand" style={{ background: "var(--DockerBlue)" }}>Kubernetes</p>
          <p className="brand" style={{ background: "var(--MySqlOrange)" }}>PostgreSQL</p>
          <p className="brand" style={{ background: "var(--MySqlOrange)" }}>MySQL</p>
          <p className="brand" style={{ background: "var(--MySqlOrange)" }}>DynamoDB</p>
        </div>
        </Fade>

        <Fade direction="right" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            <span className="highlight">What I can deliver</span>
          </p>
          <p>
            <img src={TechIcon} alt="Tech Icon" width="20px"/> Business Website Design (e.g. Company Website, Activity Page, Product Demonstration)
          </p>
          <p>
            <img src={TechIcon} alt="Tech Icon" width="20px"/> Web Application Development (e.g. IoT Dashboard, E-commerce System, Ordering System)
          </p>
          <p>
            <img src={TechIcon} alt="Tech Icon" width="20px"/> Cloud Architecture Design (e.g. Microservice Architecture, CI/CD)
          </p>
          <p>
            <img src={TechIcon} alt="Tech Icon" width="20px"/> Integration with CV & AI (e.g. Object Detection, OCR, Chatbot)
          </p>

        </Fade>

        {/* <Fade direction="right" delay={300} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            A <span className="highlight">DevOps workflow</span> is also in place,  
            where every Git push triggers a <span className="highlight">CI/CD pipeline</span>  
            <img src={FingerRight} alt="Finger Right" width="20px"/> 3 years of web+cloud development experience
          </p>
        </Fade> */}


        {/* <Fade direction="left" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Exploring the potential of cloud computing has been exciting. It enables me to offload parts of edge computation to the cloud and visualize IoT and robotics data on web platforms. I also enjoy evaluating different deployment architectures to balance cost and performance effectively.
          </p>
        </Fade> */}
      </div>

      <div className="demo-image">
        {/* Thumbnails */}
        {gallery.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i === 0 ? "Campus Ride Frontend" : "Campus Ride Architecture"}
            width={600}
            style={{ cursor: "zoom-in", marginRight: i === 0 ? "12px" : 0, borderRadius: "8px" }}
            onClick={() => { setIsOpen(true); setIndex(i); }}
          />
        ))}
        <h1 style={{color: "var(--accent-yellow)"}}>
            CampusRide IoT Real-Time Visualization Dashboard
        </h1>
        <p className="small-resume" style={{marginTop: "1rem"}}>Check my Demo <img src={FingerDown} alt="Finger Down" width="20px"/></p>
        <div className="brand-bar" style={{ justifyContent: "center", marginTop: "2rem", gap: "16px" }}>
          <a href="https://campusride.herman-tang.com/" target="_blank" rel="noreferrer" className="brand-link">
            Demo Website
          </a>
          <a href="https://www.linkedin.com/pulse/how-i-developed-iot-dashboard-real-time-visualization-herman-tang-1tz8c/?trackingId=LFaFr8n8RIWPAgX7s%2FspdQ%3D%3D" target="_blank" rel="noreferrer" className="brand-link">
            LinkedIn Post
          </a>
          <a href="https://github.com/DDQXZcp/CampusRide-ANU" target="_blank" rel="noreferrer" className="brand-link">
            GitHub Repo
          </a>
        </div>
        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            mainSrc={gallery[index]}
            nextSrc={gallery[(index + 1) % gallery.length]}
            prevSrc={gallery[(index + gallery.length - 1) % gallery.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setIndex((index + gallery.length - 1) % gallery.length)}
            onMoveNextRequest={() => setIndex((index + 1) % gallery.length)}
            imageTitle={index === 0 ? "Frontend" : "Architecture"}
            enableZoom={true}
          />
        )}
      </div>
    </Container>
  );
}