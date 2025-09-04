import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
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
      rgba(42, 43, 56, 0) 0%,        /* fully transparent at the very top */
      rgba(42, 43, 56, 0.9) 2%,     /* fade in */
      rgba(42, 43, 56, 0.9) 98%,     /* hold opacity in the middle */
      rgba(42, 43, 56, 0) 100%       /* fade out at bottom */
    );
    pointer-events: none;     /* do not block clicks */
    z-index: 0;               /* behind content, above background */
  }
  /* ensure everything in the section is above the mask */
  > * {
    position: relative;
    z-index: 1;
  }

  .left-column,
  .right-column {
    justify-self: start;   /* grid item alignment */
    align-self: start;
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

  h1,
  h2,
  h3 {
    white-space: nowrap; /* prevents line break */
  }

  h1 {
    display: inline-block;
    margin-top: 2rem;
    font-size: 2.4rem;
  }

  h2 {
    display: inline-block;
    margin-bottom: 0rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--CsiroBlue);
  }

  h3 {
    margin-top: 2rem;
    color: var(--white);
  }

  p {
    margin-top: 2rem;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    max-width: 500px;
  }

  a {
    margin-top: 2rem;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    max-width: 500px;
  }

  .icon-wrapper-large {
    width: 14rem;
    height: 14rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .icon-wrapper-large img {
    width: 12rem;
    height: auto;
  }

  .demo-image {
    text-align: center;
    order: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .demo-image img {
    max-width: 600px;    /* ensures both are the same width */
    height: auto;        /* keeps proportions */
    border-radius: 6px;  /* optional, nicer look */
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

  .brand-link {
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

  .brand-link:hover {
    transform: translateY(-2px);
    background: var(--IeeeBlue);
  }

  /* Mobile-friendly adjustments */
  @media only screen and (max-width: 480px) {
    .demo-image {
      max-width: 100%;
      margin-top: 4rem;

      iframe {
        width: 100%;
        height: auto;
        min-height: 300px;
      }
    }
  }

  @media (max-width: 1260px) {
    display: block;
    text-align: left;

    .hard-skills {
      justify-content: left;
    }

    .demo-image {
      justify-content: center;
      max-width: 100%;

      iframe {
        width: 100%;
        height: 400px;
      }
    }
  }
`;
