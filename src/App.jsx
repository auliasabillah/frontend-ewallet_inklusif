import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./jsx/login.jsx";
import Beranda from "./jsx/beranda.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/beranda" element={<Beranda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;