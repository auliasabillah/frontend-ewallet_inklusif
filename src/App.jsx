import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./jsx/login.jsx";
import Beranda from "./jsx/beranda.jsx";
import Profil from "./jsx/profile.jsx";
import IsiSaldo from "./jsx/isisaldo.jsx";
import GrafikPengeluaran from "./jsx/grafikPengeluaran.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/isisaldo" element={<IsiSaldo />} />
        <Route path="/grafikpengeluaran" element={<GrafikPengeluaran/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;