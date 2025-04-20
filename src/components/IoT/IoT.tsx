import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Jetson from "../../assets/jetson-agx-xavier.jpg";

export function IoT() {
  const [temperature, setTemperature] = useState<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket("wss://afdf0mmrql.execute-api.ap-southeast-2.amazonaws.com/prod");

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.temperature !== undefined) {
          setTemperature(`${data.temperature} °C`);
        }
      } catch (e) {
        console.error("Error parsing message", e);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => ws.close();
  }, []);

  const renderJetsonCard = (title: string) => (
    <ScrollAnimation animateIn="flipInX" key={title}>
      <div className="project">
        <header>
          <h3 className="project-title">{title}</h3>
        </header>

        <div className="project-image">
          <img src={Jetson} alt="Jetson" style={{ width: "40%" }} />
        </div>

        <div className="body" style={{ textAlign: "center" }}>
          <h3 style={{ color: "white" }}>Real-time Temperature</h3>
          <p style={{ fontSize: "4rem", fontWeight: "bold", color: "var(--AnuGold)" }}>
            {temperature ? temperature : "No Data"}
          </p>
        </div>

        <footer>
          <ul className="tech-list">
            <li>AWS IoT Core</li>
            <li>MQTT</li>
          </ul>
        </footer>
      </div>
    </ScrollAnimation>
  );

  return (
    <Container id="project">
      <h2>IoT Real-time Visualization</h2>
      <div className="projects">
        {["Jetson-1", "Jetson-2", "Jetson-3"].map(renderJetsonCard)}
      </div>
    </Container>
  );
}