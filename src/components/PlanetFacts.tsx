import { useState } from "react";
import "../styles/PlanetFacts.scss";
import { Planet } from "../types/types";
import { motion, AnimatePresence } from "framer-motion";

interface PlanetFactsProps {
  planets: Planet[];
  planetIndex: number;
}

const PlanetFacts: React.FC<PlanetFactsProps> = ({ planets, planetIndex }) => {
  const [informationOptionChoosed, setInformationOptionChoosed] =
    useState("overview");
  const handleButtonClick = (name: string) => {
    setInformationOptionChoosed(name);
  };
  return (
    <div className="wrapper planetContainer">
      <div className="planetPictureContainer">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={`planet-${planetIndex}`}
            className={`planetPictureContainer__image --${planets[
              planetIndex
            ].name.toLowerCase()}`}
            src={
              informationOptionChoosed === "overview" ||
              informationOptionChoosed === "geology"
                ? planets[planetIndex].images.planet
                : "" || informationOptionChoosed === "structure"
                ? planets[planetIndex].images.internal
                : ""
            }
            alt=""
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          />
        </AnimatePresence>
        <AnimatePresence mode="wait" initial={false}>
          {informationOptionChoosed === "geology" && (
            <motion.img
              key={`geology-${planetIndex}`}
              className={`planetPictureContainer__geologyImage --${planets[
                planetIndex
              ].name.toLowerCase()}`}
              src={planets[planetIndex].images.geology}
              alt=""
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="planetButtonsContainer">
        <button
          className={`planetButtonsContainer__button --one ${
            informationOptionChoosed === "overview"
              ? `--active --${planets[planetIndex].name.toLowerCase()}`
              : ""
          }`}
          onClick={() => handleButtonClick("overview")}
        >
          Overview
          <span
            className={`planetButtonsContainer__span --${planets[
              planetIndex
            ].name.toLowerCase()}`}
          ></span>
        </button>
        <button
          className={`planetButtonsContainer__button --two ${
            informationOptionChoosed === "structure"
              ? `--active --${planets[planetIndex].name.toLowerCase()}`
              : ""
          }`}
          onClick={() => handleButtonClick("structure")}
        >
          <span
            className={`planetButtonsContainer__span --${planets[
              planetIndex
            ].name.toLowerCase()}`}
          ></span>
        </button>
        <button
          className={`planetButtonsContainer__button --three ${
            informationOptionChoosed === "geology"
              ? `--active --${planets[planetIndex].name.toLowerCase()}`
              : ""
          }`}
          onClick={() => handleButtonClick("geology")}
        >
          <span
            className={`planetButtonsContainer__span --${planets[
              planetIndex
            ].name.toLowerCase()}`}
          ></span>
        </button>
      </div>
      <div className="planetInfoContainer">
        <h1 className="planetInfoContainer__heading">
          {planets[planetIndex].name}
        </h1>
        <p className="planetInfoContainer__info">
          {informationOptionChoosed === "overview" &&
            planets[planetIndex].overview.content}
          {informationOptionChoosed === "structure" &&
            planets[planetIndex].structure.content}
          {informationOptionChoosed === "geology" &&
            planets[planetIndex].geology.content}
        </p>
        <div className="planetInfoContainer__source">
          <span>Source</span>
          <a
            className="planetInfoContainer__link"
            href={planets[planetIndex].overview.source}
            target="_blank"
          >
            Wikipedia
          </a>
        </div>
      </div>
      <div className="planetQuickInfoContainer">
        <div className="planetCharacteristics">
          <span className="planetCharacteristics__first">Rotation Time</span>
          <span className="planetCharacteristics__second">
            {planets[planetIndex].rotation}
          </span>
        </div>
        <div className="planetCharacteristics">
          <span className="planetCharacteristics__first">Revolution Time</span>
          <span className="planetCharacteristics__second">
            {planets[planetIndex].revolution}
          </span>
        </div>
        <div className="planetCharacteristics">
          <span className="planetCharacteristics__first">Radius</span>
          <span className="planetCharacteristics__second">
            {planets[planetIndex].radius}
          </span>
        </div>
        <div className="planetCharacteristics">
          <span className="planetCharacteristics__first">Average Temp.</span>
          <span className="planetCharacteristics__second">
            {planets[planetIndex].temperature}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanetFacts;
