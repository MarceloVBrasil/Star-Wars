import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header({ loggedMessage }) {
  return (
    <div className="header--container">
      <div className="header--logo"></div>
      <div className="header--slogan">HUBBI CHALLENGE</div>
      <div className="header--login">
        <p className="header--login-p">
          {loggedMessage ? "Welcome" : " Login"}
        </p>
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
}
