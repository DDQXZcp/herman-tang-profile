import { Container } from "./styles";
import HermanTang from "../../assets/HermanTangCsiroLab.jpg";
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
import AwsCloudPractioner from "../../assets/AwsCloudPractitioner.png";
import ccna from "../../assets/ccna.png"
import ros from "../../assets/ros.png"
import jetson from "../../assets/nvidia-jetson.png"
import st from "../../assets/st-micro-logo.png"
import altium from "../../assets/altium-designer-icon.webp"
import solidworks from "../../assets/solidworks.png"

// ✅ Use `react-awesome-reveal` for better animation support in React 18
import { Fade } from "react-awesome-reveal";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <Fade direction="left">
          <h2>About me</h2>
        </Fade>

        <Fade direction="left" delay={100}>
          <p>
            Since 2017, I have been focused on electronics and robotics development.  
            I have three years of experience in robotics competitions and one year of industry experience.  
          </p>
        </Fade>
        
        <Fade direction="left" delay={150} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            With a diverse skill set, I work across multiple domains, including mechanical design,  
            PCB design, and firmware development. My expertise lies primarily in <span className="highlight">ARM-based firmware programming</span>,  
            particularly with the STM32 series, as well as robotics software development using the <span className="highlight">Robot Operating System (ROS)</span> on Linux-based platforms like Jetson and Raspberry Pi.  
            I also <span className="highlight">design PCBs</span> using Altium Designer and PADS Suite and <span className="highlight">create 3D models</span> in SolidWorks.
          </p>
        </Fade>

        <Fade direction="left" delay={200}>
          <h3>Here are my main skills:</h3>
        </Fade>

        <div className="hard-skills">
          {[st, jetson, ros, altium, solidworks].map((icon, index) => {
            const customStyles = {
              width: icon === ros ? "60%" : icon === jetson ? "80%" : icon === st ? "80%" : icon === solidworks ? "90%" : "100%", // Adjust sizes per icon
            };

            return (
              <div className="hability" key={index}>
                <Fade direction="up" delay={100 + index * 20}>
                  <div className="icon-wrapper">
                    <img src={icon} alt="Skill Icon" style={customStyles} />
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>

        <Fade direction="left" delay={300} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            After 2022, I moved to Australia and gradually transitioned into software and cloud development while expanding on my past projects.
            I earned the <span className="highlight">Cisco Certified Network Associate (CCNA)</span> and <span className="highlight">AWS Certified Cloud Practitioner certifications</span> and am now aiming to achieve the associate-level certification within the next few months.
          </p>
        </Fade>

        <Fade direction="left" delay={350}>
          <h3>Here are my certificates:</h3>
        </Fade>

        <div className="hard-skills">
          {[ccna, AwsCloudPractioner].map((icon, index) => (
            <div className="hability" key={index}>
              <Fade direction="up" delay={100 + index * 20}>
                <div className="icon-wrapper"> {/* ✅ Wrap icon with a circle */}
                  <img src={icon} alt="Skill Icon" />
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>

      <div className="about-image">
        <Fade direction="right" delay={200}>
          <img src={HermanTang} alt="Herman Tang" />
        </Fade>
      </div>
    </Container>
  );
}
