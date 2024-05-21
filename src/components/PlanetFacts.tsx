import "../styles/PlanetFacts.scss";
import { Planet } from "../types/types";

interface PlanetFactsProps {
  planet: Planet[];
}

const PlanetFacts: React.FC<PlanetFactsProps> = ({ planet }) => {
  console.log(planet[0].images.planet);
  return (
    <div className="wrapper planetContainer">
      <div className="planetPictureContainer">
        <img
          className="planetPictureContainer__image"
          src={planet[0].images.planet}
          alt=""
        />
      </div>
      <div className="planetButtonsContainer">
        <button className="planetButtonsContainer__button --one --active">
          Overview
          <span></span>
        </button>
        <button className="planetButtonsContainer__button --two">
          <span></span>
        </button>
        <button className="planetButtonsContainer__button --three">
          <span></span>
        </button>
      </div>
      <div className="planetInfoContainer">
        <h1 className="planetInfoContainer__heading">Mercury</h1>
        <p className="planetInfoContainer__info">
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </p>
        <div className="planetInfoContainer__source">
          <span>Source</span>
          <a className="planetInfoContainer__link" href="">
            Wikipedia
          </a>
        </div>
      </div>
      <div className="planetQuickInfoContainer">
        <div className="planetCharacteristics">
          <span className="planetCharacteristics__first">Rotation Time</span>
          <span className="planetCharacteristics__second">58.6 Days</span>
        </div>
        <div className="planetCharacteristics">
          <span className="planetCharacteristics__first">Revolution Time</span>
          <span className="planetCharacteristics__second">87.97 Days</span>
        </div>
        <div className="planetCharacteristics">
          <span className="planetCharacteristics__first">Radius</span>
          <span className="planetCharacteristics__second">2,439.7 Km</span>
        </div>
        <div className="planetCharacteristics">
          <span className="planetCharacteristics__first">Average Temp.</span>
          <span className="planetCharacteristics__second">430°c</span>
        </div>
      </div>
    </div>
  );
};

export default PlanetFacts;
