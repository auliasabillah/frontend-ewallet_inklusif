import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* USER */
import Login from "./pages/login.jsx";
import Register from "./pages/register";
import Beranda from "./pages/beranda.jsx";
import Profil from "./pages/profile.jsx";
import IsiSaldo from "./pages/isi saldo/isisaldo.jsx";
import IsiSaldoMinimarket from "./pages/isi saldo/isisaldominimarket.jsx";
import IsiSaldoBank from "./pages/isi saldo/isisaldobank.jsx";
import DetailPembayaran from "./pages/isi saldo/detailpembayaranIsisaldo.jsx";
import IsiSaldoKartu from "./pages/isi saldo/isisaldokartu.jsx";
import DetailPembayaranKartu from "./pages/isi saldo/detailpembayarankartu.jsx";
import KonfirmasiMinimarket from "./pages/isi saldo/konfirmasiminimarket.jsx";
import KonfirmasiKartuDebit from "./pages/isi saldo/konfirmasikartudebit.jsx";
import GrafikPengeluaran from "./pages/grafikPengeluaran.jsx";
import Transfer from "./pages/Transfer.jsx";
import KonfirmasiTransfer from "./pages/KonfirmasiTransfer.jsx";
import Pembayaran from "./pages/pembayaran.jsx";
import PembayaranDetail from "./pages/PembayaranDetail.jsx";
import SuksesPembayaran from "./pages/SuksesPembayaran.jsx";
import RiwayatTransaksi from "./pages/riwayattransaksi.jsx";

/* ADMIN */
import AdminLogin from "./pages/admin/loginadmin.jsx";
import KelolaUser from "./pages/admin/kelolauser.jsx";
import Transaksi from "./pages/admin/transaksi.jsx";
import Pemasukan from "./pages/admin/pemasukan.jsx";
import Pengeluaran from "./pages/admin/pengeluaran.jsx";

function App() {
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        {/* USER */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/isisaldo" element={<IsiSaldo />} />
        <Route path="/isisaldominimarket" element={<IsiSaldoMinimarket />} />
        <Route path="/isisaldobank" element={<IsiSaldoBank />} />
        <Route path="/detailpembayaranisisaldo" element={<DetailPembayaran />} />
        <Route path="/isisaldokartu" element={<IsiSaldoKartu />} />
        <Route path="/detailpembayarankartu" element={<DetailPembayaranKartu />} />
        <Route path="/konfirmasiminimarket" element={<KonfirmasiMinimarket />} />
        <Route path="/konfirmasikartudebit" element={<KonfirmasiKartuDebit />} />
        <Route path="/grafikpengeluaran" element={<GrafikPengeluaran />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/konfirmasi-transfer" element={<KonfirmasiTransfer />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/detail-pembayaran" element={<PembayaranDetail />} />
        <Route path="/konfirmasipembayaran" element={<SuksesPembayaran />} />
        <Route path="/riwayat" element={<RiwayatTransaksi />} />

        {/* ADMIN */}
        <Route
          path="/admin/login"
          element={
            <AdminLogin
              onLoginBerhasil={() => setIsAdminLogin(true)}
            />
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            isAdminLogin ? <KelolaUser /> : <Navigate to="/admin/login" />
          }
        />

        <Route
          path="/admin/transaksi"
          element={
            isAdminLogin ? <Transaksi /> : <Navigate to="/admin/login" />
          }
        />

        <Route
          path="/admin/pemasukan"
          element={
            isAdminLogin ? <Pemasukan /> : <Navigate to="/admin/login" />
          }
        />

        <Route
          path="/admin/pengeluaran"
          element={
            isAdminLogin ? <Pengeluaran /> : <Navigate to="/admin/login" />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;