import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

// Import your photos here
import poster from "../../assets/poster_me.jpg";
import RobotArm from "../../assets/Lab_Robot_Arm.jpg";
import SensorSet from "../../assets/Sensor_Set.jpg";
import Chuong from "../../assets/CsiroWithChuong.jpg";
import Sundaram from "../../assets/CsiroWithSundaram.jpg";

const AlbumContainer = styled.div`
  max-width: 600px;
  margin: 40px auto; /* ✅ Centers the album */
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: var(--CsiroBlue);
  }

  .carousel .slide img {
    border-radius: 1rem;
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
          <img src={RobotArm} alt="Robot Arm" />
        </div>
        <div>
          <img src={SensorSet} alt="Robot Sensor Set" />
        </div>
        <div>
          <img src={Chuong} alt="Discovery Cafe with Chuong" />
        </div>
        <div>
          <img src={Sundaram} alt="Discovery Cafe with Sundaram" />
        </div>
      </Carousel>
    </AlbumContainer>
  );
}
