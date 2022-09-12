import Character from "./Character";
import { useStarWarsData } from "./Contexts/StarWarsProvider";
import { StarWarsAPI } from "./StarWarsAPI";

export default function Characters({ loggedIn }) {
  const [characters, starships] = StarWarsAPI();
  const { handleSelectedCharacter, selectedCharacterName } = useStarWarsData();
  const selectedCharacter = characters.find(
    (c) => c.name === selectedCharacterName
  );
  return (
    <div className="characters--container">
      <div className="characters--info">
        <div className="characters--info-header">Characters</div>
        {characters.map((character, index) => {
          return (
            <div
              key={index}
              className={`${
                loggedIn
                  ? "characters--info-item-logged-user characters--info-item"
                  : "characters--info-item"
              }`}
              onClick={() =>
                consitionalHandle(handleSelectedCharacter, character.name)
              }
            >
              {character.name}
            </div>
          );
        })}
      </div>

      {selectedCharacter && <Character character={selectedCharacter} />}
    </div>
  );

  function consitionalHandle(func, argument) {
    if (loggedIn) func(argument);
  }
}
