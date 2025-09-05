import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: start;
  padding: 4rem 0rem;

  /* --- Full-width overlay just for this section --- */
  position: relative;         /* create stacking context for the mask */
  /* Mask stretches to viewport width, centered on the section */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 100vw;             /* cover the full viewport width */
    transform: translateX(-50%);
    background: linear-gradient(
      to bottom,
      rgba(33, 34, 39, 0) 0%,        /* fully transparent at the very top */
      rgba(33, 34, 39, 0.9) 2%,     /* fade in */
      rgba(33, 34, 39, 0.9) 98%,     /* hold opacity in the middle */
      rgba(33, 34, 39, 0) 100%       /* fade out at bottom */
    );
    pointer-events: none;     /* do not block clicks */
    z-index: 0;               /* behind content, above background */
  }
  /* ensure everything in the section is above the mask */
  > * {
    position: relative;
    z-index: 1;
  }

  h1,
  h2,
  h3 {
    white-space: nowrap; /* prevents line break */
  }

  .full-width {
    grid-column: 1 / -1; /* spans across all columns */
    text-align: center;
  }

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

  .brand-bar {
    display: flex;
    gap: 10px;
    row-gap: 10px;     /* smaller vertical spacing */
    margin-top: 10px;
    flex-wrap: wrap;   /* <-- allow multiple rows */
    max-width: 500px;
  }

  .brand {
    margin: 0;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-radius: 10px;
    background: var(--AnuGold);
    text-decoration: none;
    white-space: nowrap;
    color: #fff;
    transition: transform .15s ease, background .15s ease;
  }

  .brand img { width: 22px; height: 22px; }

  .brand:hover {
    transform: translateY(-2px);
  }

  h2 {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--CsiroBlue);
  }

  h3 {
    margin-top: 2rem;
    color: var(--accent-yellow);
  }

  p {
    margin-top: 2rem;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    max-width: 540px;
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

  .photo-album {
    text-align: center;
    margin-top: -40px; /* ✅ Reduce spacing */
    display: flex;
    justify-content: center;
    margin-bottom: -40px;
  }

  .left-column,
  .right-column {
    justify-self: start;   /* grid item alignment */
    align-self: start;
  }

  /* ✅ Mobile-friendly adjustments */
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;

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
    }
  }

  @media only screen and (max-width: 600px) {
    h1,h2,h3 {
      white-space: normal; /* allow line break */
    }
  }
`;
