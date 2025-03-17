import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      {/* Sections */}
      <Hero />
      <About />
      <Project />
      <Contact />
    </Container>
  );
}
