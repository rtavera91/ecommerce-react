//Componente APP principal
//Importar estilos y componentes estáticos
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

//Importar páginas de navegación
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/detail/:productId" element={<DetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
