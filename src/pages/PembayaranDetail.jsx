import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TransferLainnya from "./TransferLainnya";
import MinimarketPayment from "./MinimarketPayment";
import DebitCreditPayment from "./DebitCreditPayment";
import VirtualAccountPayment from "./VirtualAccountPayment";
import InternetBankingPayment from "./InternetBankingPayment";
import axios from "axios";

export default function PembayaranDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const nominal = location.state?.nominal || 200000;
  const metode = location.state?.metode || "ATM Transfer";
  const [showSuccess, setShowSuccess] = useState(false);
  const [timer, setTimer] = useState(24 * 60 * 60);

  useEffect(() => {
  const interval = setInterval(() => {
    setTimer((prev) => {
      if (prev <= 0) {
        clearInterval(interval);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);

const formatTimer = (detik) => {
  const jam = Math.floor(detik / 3600);
  const menit = Math.floor((detik % 3600) / 60);
  const detikSisa = detik % 60;

  return `${String(jam).padStart(2, "0")} : ${String(menit).padStart(2, "0")} : ${String(detikSisa).padStart(2, "0")}`;
};

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-[#1F6F78] text-white p-4 flex items-center gap-3">
        <span
          onClick={() => navigate(-1)}
          className="cursor-pointer text-xl"
        >
          ←
        </span>

        <h1 className="font-semibold">Pembayaran</h1>
      </div>

      <div className="p-6 max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            {/* TITLE */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Detail Pembayaran
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Periksa kembali informasi transaksi sebelum melanjutkan pembayaran
              </p>
            </div>

            {/* RINGKASAN */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">

              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-[#1F6F78] text-lg">
                  Ringkasan Pembayaran
                </h3>

                <div className="bg-[#1F6F78]/10 text-[#1F6F78] px-3 py-1 rounded-full text-xs font-semibold">
                  ACTIVE
                </div>
              </div>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Jenis Transaksi
                  </span>

                  <span className="font-medium">
                    Top Up Saldo
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Nominal
                  </span>

                  <span className="font-bold text-[#1F6F78]">
                    Rp {nominal.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Metode
                  </span>

                  <span className="font-medium">
                    {metode}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Biaya Admin
                  </span>

                  <span>
                    Rp 2.500
                  </span>
                </div>

                <div className="border-t pt-4 flex justify-between text-base font-bold">
                  <span>Total Pembayaran</span>

                  <span className="text-[#1F6F78]">
                    Rp {(nominal + 2500).toLocaleString("id-ID")}
                  </span>
                </div>

              </div>
            </div>

            {/* METODE */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">

              <h3 className="font-bold text-lg mb-4">
                Metode Pembayaran
              </h3>

              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border">

                <div className="w-14 h-14 rounded-2xl bg-[#1F6F78] text-white flex items-center justify-center text-2xl shadow-lg">

                  {metode === "QRIS"
                    ? "📷"
                    : metode === "GoPay"
                    ? "💚"
                    : metode === "DANA"
                    ? "💙"
                    : metode === "ShopeePay"
                    ? "🧡"
                    : metode === "LinkAja"
                    ? "❤️"
                    : "🏦"}

                </div>

                <div>
                  <p className="font-bold text-gray-800">
                    {metode}
                  </p>

                  <p className="text-sm text-gray-500">
                    Pembayaran aman & terenkripsi
                  </p>
                </div>

              </div>

              <div className="mt-4 bg-blue-50 text-blue-700 p-4 rounded-2xl text-sm border border-blue-100">
                Setelah transfer berhasil, pembayaran akan diverifikasi otomatis oleh sistem.
              </div>

            </div>

            {/* TIMER */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 p-5 rounded-3xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-yellow-700 font-medium">
                    Batas Waktu Pembayaran
                  </p>

                  <h2 className="text-2xl font-bold text-yellow-800 mt-1">
                    {formatTimer(timer)}
                  </h2>
                </div>

                <div className="text-5xl">
                  ⏰
                </div>

              </div>

            </div>

            {/* BUTTON */}
            <div className="flex gap-4">

              <button
                onClick={() => navigate(-1)}
                className="w-full border-2 border-gray-300 rounded-2xl py-4 font-semibold hover:bg-gray-50 transition"
              >
                Kembali
              </button>

              <button
                onClick={async () => {
                const user = JSON.parse(localStorage.getItem('user'));

                try {
                await axios.post("http://127.0.0.1:8000/api/topup", {
                  user_id: user?.id,
                  nominal: nominal,
                  metode: metode,
            });

                setShowSuccess(true);

                } catch (error) {
                console.log(error.response);
                  alert(JSON.stringify(error.response?.data));
                }
            }}

                className="w-full bg-[#1F6F78] text-white rounded-2xl py-4 font-semibold hover:opacity-90 transition shadow-lg"
              >
                Saya Sudah Transfer
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* PAYMENT CARD */}
            <div className="bg-white rounded-3xl border overflow-hidden shadow-sm">

              {/* HEADER */}
              <div className="bg-[#1F6F78] text-white p-5">

                <p className="font-bold text-lg">

                  {metode === "QRIS"
                    ? "Scan QRIS untuk Pembayaran"
                    : metode === "GoPay"
                    ? "Pembayaran GoPay"
                    : metode === "DANA"
                    ? "Pembayaran DANA"
                    : metode === "ShopeePay"
                    ? "Pembayaran ShopeePay"
                    : metode === "LinkAja"
                    ? "Pembayaran LinkAja"
                    : "Transfer ke Rekening Berikut"}

                </p>

                <p className="text-sm opacity-80 mt-1">
                  Selesaikan pembayaran sesuai metode yang dipilih
                </p>

              </div>

              {/* CONTENT */}
            <div className="p-6 space-y-5 text-sm">

              {metode === "ATM Transfer" ? (

            <TransferLainnya
              metode={metode}
              nominal={nominal}
            />

            ) : metode === "Internet Banking" ? (
            <InternetBankingPayment
              nominal={nominal}
            />

            ) : metode === "Virtual Account" ? (
            <VirtualAccountPayment
              nominal={nominal}
            />

            ) : metode === "Kartu Debit/Kredit" ? (
            <DebitCreditPayment
              nominal={nominal}
            />

            ) : metode === "Minimarket" ? (
            <MinimarketPayment
              nominal={nominal}
            />

            ) : metode === "QRIS" ? (

          <div className="space-y-5">

                    <div className="bg-gradient-to-br from-[#1F6F78] to-[#2F8F9D] rounded-3xl p-6 text-white shadow-xl">

                      <div className="flex justify-between items-center mb-4">

                        <div>
                          <p className="text-sm opacity-80">
                            QRIS Payment
                          </p>

                          <h2 className="text-2xl font-bold mt-1">
                            Scan & Pay
                          </h2>
                        </div>

                        <div className="text-5xl">
                          📷
                        </div>

                      </div>

                      <div className="bg-white p-4 rounded-2xl flex items-center justify-center">

                        <div className="w-44 h-44 bg-gray-200 rounded-xl flex items-center justify-center text-3xl font-bold text-[#1F6F78]">
                          QR
                        </div>

                      </div>

                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-2xl p-4">

                      <p className="font-semibold text-green-700 mb-2">
                        Pembayaran QRIS
                      </p>

                      <p className="text-gray-600 text-sm">
                        Scan QR menggunakan aplikasi e-wallet atau mobile banking favoritmu.
                      </p>

                    </div>

                  </div>

                ) : metode === "GoPay" ? (

                  <div className="space-y-5">

                    <div className="bg-gradient-to-r from-cyan-500 to-sky-400 rounded-[30px] p-6 text-white shadow-2xl relative overflow-hidden">

                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                      <div className="relative z-10">

                        <div className="flex justify-between items-start">

                          <div>
                            <p className="text-sm opacity-90">
                              GoPay Wallet
                            </p>

                            <h2 className="text-3xl font-bold mt-2 tracking-wide">
                              0812 3456 7890
                            </h2>

                            <p className="mt-2 text-sm opacity-80">
                              a/n Zefanya Angelica
                            </p>
                          </div>

                          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                            💚
                          </div>

                        </div>

                      </div>

                    </div>

                    <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5">

                      <p className="font-semibold text-cyan-700 mb-3">
                        Cara Pembayaran GoPay
                      </p>

                      <div className="space-y-3 text-gray-600">

                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs">
                            1
                          </div>
                          <p>Buka aplikasi GoPay</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs">
                            2
                          </div>
                          <p>Pilih menu Transfer</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs">
                            3
                          </div>
                          <p>Masukkan nomor tujuan</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs">
                            4
                          </div>
                          <p>Konfirmasi pembayaran</p>
                        </div>

                      </div>

                    </div>

                  </div>

                ) : metode === "DANA" ? (

                  <div className="space-y-5">

                    <div className="bg-gradient-to-br from-blue-600 to-sky-400 rounded-[30px] p-6 text-white shadow-2xl relative overflow-hidden">

                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>

                      <div className="relative z-10">

                        <p className="text-sm opacity-90">
                          DANA Premium
                        </p>

                        <h2 className="text-4xl font-bold mt-3 tracking-wide">
                          0813 2222 9999
                        </h2>

                        <div className="mt-6 flex justify-between items-center">

                          <div>
                            <p className="text-xs opacity-80">
                              Nama Pengguna
                            </p>

                            <p className="font-semibold">
                              Zefanya
                            </p>
                          </div>

                          <div className="bg-white/20 px-4 py-2 rounded-xl text-sm">
                            VERIFIED
                          </div>

                        </div>

                      </div>

                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">

                      <p className="font-semibold text-blue-700 mb-3">
                        Langkah Pembayaran DANA
                      </p>

                      <div className="grid gap-3 text-gray-600">

                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          1️⃣ Buka aplikasi DANA
                        </div>

                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          2️⃣ Pilih menu Kirim
                        </div>

                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          3️⃣ Masukkan nomor tujuan
                        </div>

                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          4️⃣ Selesaikan pembayaran
                        </div>

                      </div>

                    </div>

                  </div>

                ) : metode === "ShopeePay" ? (

                  <div className="space-y-5">

                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[30px] p-6 text-white shadow-2xl relative overflow-hidden">

                      <div className="absolute bottom-0 right-0 text-[120px] opacity-10">
                        🛍️
                      </div>

                      <div className="relative z-10">

                        <p className="text-sm opacity-90">
                          ShopeePay Wallet
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                          0815 8888 7777
                        </h2>

                        <p className="mt-2 text-sm opacity-80">
                          Pembayaran cepat & aman
                        </p>

                      </div>

                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">

                      <p className="font-semibold text-orange-700 mb-3">
                        Petunjuk ShopeePay
                      </p>

                      <div className="space-y-3 text-gray-600">

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center">
                            🛒
                          </div>

                          <p>Buka aplikasi Shopee</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center">
                            💳
                          </div>

                          <p>Pilih menu ShopeePay</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center">
                            📲
                          </div>

                          <p>Transfer ke nomor tujuan</p>
                        </div>

                      </div>

                    </div>

                  </div>

                  ) : metode === "LinkAja" ? (

                  <div className="space-y-5">

                      {/* CARD */}
                  <div className="bg-gradient-to-br from-red-600 via-red-500 to-pink-500 rounded-[30px] p-6 text-white shadow-2xl relative overflow-hidden">

                  <div className="absolute top-0 right-0 text-[120px] opacity-10">
                      ❤️
                  </div>

                  <div className="relative z-10">

                <div className="flex justify-between items-start">

                     <div>
                      <p className="text-sm opacity-90">
                        LinkAja Wallet
                      </p>

                   <h2 className="text-4xl font-bold mt-3 tracking-wide">
                        0819 1111 2222
                    </h2>

                <p className="mt-2 text-sm opacity-80">
                     a/n Zefanya Angelica
               </p>
          </div>

            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
            ❤️
          </div>

        </div>

            <div className="mt-6 flex items-center justify-between">

          <div>
            <p className="text-xs opacity-70">
              Status Akun
            </p>

            <p className="font-semibold">
              Premium User
            </p>
          </div>

          <div className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold">
            ACTIVE
          </div>

        </div>

        </div>

        </div>

    {/* PETUNJUK */}
    <div className="bg-red-50 border border-red-200 rounded-2xl p-5">

      <p className="font-semibold text-red-700 mb-4">
        Cara Pembayaran LinkAja
      </p>

      <div className="space-y-4 text-gray-700">

        <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm">
          <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-bold">
            1
          </div>

          <p>Buka aplikasi LinkAja</p>
        </div>

        <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm">
          <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-bold">
            2
          </div>

          <p>Pilih menu Kirim Uang</p>
        </div>

        <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm">
          <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-bold">
            3
          </div>

          <p>Masukkan nomor tujuan</p>
        </div>

        <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm">
          <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-bold">
            4
          </div>

          <p>Konfirmasi pembayaran LinkAja</p>
        </div>

      </div>

    </div>

  </div>
                
                  ) : null}

              </div>
            </div>

            {/* INFO */}
            <div className="bg-white rounded-3xl border p-5 shadow-sm">

              <h3 className="font-bold text-lg mb-3">
                Informasi Pembayaran
              </h3>

              <div className="space-y-3 text-sm text-gray-600">

                <div className="flex items-center gap-3">
                  <div className="text-xl">
                    🔒
                  </div>

                  <p>
                    Semua transaksi dilindungi sistem keamanan terenkripsi
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-xl">
                    ⚡
                  </div>

                  <p>
                    Verifikasi pembayaran berlangsung otomatis & cepat
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-xl">
                    💬
                  </div>

                  <p>
                    Hubungi bantuan jika mengalami kendala transaksi
                  </p>
                  {/* SUCCESS MODAL */}
                  {showSuccess && (

                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

                <div className="bg-white rounded-[40px] p-10 w-full max-w-lg shadow-2xl text-center">

                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-6xl mx-auto shadow-xl">

                 ✅

                </div>

                <h1 className="text-4xl font-bold text-gray-800 mt-8">
                   Pembayaran Berhasil
                </h1>

                <p className="text-gray-500 mt-3 text-lg">
                  Pembayaran berhasil diverifikasi.
      </p>

      <div className="bg-gray-50 rounded-[30px] p-6 mt-8 text-left space-y-4 border">

        <div className="flex justify-between">

          <span className="text-gray-500">
            Metode
          </span>

          <span className="font-semibold">
            {metode}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-500">
            Nominal
          </span>

          <span className="font-semibold">
            Rp {nominal.toLocaleString("id-ID")}
          </span>

        </div>

        <div className="border-t pt-4 flex justify-between">

          <span className="font-bold text-lg">
            Total
          </span>

          <span className="font-bold text-2xl text-[#1F6F78]">
            Rp {(nominal + 2500).toLocaleString("id-ID")}
          </span>

        </div>

      </div>

      <button
        onClick={() => {
          setShowSuccess(false);
          navigate("/beranda");
        }}
        className="w-full mt-8 bg-[#1F6F78] text-white py-5 rounded-3xl font-semibold text-lg hover:opacity-90 transition"
      >

        Selesai

      </button>

    </div>

  </div>

)}

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}