import { Container } from "./styles";
import { Fade } from "react-awesome-reveal";
import { PaperCard } from "../PaperCard/PaperCard";
import { PhotoAlbum, PhotoAlbum2, PhotoAlbum3 } from "../PhotoAlbum/PhotoAlbum"; 
import FingerRight from "../../assets/FingerRight.png";
import TechIcon from "../../assets/TechIcon.png";
import Segmentation from "../../assets/Segmentation.gif"
import Tracking from "../../assets/kitti_yolo.gif"
import CloudIcon from "../../assets/CloudIcon.png"

export function CSIRO() {
  return (
    <Container id="AiRobotics">

      {/* Full-width section on top */}
      <div className="full-width">
        <h2 style={{ color: "var(--accent-yellow)" }}>AI & Robotics</h2>
      </div>
      {/* ✅ Left Column: Text & PaperCard */}
      <div className="left-column">
        <div className="about-text">
          <Fade direction="left">
            <h2>Computer Vision & AI</h2>
          </Fade>
          <div className="photo-album">
            <PhotoAlbum3 />
          </div>

          <Fade direction="left" delay={100}>
            <h3 style={{color: "var(--white)"}}>
              <img src={FingerRight} alt="Finger Right" width="20px"/> Multiple Computer Vision Projects Experience
            </h3>
            <p>
              I integrate AI and computer vision models into application backends, working with both traditional approaches and modern transformer-based architectures. 
            </p>
            <div className="brand-bar">
              <p className="brand">YOLO</p>
              <p className="brand">Mask R-CNN</p>
              <p className="brand" style={{ background: "var(--BackendGreen)" }}>U-Net</p>
              <p className="brand" style={{ background: "var(--BackendGreen)" }}>SegNet</p>
              <p className="brand" style={{ background: "var(--DockerBlue)" }}>SAM</p>
              <p className="brand" style={{ background: "var(--DockerBlue)" }}>Grounding DINO</p>
              <p className="brand" style={{ background: "var(--DockerBlue)" }}>Segformer</p>
              
            </div>
            <p>
              <span className="highlight">What I can deliver</span>
            </p>
            <p>
              <img src={TechIcon} alt="Tech Icon" width="20px"/> Batch File Processing (e.g. OCR, Text Extraction, Super Resolution)
            </p>
            <p>
              <img src={TechIcon} alt="Tech Icon" width="20px"/> Real-time Computer Vision Tasks (e.g. Face Detection, Pose Estimation, QR Code Scanning)
            </p>
            <p>
              <img src={TechIcon} alt="Tech Icon" width="20px"/> AI Components (e.g. Chatbots, Speech-to-Text Conversion)
            </p>
            <p>
              I assess and select <span className="highlight">deployment strategies</span> based on the specific task, ensuring the best outcome for the business.
            </p>
            <p>
              <img src={CloudIcon} alt="Cloud Icon" width="20px"/> <span className="highlight">Full Cloud:</span> Offers maximum scalability with minimal operational overhead, ideal for batch processing workloads.
            </p>
            <p>
              <img src={CloudIcon} alt="Cloud Icon" width="20px"/> <span className="highlight">Hybrid Cloud:</span> Leverages existing on-premises GPU servers or supports large language models when cloud services are either cost-prohibitive or lack optimized GPU performance.
            </p>
            <p>
              <img src={CloudIcon} alt="Cloud Icon" width="20px"/> <span className="highlight">Edge Deployment:</span> (e.g., NVIDIA Jetson, Raspberry Pi) Designed for mobile or embedded applications that demand low latency and offline capabilities.
            </p>
          </Fade>
        </div>
      </div>

      {/* ✅ Right Column: Google Slides on top, Photo Album below */}
      <div className="right-column">
        <Fade direction="left">
          <h2>Robotics</h2>
          <div className="photo-album">
            <PhotoAlbum />
          </div>
          <h3 style={{color: "var(--white)"}}>
            <img src={FingerRight} alt="Finger Right" width="20px"/> 2 years of Robotics Development Experience
          </h3>
          <h3 style={{color: "var(--white)"}}>
            <img src={FingerRight} alt="Finger Right" width="20px"/> Published Research on Real-time Localization and Mapping
          </h3>
          <Fade direction="up" delay={350}>
            <div className="paper-card">
              <PaperCard />
            </div>
          </Fade>
           <p>
              I develop robotic systems—such as <span className="highlight">robot arms, drones, and autonomous vehicles</span>—
              for applications in <span className="highlight">indoor scanning, navigation, human tracking, and object manipulation</span>. 
              I deploy software on Linux-based / ARM-based edge devices and integrate them with LiDAR sensors and depth cameras.
            </p>
            <p>
              <span className="highlight">What I can deliver</span>
            </p>
            <p>
              <img src={TechIcon} alt="Tech Icon" width="20px"/> Mechanical & Electrical Design (e.g. 3D Modeling, Circuit Design)
            </p>
            <p>
              <img src={TechIcon} alt="Tech Icon" width="20px"/> Linux-based Software Development (e.g. ROS System, Real-time SLAM, Path Planning, Robot Control)
            </p>
          
          {/* <h3>
            <img src={FingerRight} alt="Finger Right" width="20px"/> Certified AWS Solutions Architect - Associate
          </h3> */}
          
        </Fade>
        {/* <div className="presentation">
          <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vRThqybjSzsoWtsu8hzs0PejUhcT_Ml7h6kNqI04-RQ5VaJnyQkV7C8jkJ2h1oT3EgmX0xe-ZNFJZr7/embed?start=false&loop=true&delayms=60000" 
            frameBorder="0" 
            width="100%" 
            height="400px" 
            allowFullScreen>
          </iframe>
        </div> */}

        {/* ✅ Photo Album below Google Slides */}
        
      </div>
    </Container>
  );
}