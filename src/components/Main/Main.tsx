import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { Architecture } from "../Architecture/Architecture";
import {IT} from "../IT/IT"
import { CSIRO } from "../CSIRO/CSIRO";
import { useEffect } from "react";
import {AnuTutor} from "../AnuTutor/AnuTutor"
import {LSCM} from "../LSCM/LSCM"
import { IoT } from "../IoT/IoT";
import { useLocation } from "react-router-dom"; // ✅ to check current path

export function Main() {

  const location = useLocation(); // ✅ Hook call

  useEffect(() => {
    const iframe = document.querySelector("iframe");

    if (!iframe) return;

    const disablePageScroll = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`); // ✅ Store in CSS
      document.documentElement.style.overflow = "hidden"; // ✅ Hide scrollbar
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`; // ✅ Prevents page width shift
    };

    const enablePageScroll = () => {
      document.documentElement.style.setProperty("--scrollbar-width", `0px`); // ✅ Reset width
      document.documentElement.style.overflow = ""; // ✅ Restore scrolling
      document.documentElement.style.paddingRight = ""; // ✅ Remove padding fix
    };

    iframe.addEventListener("mouseover", disablePageScroll);
    iframe.addEventListener("mouseleave", enablePageScroll);

    return () => {
      iframe.removeEventListener("mouseover", disablePageScroll);
      iframe.removeEventListener("mouseleave", enablePageScroll);
    };
  }, []);

  return (
    <Container>
      <>
        <Hero />
        {/* <About /> */}
        <Architecture />
        <CSIRO />
        <IT />
        {/* <AnuTutor /> */}
        <About />
        {/* <Project /> */}
        {/* <Contact /> */}
      </>
    </Container>
  );
}
