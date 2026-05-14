import { useState } from "react";

export default function VirtualAccountPayment({ nominal = 200000 }) {

  const [selectedBank, setSelectedBank] = useState({
    nama: "BCA Virtual Account",
    nomor: "880812341234",
    warna: "from-blue-600 via-sky-500 to-cyan-400",
    logo: "🏦",
    kode: "014",
  });

  return (

    <div className="space-y-4">

      {/* ================= CARD ================= */}
      <div
        className={`bg-gradient-to-br ${selectedBank.warna} rounded-[30px] p-5 text-white shadow-xl relative overflow-hidden transition-all duration-500`}
      >

        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>

        <div className="relative z-10">

          {/* TOP */}
          <div className="flex justify-between items-start">

            <div>

              <p className="text-xs opacity-80 tracking-wide">
                Virtual Account
              </p>

              <h1 className="text-3xl font-bold mt-2 tracking-wide">
                {selectedBank.nama}
              </h1>

            </div>

            <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              {selectedBank.logo}
            </div>

          </div>

          {/* NOMOR VA */}
          <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-5 mt-5 border border-white/10">

            <div className="space-y-4">

              <div>

                <p className="text-xs opacity-80">
                  Nomor Virtual Account
                </p>

                <h2 className="text-2xl font-bold mt-2 tracking-[3px]">
                  {selectedBank.nomor}
                </h2>

              </div>

              <div className="flex justify-between items-center">

                <span className="opacity-80">
                  Kode Bank
                </span>

                <span className="font-semibold">
                  {selectedBank.kode}
                </span>

              </div>

              <div className="flex justify-between items-center">

                <span className="opacity-80">
                  Status
                </span>

                <span className="bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  Menunggu
                </span>

              </div>

              <div className="flex justify-between items-center">

                <span className="opacity-80">
                  Total Pembayaran
                </span>

                <span className="font-bold">
                  Rp {(nominal + 2500).toLocaleString("id-ID")}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= PILIH BANK ================= */}
      <div className="bg-white rounded-[28px] border p-5 shadow-sm">

        <div className="flex items-center justify-between mb-4">

          <h3 className="font-bold text-xl">
            Pilih Virtual Account
          </h3>

          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            Aktif
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          {/* BCA */}
          <button
            onClick={() =>
              setSelectedBank({
                nama: "BCA Virtual Account",
                nomor: "880812341234",
                warna: "from-blue-600 via-sky-500 to-cyan-400",
                logo: "🏦",
                kode: "014",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "BCA Virtual Account"
              ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-[1.02]"
              : "bg-white hover:border-blue-400"
            }`}
          >
            BCA
          </button>

          {/* BNI */}
          <button
            onClick={() =>
              setSelectedBank({
                nama: "BNI Virtual Account",
                nomor: "990011223344",
                warna: "from-orange-500 via-amber-400 to-yellow-300",
                logo: "🟠",
                kode: "009",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "BNI Virtual Account"
              ? "bg-orange-500 text-white border-orange-500 shadow-lg scale-[1.02]"
              : "bg-white hover:border-orange-400"
            }`}
          >
            BNI
          </button>

          {/* BRI */}
          <button
            onClick={() =>
              setSelectedBank({
                nama: "BRI Virtual Account",
                nomor: "771188221199",
                warna: "from-blue-700 via-indigo-500 to-indigo-400",
                logo: "🔵",
                kode: "002",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "BRI Virtual Account"
              ? "bg-blue-700 text-white border-blue-700 shadow-lg scale-[1.02]"
              : "bg-white hover:border-blue-500"
            }`}
          >
            BRI
          </button>

          {/* MANDIRI */}
          <button
            onClick={() =>
              setSelectedBank({
                nama: "Mandiri Virtual Account",
                nomor: "551122994433",
                warna: "from-yellow-400 via-orange-400 to-amber-300",
                logo: "🟡",
                kode: "008",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "Mandiri Virtual Account"
              ? "bg-yellow-500 text-white border-yellow-500 shadow-lg scale-[1.02]"
              : "bg-white hover:border-yellow-400"
            }`}
          >
            Mandiri
          </button>

        </div>

      </div>

      {/* ================= WARNING ================= */}
      <div className="bg-red-50 border border-red-200 rounded-[28px] p-5">

        <h3 className="font-bold text-red-600 mb-2">
          Perhatian
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed">
          Pastikan nomor Virtual Account dan nominal pembayaran sesuai agar transaksi berhasil diverifikasi otomatis.
        </p>

      </div>

      {/* ================= CARA BAYAR ================= */}
      <div className="bg-blue-50 border border-blue-200 rounded-[28px] p-5">

        <div className="flex justify-between items-center mb-5">

          <h3 className="font-bold text-blue-700 text-xl">
            Cara Pembayaran VA
          </h3>

          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
            1-5 Menit
          </div>

        </div>

        <div className="space-y-4">

          <Step
            no="1"
            title="Pilih Bank"
            desc={`Gunakan ${selectedBank.nama}`}
          />

          <Step
            no="2"
            title="Salin Nomor VA"
            desc={`Gunakan nomor ${selectedBank.nomor}`}
          />

          <Step
            no="3"
            title="Masukkan Nomor VA"
            desc="Input nomor Virtual Account di ATM / Mobile Banking"
          />

          <Step
            no="4"
            title="Konfirmasi Pembayaran"
            desc={`Bayar Rp ${(nominal + 2500).toLocaleString("id-ID")}`}
          />

          <Step
            no="5"
            title="Pembayaran Berhasil"
            desc="Transaksi berhasil diverifikasi otomatis"
          />

        </div>

      </div>

    </div>

  );
}

function Step({ no, title, desc }) {

  return (

    <div className="flex gap-3">

      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow">
        {no}
      </div>

      <div>

        <p className="font-semibold text-base">
          {title}
        </p>

        <p className="text-sm text-gray-600 mt-1">
          {desc}
        </p>

      </div>

    </div>

  );
}