import styled from "styled-components";


export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

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


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
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