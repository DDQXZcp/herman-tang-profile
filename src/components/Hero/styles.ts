import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 12% clamp(10px, 4vw, 48px) 0;

  display: grid;
  grid-template-columns: 1fr auto 1fr;  /* left | image | right */
  align-items: center;
  gap: clamp(2rem, 4vw, 6rem);
  max-width: 1600px;
  margin-inline: auto;
  background: rgba(0,0,0,0);

  /* force alignments per column */
  .hero-text {
    justify-self: start;   /* stick left */
    & > p { font-size: 1.8rem; }
    h1 { font-size: 7rem; }
    h3 {
      color: "white";
      margin: 1rem 0;
      letter-spacing: 0.1rem;
    }
    p.small-resume {
      margin-bottom: 0;
      letter-spacing: 0.1rem;
      max-width: 500px;
    }
  }

  .hero-text h1,
  .hero-text h3 {
    white-space: nowrap;   /* prevents line break */
  }

  .hero-image {
    justify-self: center;  /* 👈 always centered */
  }

  .hero-text-right {
    justify-self: end;     /* 👈 stick right (add this wrapper around your right col) */
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;
    img, span {
      font-size: 3rem;
      width: 6rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image img {
    max-width: 500px;
    width: 100%;
    height: auto;
    display: block;
  }

  .mini-hero-image {
    display: none;
    max-width: 150px;
  }

  .brand-bar {
    display: flex;
    gap: 16px;
    margin-top: 20px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-radius: 10px;
    background: var(--AnuGold);
    text-decoration: none;
    color: #fff;
    transition: transform .15s ease, background .15s ease;
  }

  .yellow-line {
    width: 200px;
    height: 5px;
    background-color: var(--AnuGold);
    margin-top: 12px;
    margin-bottom: 40px;
  }

  .brand img { width: 22px; height: 22px; }

  .brand:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,0.07);
  }

  .hero-text-right {
    justify-self: end;
    max-width: 360px;
  }

  .services-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .service-item {
    display: flex;
    align-items: center;
    background: #2b2c30;
    border-radius: 12px;
    padding: 12px 16px;
    transition: transform .2s ease, background .2s ease;
  }

  .service-item:hover {
    transform: translateY(-2px);
    background: #34363b;
  }

  .service-item img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
  }

  .service-text {
    flex: 1;
    margin-left: 12px;
  }

  .service-text h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
  }

  .service-text p {
    margin: 0;
    font-size: 0.9rem;
    color: #aaa;
  }

  .service-item .arrow {
    font-size: 1.2rem;
    color: var(--AnuGold);
  }

  .service-item img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;              /* circle size */
    height: 60px;
    border-radius: 50%;       /* makes it a circle */
    background-color: #fff;   /* white background */
    margin-right: 12px;       /* spacing between circle and text */
  }

  @media (max-width: 1420px) {
    grid-template-columns: 1fr 1fr; /* left | right */
    margin-top: 15%;

    .hero-image { display: none; }

    .mini-hero-image {
      display: block;
      margin: 12px 0;
    }

    .hero-text { justify-self: start; }
    .hero-text-right { justify-self: end; }
    .hero-text h1 { font-size: 5rem; }
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr; /* stack */
    gap: 2rem;
    .hero-text,
    .hero-text-right {
      justify-self: start;
    }
  }

  @media (max-width: 600px) {
  /* no side padding; content touches the left edge */
  padding: 12% 0 0;

  /* if you want the section to span edge-to-edge even inside a padded parent */
  /* width: 100vw;
  margin-inline: 0;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw); */

  /* allow headings to wrap so they don't force extra space */
  .hero-text h1,
  .hero-text h3 {
    white-space: normal;
  }

  /* remove any inner left offsets */
  .social-media { padding-left: 0; }
`;
