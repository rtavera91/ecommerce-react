//Componente APP principal
//Importar estilos y componentes estáticos
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

//Importar páginas de navegación
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
