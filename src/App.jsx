import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.js";
import Beranda from "./pages/beranda.jsx";
import Profil from "./pages/profile.js";
import IsiSaldo from "./pages/isisaldo.js";
import GrafikPengeluaran from "./pages/grafikPengeluaran.js";
import IsiSaldoMinimarket from "./pages/isisaldominimarket.jsx";
import IsiSaldoBank from "./pages/isisaldobank.js";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/isisaldo" element={<IsiSaldo />} />
        <Route path="/grafikpengeluaran" element={<GrafikPengeluaran/>} />
        <Route path="/isisaldominimarket" element={<IsiSaldoMinimarket/>} />
        <Route path="/isisaldobank" element={<IsiSaldoBank/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;