import React from "react";

export default function Logout({ setLoggedIn }) {
  return (
    <div className="logout--container">
      <div className="logout--form">
        <button onClick={() => setLoggedIn(false)}>log out</button>
      </div>
    </div>
  );
}
