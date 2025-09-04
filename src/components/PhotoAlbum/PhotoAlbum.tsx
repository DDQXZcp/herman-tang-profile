import styled from "styled-components";

// Import your photos here
import RobotArm from "../../assets/Lab_Robot_Arm.jpg";
import SensorSet from "../../assets/Sensor_Set.jpg";
import Chuong from "../../assets/CsiroWithChuong.jpg";
import Sundaram from "../../assets/CsiroWithSundaram.jpg";
import LscmAgv from "../../assets/LscmAgv.jpg";
import AimingRobot from "../../assets/AimingRobot.jpg";
import CsiroAgv from "../../assets/HermanTangCsiroLab.jpg"
import Segmentation from "../../assets/Segmentation.gif"
import Tracking from "../../assets/kitti_yolo.gif"
import CiscoRack from "../../assets/CiscoRack.jpeg"
import PacketTracer from "../../assets/PacketTracer.png"
import PolyuCampus from "../../assets/PolyuCampus.jpeg"
import AnuCampus from "../../assets/AnuCampus.jpg"

const AlbumContainer = styled.div`
  max-width: 600px;
  margin: 40px auto; /* centers the album */
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: var(--CsiroBlue);
  }

  /* 2x2 grid layout */
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 2px;
  }

  .grid img {
    width: 100%;
    height: 160px;
    border-radius: 8px;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 480px) {
    .grid {
      grid-template-columns: 1fr 1fr; /* keep 2 columns on mobile; change to 1fr if you prefer 1-column */
      gap: 8px;
      padding: 8px;
    }
  }
`;

export function PhotoAlbum() {
  return (
    <AlbumContainer>
      <div className="grid">
        <img src={RobotArm} alt="Robot Arm" />
        <img src={CsiroAgv} alt="CSIRO AGV" />
        <img src={AimingRobot} alt="Aiming Robot" />
        <img src={LscmAgv} alt="LSCM AGV" />
      </div>
    </AlbumContainer>
  );
}

export function PhotoAlbum2() {
  return (
    <AlbumContainer>
      <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
        <img src={Tracking} alt="Tracking" />
      </div>
    </AlbumContainer>
  );
}

export function PhotoAlbum3() {
  return (
    <AlbumContainer>
      <div className="grid">
        <img src={Segmentation} alt="Segmentation" />
        <img src={Tracking} alt="Tracking" />
      </div>
    </AlbumContainer>
  );
}

export function PhotoAlbum4() {
  return (
    <AlbumContainer style={{ maxWidth: "1600px" }}>
      <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
        <img src={CiscoRack} alt="Cisco Rack" />
        <img src={PacketTracer} alt="Packet Tracer" />
      </div>
    </AlbumContainer>
  );
}
export function PhotoAlbum5() {
  return (
    <AlbumContainer style={{ maxWidth: "1600px" }}>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <img src={PolyuCampus} alt="PolyU Campus" />
        <img src={AnuCampus} alt="ANU Campus" />
      </div>
    </AlbumContainer>
  );
}
export function PhotoAlbum6() {
  return (
    <AlbumContainer style={{ maxWidth: "2000px" }}>
      <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
        <img src={CiscoRack} alt="Cisco Rack" />
      </div>
    </AlbumContainer>
  );
}
