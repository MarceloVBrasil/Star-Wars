import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useStarWarsData } from "./Contexts/StarWarsProvider";

export default function SideBar({ setCurrentPage }) {
  const { handleSelectedStarship, handleSelectedCharacter } = useStarWarsData();
  return (
    <>
      <div className="side-bar--container">
        <div className="side-bar--item-box" onClick={() => goToHomePage()}>
          <HomeIcon />
          <p>Home</p>
        </div>
        <div
          className="side-bar--item-box"
          onClick={() => goToCharactersPage()}
        >
          <PersonIcon />
          <p>Characters</p>
        </div>
        <div className="side-bar--item-box" onClick={() => goToStarshipsPage()}>
          <RocketLaunchIcon />
          <p>Starships</p>
        </div>
        <div className="side-bar--item-box" onClick={() => goToContactPage()}>
          <MailOutlineIcon />
          <p>Contact</p>
        </div>
      </div>
    </>
  );

  function goToHomePage() {
    setCurrentPage("Home");
  }

  function goToCharactersPage() {
    setCurrentPage("Characters");
    handleSelectedCharacter(undefined);
  }

  function goToStarshipsPage() {
    setCurrentPage("Starships");
    handleSelectedStarship(undefined);
  }

  function goToContactPage() {
    setCurrentPage("Contact");
  }
}
