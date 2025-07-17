import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { Architecture } from "../Architecture/Architecture";
import { CSIRO } from "../CSIRO/CSIRO";
import { useEffect } from "react";
import {AnuTutor} from "../AnuTutor/AnuTutor"
import {LSCM} from "../LSCM/LSCM"
import { IoT } from "../IoT/IoT";
import { useLocation } from "react-router-dom"; // ✅ to check current path

export function IoTPage() {

  return (
    <Container>
      <>
        <div id="iot">
          <IoT />
        </div>
      </>
    </Container>
  );
}