import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const konfirmasipembayaran = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const data = state || {
    nominal: 0,
    metode: "-",
    id: "-",
    waktu: "-",
    jenis: "-",
  };

  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">

      <div className="w-[500px] bg-white rounded shadow-md overflow-hidden">

        <div className="bg-[#1F6F78] text-white px-6 py-4 text-lg font-semibold">
          Konfirmasi Pembayaran
        </div>

        <div className="p-6 text-center">

          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">✔</span>
            </div>
          </div>

          <h2 className="text-lg font-bold mb-1">Pembayaran Berhasil!</h2>

          <p className="text-gray-500 text-sm mb-4">
            Terima Kasih, pembayaran anda telah berhasil diverifikasi.
          </p>

          <div className="bg-green-100 border border-green-400 rounded-lg py-3 mb-5">
            <p className="text-sm">Nominal Top Up</p>
            <p className="text-green-700 text-xl font-bold">
              Rp {data.nominal.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="border rounded-lg text-sm text-left mb-4">

            <div className="flex justify-between px-4 py-2 border-b">
              <span>Jenis</span>
              <span>{data.jenis}</span>
            </div>

            <div className="flex justify-between px-4 py-2 border-b">
              <span>Metode</span>
              <span>{data.metode}</span>
            </div>

            <div className="flex justify-between px-4 py-2 border-b">
              <span>ID</span>
              <span>{data.id}</span>
            </div>

            <div className="flex justify-between px-4 py-2">
              <span>Waktu</span>
              <span>{data.waktu}</span>
            </div>

          </div>

          <button
            onClick={() => navigate("/beranda")}
            className="w-full bg-[#1F6F78] text-white py-2 rounded mb-2"
          >
            Kembali Ke Beranda
          </button>

        </div>
      </div>
    </div>
  );
};

export default konfirmasipembayaran;