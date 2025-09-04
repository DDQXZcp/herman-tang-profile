import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import HermanTangCircle from "../../assets/HermanTangCsiroLabCircle.png";
import Jinmao from "../../assets/Jinmao-modified.png";
import FingerDown from "../../assets/FingerDown.gif";
import AwsIcon from "../../assets/aws-icon.png";
import OpenaiIcon from "../../assets/openai.svg"
import CiscoIcon from "../../assets/cisco-logo.png"
import { HashLink } from "react-router-hash-link";

// optional: offset for a fixed header (~80px)
const scrollWithOffset = (el: HTMLElement) => {
  const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <img className="mini-hero-image" src={HermanTangCircle} alt="Herman Tang"/>
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Herman Tang</h1>
        </ScrollAnimation>

        <div className="yellow-line"></div>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3 style={{ color: "var(--accent-yellow)" }}>Software Engineer | Cloud/DevOps Engineer</h3>
          <h3 style={{ color: "var(--accent-yellow)" }}>AWS SAA | Cisco CCNA | IT & Software Tutor @ ANU</h3>
          <p className="small-resume" style={{ marginBottom: "20px" }}>A part-time IT & Software Tutor at Australian National University.
            A freelancer who provides services for software development and cloud solutions, with more than 3 years of experience. <span className="highlight">Currently seeking full-time opportunities.</span></p>

          <p className="small-resume">Check my social account <img src={FingerDown} alt="Finger Down" width="20px"/></p>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
        </ScrollAnimation> */}
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="brand-bar">
            <a href="https://www.linkedin.com/in/herman-tang/" target="_blank" rel="noreferrer" className="brand">
              <img src={linkedin} alt="Linkedin" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/DDQXZcp" target="_blank" rel="noreferrer" className="brand">
              <img src={githubIcon} alt="GitHub" />
              <span>GitHub</span>
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={HermanTangCircle} alt="Herman Tang" />
        </ScrollAnimation>
      </div>
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3 style={{ color: "var(--accent-yellow)" }}>The skills I can bring to you</h3>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
        </ScrollAnimation> */}
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="hero-text-right">
            <div className="services-list">
              <HashLink
                smooth
                to={{ pathname: "/", hash: "#SoftwareCloud" }}
                className="service-item"
                scroll={scrollWithOffset}
              >
                <div className="icon-circle">
                  <img src={AwsIcon} alt="Software & Cloud" height={50} />
                </div>
                <div className="service-text">
                  <h3 style={{ color: "var(--white)" }}>Software & Cloud</h3>
                </div>
              </HashLink>

              <HashLink
                smooth
                to={{ pathname: "/", hash: "#AiRobotics" }}
                className="service-item"
                scroll={scrollWithOffset}
              >
                <div className="icon-circle">
                  <img src={OpenaiIcon} alt="AI & Robotics" height={50} />
                </div>
                <div className="service-text">
                  <h3 style={{ color: "var(--white)" }}>AI & Robotics</h3>
                </div>
              </HashLink>

              <HashLink
                smooth
                to={{ pathname: "/", hash: "#IT" }}
                className="service-item"
                scroll={scrollWithOffset}
              >
                <div className="icon-circle">
                  <img src={CiscoIcon} alt="IT & Networking" height={50} />
                </div>
                <div className="service-text">
                  <h3 style={{ color: "var(--white)" }}>IT & Networking</h3>
                </div>
              </HashLink>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  )
}