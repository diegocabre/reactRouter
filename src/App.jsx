import NavBar from "./assets/components/navbar/NavBar";
import {Routes, Route} from 'react-router-dom'
import Home from "./assets/components/views/inicio/Home";
import Contacto from "./assets/components/views/contacto/Contacto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
