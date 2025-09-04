import { Container } from "./styles";
import HermanTang from "../../assets/HermanTangCsiroLab2.jpg";
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
import ACCESS from "../../assets/ACCESS.jpg"
import DegreeIcon from "../../assets/DegreeIcon.png"

// ✅ Use `react-awesome-reveal` for better animation support in React 18
import { Fade } from "react-awesome-reveal";
import { PhotoAlbum3, PhotoAlbum5, PhotoAlbum6 } from "../PhotoAlbum/PhotoAlbum";

export function About() {
  return (
    <Container id="about">
      <div className="left-column">
        <Fade direction="left">
          <h2 style={{ color: "var(--accent-yellow)" }}>About me</h2>
        </Fade>

        <Fade direction="left" delay={100}>
          <h3 className="DegreeTitle">
            <img src={DegreeIcon} alt="Degree Icon" width="20" height="20" />
            <div className="lines">
              <span style={{ color: "var(--accent-yellow)" }}>Master of Computing</span>
              <span className="sub">Australian National University</span>
            </div>
          </h3>
          <h3 className="DegreeTitle">
            <img src={DegreeIcon} alt="Degree Icon" width="20" height="20" />
            <div className="lines">
              <span style={{ color: "var(--accent-yellow)" }}>Bachelor of Electronic & Information Engineering</span>
              <span className="sub">The Hong Kong Polytechnic University (PolyU)</span>
            </div>
          </h3>
          <p>
            My career began in 2017, and I’ve worked with multiple companies in Hong Kong and Australia.
            I have a mix of background in <span className="highlight">software and electrical engineering</span>, giving me a unique perspective to design <span className="highlight">interdisciplinary solutions</span>.
          </p>
          <p>
            I moved to Australia in 2022, and gradually transitioned into <span className="highlight">software and cloud development</span> while building on my earlier projects.
            I have <span className="highlight">full working rights</span> in Australia until 2029, with <span className="highlight">permanent residency</span> guaranteed from 2027.
            I’m actively seeking any job opportunities and welcome discussions about potential collaboration.
          </p>
        </Fade>

        {/* <Fade direction="left" delay={200}>
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
        </div> */}

        {/* <Fade direction="left" delay={350}>
          <h3>Here are my certificates:</h3>
        </Fade> */}
      </div>
      <div className="right-column">
        <div className="photo-album" style={{ marginTop: "-20px", marginBottom: "-20px" }}>
          <PhotoAlbum5 />
        </div>
        <img
          src={ACCESS} alt="ACCESS" style={{ width: "80%", height: "auto", borderRadius: "16px", display: "block", margin: "0 auto", maxHeight: "400px" }}
        />
      </div>

    </Container>
  );
}
