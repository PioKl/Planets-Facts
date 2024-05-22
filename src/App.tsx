import { useRef, useState } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import PlanetFacts from "./components/PlanetFacts";
import data from "./data/data.json";
import { Planet } from "./types/types";

function App() {
  const planets: Planet[] = data;
  const [planetIndex, setPlanetIndex] = useState(0);

  const mainRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header
        mainRef={mainRef}
        planets={planets}
        setPlanetIndex={setPlanetIndex}
      />
      <main className="main" ref={mainRef}>
        <PlanetFacts planets={planets} planetIndex={planetIndex} />
      </main>
    </>
  );
}

export default App;
