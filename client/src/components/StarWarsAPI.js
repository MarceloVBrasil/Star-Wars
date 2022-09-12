import { useEffect, useState } from "react";

export function StarWarsAPI() {
  const URL = `https://swapi.dev/api`;

  const [characters, setCharacters] = useState([]);
  const [starships, setStarships] = useState([]);

  async function getAllCharacters() {
    const response = await fetch(`${URL}/people`);
    const characters = await response.json();

    setCharacters(characters.results);
  }

  async function getAllStarships() {
    const response = await fetch(`${URL}/starships`);
    const starships = await response.json();

    setStarships(starships.results);
  }

  useEffect(() => {
    getAllCharacters();
    getAllStarships();
  }, []);

  return [characters, starships];
}
