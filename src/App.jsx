import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* USER */
import Login from "./pages/user/login.jsx";
import Register from "./pages/user/register.jsx";
import Beranda from "./pages/user/beranda.jsx";
import Profil from "./pages/user/profile.jsx";
import IsiSaldo from "./pages/user/IsiSaldo/isisaldo.jsx";
import IsiSaldoMinimarket from "./pages/user/IsiSaldo/isisaldominimarket.jsx";
import IsiSaldoBank from "./pages/user/IsiSaldo/isisaldobank.jsx";
import DetailPembayaran from "./pages/user/IsiSaldo/detailpembayaranisisaldo.jsx";
import IsiSaldoKartu from "./pages/user/IsiSaldo/isisaldokartu.jsx";
import DetailPembayaranKartu from "./pages/user/IsiSaldo/detailpembayarankartu.jsx";
import KonfirmasiMinimarket from "./pages/user/IsiSaldo/konfirmasiminimarket.jsx";
import KonfirmasiKartuDebit from "./pages/user/IsiSaldo/konfirmasiKartuDebit.jsx";
import GrafikPengeluaran from "./pages/user/grafikPengeluaran.jsx";
import Transfer from "./pages/user/transfer.jsx";
import KonfirmasiTransfer from "./pages/user/KonfirmasiTransfer.jsx";
import Pembayaran from "./pages/user/pembayaran.jsx";
import PembayaranDetail from "./pages/user/PembayaranDetail.jsx";
import SuksesPembayaran from "./pages/user/SuksesPembayaran.jsx";
import RiwayatTransaksi from "./pages/user/riwayattransaksi.jsx";

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