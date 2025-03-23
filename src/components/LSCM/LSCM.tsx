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
import { Fade } from "react-awesome-reveal";
import HermanTang from "../../assets/HermanTangCsiroLab.jpg";
import HermanAnuTutor from "../../assets/HermanAnuTutor.jpg";

export function LSCM() {
  return (
    <Container id="architecture">
      <div className="about-text">
        <Fade direction="right">
          <h2>Tutoring at ANU</h2>
        </Fade>

        <Fade direction="right" delay={100}>
          <p>
            Since <span className="highlight">February 2024</span>, I have been working as a <span className="highlight">part-time tutor at ANU</span>, assisting students in the following areas:
          </p>
        </Fade>

        <Fade direction="right" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            <span className="highlight">Computer Networks:</span> Teaching networking fundamentals, including device configuration for <span className="highlight">routers, switches,</span> and <span className="highlight">access points</span>.
          </p>
        </Fade>

        <Fade direction="right" delay={300} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            <span className="highlight">Computer Vision:</span> Introducing image processing concepts such as <span className="highlight">feature detection</span> and <span className="highlight">object recognition</span>, while guiding students in developing AI applications using <span className="highlight">OpenCV</span> and <span className="highlight">TensorFlow</span>.
          </p>
        </Fade>

        <Fade direction="right" delay={400} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            <span className="highlight">Agile Methodology:</span> Mentoring students in <span className="highlight">Agile project management</span> for effective teamwork and software development.
          </p>
        </Fade>



        {/* <Fade direction="left" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Exploring the potential of cloud computing has been exciting. It enables me to offload parts of edge computation to the cloud and visualize IoT and robotics data on web platforms. I also enjoy evaluating different deployment architectures to balance cost and performance effectively.
          </p>
        </Fade> */}

        {/* <Fade direction="right" delay={400}>
          <h3>Here are my main skills:</h3>
        </Fade>

        <div className="hard-skills">
          {[reactIcon, AwsIcon].map((icon, index) => {
            const customStyles = {
              width: "70%", // Adjust sizes per icon
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
      </div>

      {/* ✅ Replaced image with iframe */}
      <div className="about-image">
        <Fade direction="right" delay={200}>
          <img src={HermanAnuTutor} alt="Herman Tang" />
        </Fade>
      </div>
    </Container>
  );
}
