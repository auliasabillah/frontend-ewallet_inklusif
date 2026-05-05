import { BrowserRouter, Routes, Route } from "react-router-dom";

// AUTH
import Login from "./pages/login.jsx";

// MAIN
import Beranda from "./pages/beranda.jsx";
import Profil from "./pages/profile.jsx";

// SALDO
import IsiSaldo from "./pages/isisaldo.jsx";
import IsiSaldoMinimarket from "./pages/isisaldominimarket.jsx";
import IsiSaldoBank from "./pages/isisaldobank.jsx";
import DetailPembayaran from "./pages/detailpembayaranIsisaldo.jsx";

// FITUR
import GrafikPengeluaran from "./pages/grafikPengeluaran.jsx";

// TRANSFER
import Transfer from "./pages/transfer.jsx";
import KonfirmasiTransfer from "./pages/KonfirmasiTransfer.jsx";

// PEMBAYARAN
import Pembayaran from "./pages/pembayaran.jsx";
import PembayaranDetail from "./pages/PembayaranDetail.jsx";
import SuksesPembayaran from "./pages/SuksesPembayaran.jsx";

// RIWAYAT
import RiwayatTransaksi from "./pages/riwayattransaksi.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/" element={<Login />} />

        {/* MAIN */}
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/profile" element={<Profil />} />

        {/* SALDO */}
        <Route path="/isisaldo" element={<IsiSaldo />} />
        <Route path="/isisaldominimarket" element={<IsiSaldoMinimarket />} />
        <Route path="/isisaldobank" element={<IsiSaldoBank />} />
        <Route path="/detailpembayaranisisaldo" element={<DetailPembayaran />} />

        {/* FITUR */}
        <Route path="/grafikpengeluaran" element={<GrafikPengeluaran />} />

        {/* TRANSFER */}
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/konfirmasi-transfer" element={<KonfirmasiTransfer />} />

        {/* PEMBAYARAN */}
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/detail-pembayaran" element={<PembayaranDetail />} />
        <Route path="/konfirmasipembayaran" element={<SuksesPembayaran />} />

        {/* RIWAYAT */}
        <Route path="/riwayat" element={<RiwayatTransaksi />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;