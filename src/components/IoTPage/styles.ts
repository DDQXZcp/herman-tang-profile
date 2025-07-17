import styled from "styled-components";
import backgroundImage from "../../assets/CSIRO_Lab.jpg"; // Adjust path if needed

export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  /* ✅ Use CSS Variable for Scrollbar Width */
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), 
              url(${backgroundImage}) no-repeat left center fixed;
  background-size: calc(100% - var(--scrollbar-width, 0px)) auto; /* ✅ Dynamically adjusts */

  @media (max-width: 740px) {
    padding: 0 4rem;
  }

  @media (max-width: 360px) {
    padding: 0 2rem;
  }
`;
