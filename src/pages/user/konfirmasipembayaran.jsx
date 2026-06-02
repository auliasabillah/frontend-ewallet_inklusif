import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const KonfirmasiPembayaran = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const data = state || {
    nominal: 0,
    metode: "QRIS",
    id: "TRX001",
    waktu: new Date().toLocaleString("id-ID"),
    jenis: "Pembayaran QRIS",
    saldoAwal: 198215006,
  };

  const saldoAkhir = data.saldoAkhir;
  const handleBeranda = () => {
    navigate("/beranda");
  };

  return (
    <div className="bg-[#f5f7fb] min-h-screen flex items-center justify-center p-5">

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-[#0D6B73] text-white px-6 py-5">
          <h1 className="text-xl font-bold">
            Pembayaran Berhasil
          </h1>
        </div>

        <div className="p-6">

          {/* ICON */}
          <div className="flex justify-center mb-5">

            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-5xl">
              ✅
            </div>

          </div>

          <h2 className="text-center text-3xl font-bold mb-2">
            Transaksi Berhasil
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Pembayaran QRIS berhasil diproses
          </p>

          {/* TOTAL */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center mb-6">

            <p className="text-gray-500">
              Total Pembayaran
            </p>

            <h1 className="text-4xl font-bold text-green-700 mt-2">
              Rp {data.nominal.toLocaleString("id-ID")}
            </h1>

          </div>

          {/* DETAIL */}
          <div className="border rounded-2xl overflow-hidden mb-6">

            <div className="flex justify-between p-4 border-b">
              <span>Jenis Transaksi</span>
              <span>{data.jenis}</span>
            </div>

            <div className="flex justify-between p-4 border-b">
              <span>Metode</span>
              <span>{data.metode}</span>
            </div>

            <div className="flex justify-between p-4 border-b">
              <span>ID Transaksi</span>
              <span>{data.id}</span>
            </div>

            <div className="flex justify-between p-4 border-b">
              <span>Waktu</span>
              <span>{data.waktu}</span>
            </div>

            <div className="flex justify-between p-4 border-b">
              <span>Saldo Sebelum</span>
              <span>
                Rp {data.saldoAwal.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between p-4 bg-red-50">
              <span>Saldo Sesudah</span>
              <span className="font-bold text-red-600">
                Rp {saldoAkhir.toLocaleString("id-ID")}
              </span>
            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={handleBeranda}
            className="w-full bg-[#0D6B73] text-white py-4 rounded-2xl font-semibold"
          >
            Kembali ke beranda
          </button>
        </div>

      </div>

    </div>
  );
};

export default KonfirmasiPembayaran;