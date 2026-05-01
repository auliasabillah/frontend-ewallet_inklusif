import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Beranda from "./pages/beranda.jsx";
import Profil from "./pages/profile.jsx";
import IsiSaldo from "./pages/isisaldo.jsx";
import GrafikPengeluaran from "./pages/grafikPengeluaran.jsx";
import IsiSaldoMinimarket from "./pages/isisaldominimarket.jsx";
import IsiSaldoBank from "./pages/isisaldobank.jsx";
import Pembayaran from "./pages/pembayaran.jsx";
import DetailPembayaran from "./pages/detailpembayaran.jsx";
import KonfirmasiPembayaran from "./pages/konfirmasipembayaran.jsx";
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
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/detail-pembayaran" element={<DetailPembayaran />} />
        <Route path="/konfirmasipembayaran" element={<KonfirmasiPembayaran/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;