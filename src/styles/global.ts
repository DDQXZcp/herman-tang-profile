import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    --white: #FFFFFF;
    --CsiroBlue: #00AEEF;
    --AnuGold: #B68D40;
    --accent-yellow: #FFC107;
    --IeeeBlue: #062D4F;
    --BackendGreen: #004438;
    --DockerBlue: #1D63ED;
    --MySqlOrange: #E48E00;
    scroll-padding-top: 10rem;
  }

  /* ✅ Add Highlight */
  .highlight {
    color: var(--accent-yellow);
    font-weight: bold;
  }

    /* ✅ Add Transparent White Circle */
  .icon-wrapper {
    width: 10rem; /* ✅ Slightly larger than icon */
    height: 10rem; /* ✅ Creates circular effect */
    background: rgba(255, 255, 255, 1); /* ✅ Semi-transparent white */
    border-radius: 50%; /* ✅ Makes it a circle */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* ✅ Optional: Adds a subtle shadow */
  }

  .icon-wrapper img {
    width: 8rem; /* ✅ Keep icon size unchanged */
    height: auto;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black); /* ✅ Always dark theme */
    color: #FFFF;
  }

  body, input, textarea, button {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    max-width: 500px;
  }

  button, .button {
    border: none;
    cursor: pointer;
    background-color: var(--CsiroBlue);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    
    &:hover {
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  .logo {
    font-size: 3rem;
    color: #FFFF;
  }
`;