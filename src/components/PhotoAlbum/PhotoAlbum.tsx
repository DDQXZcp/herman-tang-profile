import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

// Import your photos here
import photo1 from "../../assets/vscode-icon.svg";
import photo2 from "../../assets/vscode-icon.svg";
import photo3 from "../../assets/vscode-icon.svg";

const AlbumContainer = styled.div`
  max-width: 600px;
  margin: 40px auto; /* ✅ Centers the album */
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 1.8rem;
    color: #23ce6b;
  }

  .carousel .slide img {
    border-radius: 10px;
  }
`;

export function PhotoAlbum() {
  return (
    <AlbumContainer>
      <h3>Photo Album</h3>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={false}
        interval={3000}
        showThumbs={false}
      >
        <div>
          <img src={photo1} alt="Photo 1" />
        </div>
        <div>
          <img src={photo2} alt="Photo 2" />
        </div>
        <div>
          <img src={photo3} alt="Photo 3" />
        </div>
      </Carousel>
    </AlbumContainer>
  );
}
