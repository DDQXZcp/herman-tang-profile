import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

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

  .about-image {
    text-align: center;
    order: -1;

    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  /* ✅ Mobile-friendly adjustments */
  @media only screen and (max-width: 480px) {
    .arcentry {
      max-width: 100%;
      margin-top: 4rem;

      iframe {
        width: 100%;
        height: auto;
        min-height: 300px;
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .arcentry {
      display: flex;
      justify-content: center;
      max-width: 100%;

      iframe {
        width: 100%;
        height: 400px;
      }
    }
  }
`;
