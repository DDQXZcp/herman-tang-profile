import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: start;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--CsiroBlue);
  }

  h3 {
    margin-top: 2rem;
    color: var(--CsiroBlue);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  /* ✅ Ensure PaperCard is properly aligned */
  .paper-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* ✅ Google Slides iframe styling */
  .presentation {
    width: 100%;
    text-align: center;

    iframe {
      max-width: 100%;
      height: 400px;
      border: none;
    }
  }

  /* ✅ Reduce the gap between Google Slides and Photo Album */
  .photo-album {
    text-align: center;
    margin-top: -40px; /* ✅ Reduce spacing */
    display: flex;
    justify-content: center;
  }

  /* ✅ Mobile-friendly adjustments */
  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .paper-card {
      width: 100%;
    }

    .presentation {
      width: 100%;
    }

    .photo-album {
      width: 100%;
      margin-top: 0px;
    }
  }
`;
