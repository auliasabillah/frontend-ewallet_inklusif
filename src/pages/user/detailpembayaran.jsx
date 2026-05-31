import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DetailPembayaran() {

  const navigate = useNavigate();
  const location = useLocation();

  const nominal = location.state?.nominal || 200000;
  const metode = location.state?.metode || "QRIS";

  const [showSuccess, setShowSuccess] = useState(false);

  return (

    <div className="min-h-screen bg-[#f5f7fb]">

      {/* ================= HEADER ================= */}
      <div className="bg-[#1F6F78] text-white p-5 flex items-center gap-4 shadow">

        <span
          onClick={() => navigate(-1)}
          className="cursor-pointer text-2xl hover:opacity-80 transition"
        >
          ←
        </span>

        <h1 className="font-semibold text-2xl">
          Detail Pembayaran
        </h1>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {/* ================= LEFT ================= */}
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6 space-y-5">

          <div>

            <h2 className="font-bold text-2xl text-gray-800">
              Detail Pembayaran
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Periksa kembali informasi pembayaran sebelum melanjutkan
            </p>

          </div>

          {/* CARD */}
          <div className="bg-gradient-to-r from-[#1F6F78] via-[#278892] to-cyan-500 rounded-[30px] p-6 text-white shadow-xl relative overflow-hidden">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>

            <div className="relative z-10">

              <p className="text-sm opacity-80">
                Total Pembayaran
              </p>

              <h1 className="text-5xl font-bold mt-3">
                Rp {(nominal + 1500).toLocaleString("id-ID")}
              </h1>

              <div className="flex gap-3 mt-5">

                <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                  Admin Rp 1.500
                </div>

                <div className="bg-yellow-300 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Menunggu
                </div>

              </div>

            </div>

          </div>

          {/* DETAIL */}
          <div className="border rounded-[28px] p-5 space-y-4">

            <p className="font-semibold text-[#1F6F78] text-lg">
              Ringkasan Pembayaran
            </p>

            <div className="flex justify-between text-sm">

              <span className="text-gray-500">
                Jenis Transaksi
              </span>

              <span className="font-medium">
                Top Up Saldo
              </span>

            </div>

            <div className="flex justify-between text-sm">

              <span className="text-gray-500">
                Nominal
              </span>

              <span className="font-semibold text-[#1F6F78]">
                Rp {nominal.toLocaleString("id-ID")}
              </span>

            </div>

            <div className="flex justify-between text-sm">

              <span className="text-gray-500">
                Metode
              </span>

              <span className="font-medium">
                {metode}
              </span>

            </div>

            <div className="flex justify-between text-sm">

              <span className="text-gray-500">
                Biaya Admin
              </span>

              <span className="font-medium">
                Rp 1.500
              </span>

            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">

              <span>
                Total Pembayaran
              </span>

              <span className="text-[#1F6F78]">
                Rp {(nominal + 1500).toLocaleString("id-ID")}
              </span>

            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6 text-center space-y-6 h-fit">

          {/* TITLE */}
          <div className="bg-[#1F6F78] text-white py-4 rounded-2xl text-lg font-semibold">

            {metode === "QRIS"
              ? "Scan QRIS untuk Pembayaran"
              : "Transfer ke Rekening Berikut"}

          </div>

          {/* QRIS */}
          {metode === "QRIS" ? (

            <div className="space-y-5">

              <div className="w-72 h-72 bg-gray-100 mx-auto flex items-center justify-center rounded-[32px] shadow-inner text-6xl">

                QR

              </div>

              <div className="bg-blue-50 text-blue-700 p-4 rounded-2xl text-sm">

                Scan QR menggunakan aplikasi e-wallet atau mobile banking untuk menyelesaikan pembayaran.

              </div>

            </div>

          ) : (

            /* TRANSFER */
            <div className="text-left space-y-5 text-sm">

              <div>

                <p className="text-gray-500">
                  Bank
                </p>

                <p className="font-semibold text-lg">
                  BCA - Bank Central Asia
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Nomor Rekening
                </p>

                <p className="font-semibold text-lg">
                  1234 5678 9012
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Nama Penerima
                </p>

                <p className="font-semibold text-lg">
                  Zefanya Angelica
                </p>

              </div>

              <div className="bg-blue-50 text-blue-700 p-4 rounded-2xl text-sm">

                Pastikan transfer sesuai nominal agar pembayaran dapat diverifikasi otomatis.

              </div>

            </div>

          )}

          {/* TRANSACTION */}
          <div className="bg-gray-50 rounded-[24px] p-5 border">

            <p className="text-sm text-gray-500">
              ID Transaksi
            </p>

            <p className="font-bold text-[#1F6F78] text-xl mt-1">
              TRX001
            </p>

          </div>

          {/* BUTTON */}
          <div className="grid grid-cols-2 gap-4">

            <button
              onClick={() => navigate(-1)}
              className="border border-gray-300 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all"
            >

              Kembali

            </button>

            <button
              onClick={() => setShowSuccess(true)}
              className="bg-[#1F6F78] text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.01] transition-all"
            >

              Saya Sudah Bayar

            </button>

          </div>

          {/* CANCEL */}
          <button className="w-full border border-red-500 text-red-500 py-4 rounded-2xl font-semibold hover:bg-red-50 transition-all">

            Batalkan Transaksi

          </button>

        </div>

      </div>

      {/* ================= SUCCESS MODAL ================= */}
      {showSuccess && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-[40px] p-10 w-full max-w-lg shadow-2xl text-center relative overflow-hidden">

            {/* EFFECT */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full opacity-40"></div>

            <div className="relative z-10">

              {/* ICON */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-6xl mx-auto shadow-xl">

                ✅

              </div>

              {/* TITLE */}
              <h1 className="text-4xl font-bold text-gray-800 mt-8">
                Pembayaran Berhasil
              </h1>

              <p className="text-gray-500 mt-3 text-lg leading-relaxed">
                Pembayaran berhasil diverifikasi oleh sistem.
              </p>

              {/* DETAIL */}
              <div className="bg-gray-50 rounded-[30px] p-6 mt-8 text-left space-y-5 border">

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

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Biaya Admin
                  </span>

                  <span className="font-semibold">
                    Rp 1.500
                  </span>

                </div>

                <div className="border-t pt-4 flex justify-between">

                  <span className="font-bold text-lg">
                    Total Pembayaran
                  </span>

                  <span className="font-bold text-2xl text-[#1F6F78]">
                    Rp {(nominal + 1500).toLocaleString("id-ID")}
                  </span>

                </div>

              </div>

              {/* STATUS */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mt-6 text-green-700">

                Saldo/top up akan masuk otomatis dalam beberapa detik.

              </div>

              {/* BUTTON */}
              <button
                onClick={() => navigate("/")}
                className="w-full mt-8 bg-[#1F6F78] text-white py-5 rounded-3xl font-semibold text-lg shadow-lg hover:scale-[1.01] transition-all"
              >

                Selesai

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}