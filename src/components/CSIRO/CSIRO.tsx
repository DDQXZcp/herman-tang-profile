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
            <h2>About this Website</h2>
          </Fade>

          <Fade direction="left" delay={100}>
            <p>
              Hi there! I'm Herman Tang, a website developer with a passion for creating custom online experiences. 
              With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
            </p>
          </Fade>

          <Fade direction="left" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <p>
              But my services go beyond just custom development - I'm also proficient in using CMS systems like 
              WordPress and Shopify, making it easy for clients to take control of their websites.
            </p>
          </Fade>

          <Fade direction="left" delay={300}>
            <p>
              If you need a new website or a revamp of your online presence, I'd love to help. 
              Let's bring your website vision to life together!
            </p>
          </Fade>

          {/* ✅ PaperCard on the left */}
          <div className="paper-card">
            <PaperCard />
          </div>
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