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

export function Architecture() {
  return (
    <Container id="architecture">
      <div className="about-text">
        <Fade direction="right">
          <h2>Cloud Development Experience</h2>
        </Fade>

        <Fade direction="right" delay={100}>
        <p>
          I have <span className="highlight">designed and deployed web pages and web applications</span> for various projects,  
          ranging from application demonstrations to data visualization. I am most familiar with <span className="highlight">React + AWS framework</span>, 
          which follows a similar architecture to this profile page.
        </p>
        </Fade>

        <Fade direction="right" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I developed this website using <span className="highlight">React</span> for the frontend  
            and hosted it on an <span className="highlight">AWS S3 Bucket</span>,  
            with <span className="highlight">CloudFront</span> providing global caching. 
            I also registered a custom domain using <span className="highlight">Amazon Route 53</span>,  
            and the website supports <span className="highlight">REST API handling</span>,  
            enabling seamless integration with <span className="highlight">serverless computing</span> and <span className="highlight">database services</span>.  
          </p>
        </Fade>

        <Fade direction="right" delay={300} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            A <span className="highlight">DevOps workflow</span> is also in place,  
            where every Git push triggers a <span className="highlight">CI/CD pipeline</span>  
            to perform <span className="highlight">build testing</span> and <span className="highlight">auto-deployment on AWS</span>.  
          </p>
        </Fade>


        {/* <Fade direction="left" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Exploring the potential of cloud computing has been exciting. It enables me to offload parts of edge computation to the cloud and visualize IoT and robotics data on web platforms. I also enjoy evaluating different deployment architectures to balance cost and performance effectively.
          </p>
        </Fade> */}

        <Fade direction="right" delay={400}>
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
        </div>
      </div>

      {/* ✅ Replaced image with iframe */}
      <div className="arcentry">
        <iframe src="https://arcentry.com/app/embed.html?id=b48cf570-a138-4950-93c2-231ff21bc030"></iframe>
      </div>
    </Container>
  );
}