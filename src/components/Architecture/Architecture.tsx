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
import { Fade } from "react-awesome-reveal";

export function Architecture() {
  return (
    <Container id="architecture">
      <div className="about-text">
        <Fade direction="left">
          <h2>About this Website</h2>
        </Fade>

        <Fade direction="left" delay={100}>
          <p>
            Hi there! I'm Herman Tang, a website developer with a passion for creating custom online experiences. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
          </p>
        </Fade>

        <Fade direction="left" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Shopify, making it easy for clients to take control of their websites.
          </p>
        </Fade>

        <Fade direction="left" delay={300}>
          <p>
            If you need a new website or a revamp of your online presence, I'd love to help. Let's bring your website vision to life together!
          </p>
        </Fade>

        <Fade direction="left" delay={400}>
          <h3>Here are my main skills:</h3>
        </Fade>

        <div className="hard-skills">
          {[wordpress, shopify, reactIcon, typescriptIcon, vueIcon, nodeIcon, htmlIcon, cssIcon, boostrapIcon, jsIcon].map((icon, index) => (
            <div className="hability" key={index}>
              <Fade direction="up" delay={100 + index * 20}>
                <img src={icon} alt="Skill Icon" />
              </Fade>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Replaced image with iframe */}
      <div className="arcentry">
        <iframe src="https://arcentry.com/app/embed.html?id=f5cc5a63-30f0-454e-8c8e-723e64b31eae"></iframe>
      </div>
    </Container>
  );
}
