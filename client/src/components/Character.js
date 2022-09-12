import React from "react";

export default function Character({ character }) {
  return (
    <div className="character--container">
      <div className="character--info">
        <div className="character--info-header">{character.name}</div>
        <div className="character--info-item">
          <h1>height:</h1> <p>{character.height}</p>
        </div>
        <div className="character--info-item">
          <h1>mass:</h1> <p>{character.mass}</p>
        </div>
        <div className="character--info-item">
          <h1>hair color:</h1> <p>{character.hair_color}</p>
        </div>
        <div className="character--info-item">
          <h1>skin color:</h1> <p>{character.skin_color}</p>
        </div>
        <div className="character--info-item">
          <h1>eye color:</h1> <p>{character.eye_color}</p>
        </div>
        <div className="character--info-item">
          <h1>birth year:</h1> <p>{character.birth_year}</p>
        </div>
        <div className="character--info-item">
          <h1>gender:</h1> <p>{character.gender}</p>
        </div>
      </div>
    </div>
  );
}
