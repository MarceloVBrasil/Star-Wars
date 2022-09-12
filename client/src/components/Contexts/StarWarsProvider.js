import React, { useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const StarWarsContext = React.createContext();

export function useStarWarsData() {
  return useContext(StarWarsContext);
}

export default function StarWarsProvider({ children }) {
  const [selectedStarshipName, setSelectedStarshipName] = useState(undefined);
  const [selectedCharacterName, setSelectedCharacterName] = useState(undefined);
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");

  function handleSelectedStarship(name) {
    setSelectedStarshipName(name);
  }

  function handleSelectedCharacter(name) {
    setSelectedCharacterName(name);
  }

  function storeAccessToken(token) {
    setAccessToken(token);
  }

  const starWarsDataValue = {
    handleSelectedCharacter,
    handleSelectedStarship,
    storeAccessToken,
    selectedCharacterName,
    selectedStarshipName,
  };

  return (
    <StarWarsContext.Provider value={starWarsDataValue}>
      {children}
    </StarWarsContext.Provider>
  );
}
