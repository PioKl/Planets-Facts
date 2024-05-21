import { useRef } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import PlanetFacts from "./components/PlanetFacts";
import data from "./data/data.json";
import { Planet } from "./types/types";

function App() {
  const planet: Planet[] = data;

  const mainRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header mainRef={mainRef} />
      <main className="main" ref={mainRef}>
        <PlanetFacts planet={planet} />
      </main>
    </>
  );
}

export default App;
