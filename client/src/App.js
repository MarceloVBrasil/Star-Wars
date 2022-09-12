import "./styles/app.css";
import MainPage from "./components/MainPage";
import StarWarsProvider from "./components/Contexts/StarWarsProvider";

function App() {
  return (
    <StarWarsProvider>
      <MainPage />
    </StarWarsProvider>
  );
}

export default App;
