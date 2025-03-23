import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import LscmAgv from "../../assets/LscmAgv.jpg"; // Replace with your actual image name
import LscmFpga2d from "../../assets/LscmFpga2D.png";
import LscmFpga3d from "../../assets/LscmFpga3D.png";
import ChirpStack from "../../assets/ChirpStack.png";
import Lora from "../../assets/Lora.jpg";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/DDQXZcp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://github.com/DDQXZcp" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="External Link" />
                </a>
              </div>
            </header>

            <div className="project-image">
              <img src={LscmAgv} alt="LSCM AGV" style={{ width: "80%" }} />
            </div>

            <div className="body">
              <h3>Automated Guided Vehicles (AGV) Developments</h3>
              <p>
                Developed firmware for Automated Guided Vehicles (AGVs) using STM32 microcontrollers and the ROS framework, 
                implementing SLAM, object detection, and navigation tasks. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>STM32</li>
                <li>ROS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/DDQXZcp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://github.com/DDQXZcp" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="External Link" />
                </a>
              </div>
            </header>

            <div className="project-image-double">
              <img src={LscmFpga2d} alt="Project Preview" />
              <img src={LscmFpga3d} alt="Project Preview" />
            </div>

            <div className="body">
              <h3>PCB Design</h3>
              <p>
                Developed PCB for microcontroller-based or FPGA board for robotics and communication applications. 
                Experienced with Altium Designer and PADS Design Suite. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Altium Designer</li>
                <li>PADS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/DDQXZcp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://github.com/DDQXZcp" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="External Link" />
                </a>
              </div>
            </header>

            <div className="project-image-double">
              <img src={ChirpStack} alt="Project Preview" />
              <img src={Lora} alt="Project Preview" style={{ width: "40%" }}/>
            </div>

            <div className="body">
              <h3>LoRaWAN IoT System</h3>
              <p>
              Developed an IoT system using LoRaWAN, with STM32WL as the sensor endpoint and a Robustel LoRaWAN gateway. 
              Utilized ChirpStack as the network server, integrated Node-RED for post-processing, 
              and visualized data through a GUI frontend built on AWS IoT Core.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>LoRaWAN</li>
                <li>IoT</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* You can continue with more project blocks below... */}

      </div>
    </Container>
  );
}