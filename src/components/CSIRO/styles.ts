import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: center;

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
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
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

  /* ✅ Ensure Photo Album is centered below everything */
  .photo-album {
    grid-column: span 2; /* ✅ Makes it take full width below both sections */
    text-align: center;
    margin-top: 3rem;
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

    .photo-album {
      width: 100%;
    }
  }
`;
