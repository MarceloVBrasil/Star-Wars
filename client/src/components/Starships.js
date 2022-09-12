import { useState } from "react";
import { useStarWarsData } from "./Contexts/StarWarsProvider";
import Starship from "./Starship";
import { StarWarsAPI } from "./StarWarsAPI";

export default function Starships() {
  const [characters, starships] = StarWarsAPI();
  const { handleSelectedStarship, selectedStarshipName } = useStarWarsData();
  const selectedStarship = starships.find(
    (s) => s.name === selectedStarshipName
  );
  return (
    <>
      <div className="starships--container">
        <div className="starships--info">
          <div className="starships--info-header">Starships</div>
          {starships.map((starship, index) => {
            return (
              <div
                key={index}
                className="starships--info-item"
                onClick={() => handleSelectedStarship(starship.name)}
              >
                {starship.name}
              </div>
            );
          })}
        </div>
      </div>

      {selectedStarship && <Starship starship={selectedStarship} />}
    </>
  );
}
