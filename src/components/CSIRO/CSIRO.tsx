import { Container } from "./styles";
import { Fade } from "react-awesome-reveal";
import { PaperCard } from "../PaperCard/PaperCard";
import { PhotoAlbum } from "../PhotoAlbum/PhotoAlbum"; 

export function CSIRO() {
  return (
    <Container id="CSIRO">
      {/* ✅ Left Column: Text & PaperCard */}
      <div className="left-column">
        <div className="about-text">
          <Fade direction="left">
            <h2>Robotics SLAM Research at CSIRO</h2>
          </Fade>

          <Fade direction="left" delay={100}>
            <p>
              From <span className="highlight">July 2023 to November 2024</span>, 
              I worked at <span className="highlight">CSIRO</span> as a <span className="highlight">software engineer</span>, 
              focusing on improving <span className="highlight">dynamic SLAM algorithms</span>. 
            </p>
          </Fade>

          <Fade direction="left" delay={150} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <p>
              To collect data and validate our appoach, I developed an <span className="highlight">indoor scanning robot</span> equipped with an <span className="highlight">NVIDIA AGX Xavier</span>, <span className="highlight">RealSense D435i depth camera</span>, and <span className="highlight">Mid-360 LiDAR</span>. I also programmed the <span className="highlight">ROS system</span> for <span className="highlight">real-time odometry</span> and <span className="highlight">3D reconstruction</span>.
            </p>
          </Fade>
          
          <Fade direction="left" delay={200}>
            <p>
              Our research was <span className="highlight">published at the DICTA 2024 Conference</span>.
            </p>
          </Fade>

          <Fade direction="left" delay={250}>
            <h3>Research Abstract:</h3>
          </Fade>

          <Fade direction="left" delay={300} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <p>
              Existing <span className="highlight">dynamic SLAM</span> solutions often rely on <span className="highlight">single-object semantic segmentation</span>, which is effective only when 
              object classes are known and their static or dynamic nature is predefined. 
              To address this limitation, we introduce <span className="highlight">video object segmentation (VOS)</span>, 
              which combines <span className="highlight">segmentation and tracking</span> for improved dynamic SLAM performance. 
              Additionally, we designed a <span className="highlight">low-cost mobile robot system</span> tailored for dynamic SLAM applications 
              and curated a dataset using <span className="highlight">affordable RGB-D sensors</span>.
            </p>
          </Fade>

          {/* ✅ PaperCard on the left */}
          <Fade direction="up" delay={350}>
            <div className="paper-card">
              <PaperCard />
            </div>
          </Fade>
          
        </div>
      </div>

      {/* ✅ Right Column: Google Slides on top, Photo Album below */}
      <div className="right-column">
        <div className="presentation">
          <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vRThqybjSzsoWtsu8hzs0PejUhcT_Ml7h6kNqI04-RQ5VaJnyQkV7C8jkJ2h1oT3EgmX0xe-ZNFJZr7/embed?start=false&loop=true&delayms=60000" 
            frameBorder="0" 
            width="100%" 
            height="400px" 
            allowFullScreen>
          </iframe>
        </div>

        {/* ✅ Photo Album below Google Slides */}
        <div className="photo-album">
          <PhotoAlbum />
        </div>
      </div>
    </Container>
  );
}