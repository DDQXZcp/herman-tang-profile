import styled from "styled-components";


export const Container = styled.footer`
  background: linear-gradient(
      to bottom,
      rgba(43, 43, 43, 0) 0%,        /* fully transparent at the very top */
      rgba(43, 43, 43, 0.9) 10%,     /* fade in */
      rgba(43, 43, 43, 0.9) 100%,     /* hold opacity in the middle */
    );
  padding: 3rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    font-size: 1.2rem;
    margin-top: 0rem;
    color: var(--CsiroBlue);
  }

  h3 {
    font-size: 2rem;
    margin-top: 0rem;
    color: var(--accent-yellow);
  }

  p {
    margin-top: 0rem;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    max-width: 500px;
    white-space: nowrap;
    margin-left: 4rem;
  }

  a {
    margin-top: 2rem;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    max-width: 500px;
  }

  .logo {
    display: flex;
    flex-direction: column;  /* ✅ Stack elements vertically */
    align-items: center;     /* ✅ Center-align */
    text-align: center;      /* ✅ Center text */
    gap: 0.4rem;             /* ✅ Add spacing */
  }

  .acknowledgement-title {
    font-size: 2rem;   /* ✅ Make "Acknowledgement" larger */
    font-weight: bold;
    color: var(--green); /* Change color if needed */
  }

  .acknowledgement-text {
    font-size: 2rem;  /* ✅ Make the other text smaller */
    color: white;
  }

  .acknowledgement-link a {
    font-size: 2rem;
    color: white;  /* ✅ Change link color */
    text-decoration: underline;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }

  .brand-link {
    margin: 0;
    margin-top: 1rem;
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


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 940px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`