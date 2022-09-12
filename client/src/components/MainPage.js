import { useState } from "react";
import Starships from "./Starships";
import Characters from "./Characters";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import SideBar from "./Sidebar";
import Logout from "./Logout";

export default function MainPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  const homePage = (
    <>
      {loggedIn ? (
        <Logout setLoggedIn={setLoggedIn} />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </>
  );
  const charactersPage = (
    <>
      <Characters loggedIn={loggedIn} />
    </>
  );
  const starshipsPage = (
    <>
      <Starships />
    </>
  );
  const contactPage = (
    <>
      <Contact />
    </>
  );

  return (
    <>
      <Header loggedMessage={loggedIn} />
      <SideBar setCurrentPage={setCurrentPage} />
      {currentPage === "Home"
        ? homePage
        : currentPage === "Characters"
        ? charactersPage
        : currentPage === "Starships"
        ? starshipsPage
        : contactPage}
      <Footer />
    </>
  );
}
