import { useState } from "react";
import { useStarWarsData } from "./Contexts/StarWarsProvider";
import axios from "axios";

export default function Login({ setLoggedIn }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const { storeAccessToken } = useStarWarsData();
  const [loggingError, setLoggingError] = useState(false);
  const errorMessage = "Login or UserName invalid";
  return (
    <div className="login--container">
      <div className="login--form">
        <label>username</label>
        <input
          type="text"
          name="username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>password</label>
        <input
          type="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => login()}>log in</button>
        {loggingError ? <p>{errorMessage}</p> : ""}
      </div>
    </div>
  );

  function login() {
    if (!username || !password) {
      setLoggingError(true);
      return;
    }
    // user was successfully authenticated. Then...
    requestAccessToken(username, password);
    setLoggingError(false);
  }

  function requestAccessToken(username, password) {
    const headerOptions = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "http://localhost:3001",
    };
    axios
      .post(
        "http://localhost:3001/requestToken",
        { username, password },
        headerOptions
      )
      .then((res) => {
        console.log(res.data.accessToken);
        setLoggedIn(true);
        storeAccessToken(res.data.accessToken);
      })
      .catch((err) => console.error(err));
  }
}
