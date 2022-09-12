import React from "react";

export default function Starship({ starship }) {
  return (
    <div className="starship--container">
      <div className="starship--info">
        <div className="starship--info-header">{starship.name}</div>
        <div className="starship--info-item">
          <h1>model:</h1> <p>{starship.model}</p>
        </div>
        <div className="starship--info-item">
          <h1>manufacturer:</h1> <p>{starship.manufacturer}</p>
        </div>
        <div className="starship--info-item">
          <h1>cost:</h1> <p>{starship.cost_in_credits}</p>
        </div>
        <div className="starship--info-item">
          <h1>length:</h1> <p>{starship.length}</p>
        </div>
        <div className="starship--info-item">
          <h1>max atmosphering speed: </h1>
          <p>{starship.max_atmosphering_speed}</p>
        </div>
        <div className="starship--info-item">
          <h1>crew:</h1> <p>{starship.crew}</p>
        </div>
        <div className="starship--info-item">
          <h1>passengers:</h1> <p>{starship.passengers}</p>
        </div>
        <div className="starship--info-item">
          <h1>capacity:</h1> <p>{starship.cargo_capacity}</p>
        </div>
        <div className="starship--info-item">
          <h1>consumables:</h1> <p>{starship.consumables}</p>
        </div>
        <div className="starship--info-item">
          <h1>hyperdrive rating:</h1> <p>{starship.hyperdrive_rating}</p>
        </div>
        <div className="starship--info-item">
          <h1>MGTL:</h1> <p>{starship.MGLT}</p>
        </div>
        <div className="starship--info-item">
          <h1>starship class:</h1> <p>{starship.starship_class}</p>
        </div>
      </div>
    </div>
  );
}
