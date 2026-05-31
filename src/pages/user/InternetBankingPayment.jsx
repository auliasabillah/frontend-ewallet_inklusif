import { useState } from "react";

export default function InternetBankingPayment({ nominal = 200000 }) {

  const [selectedBank, setSelectedBank] = useState({
    nama: "BCA KlikBCA",
    username: "klikbca_user",
    warna: "from-blue-600 via-sky-500 to-cyan-400",
    logo: "🏦",
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
                Internet Banking
              </p>

              <h1 className="text-3xl font-bold mt-2 tracking-wide">
                {selectedBank.nama}
              </h1>

            </div>

            <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              {selectedBank.logo}
            </div>

          </div>

          {/* INFO */}
          <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-5 mt-5 border border-white/10">

            <div className="space-y-4">

              <div>

                <p className="text-xs opacity-80">
                  Username Internet Banking
                </p>

                <h2 className="text-2xl font-bold mt-2 tracking-wide">
                  {selectedBank.username}
                </h2>

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
            Pilih Internet Banking
          </h3>

          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            Online
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          {/* BCA */}
          <button
            onClick={() =>
              setSelectedBank({
                nama: "BCA KlikBCA",
                username: "klikbca_user",
                warna: "from-blue-600 via-sky-500 to-cyan-400",
                logo: "🏦",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "BCA KlikBCA"
              ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-[1.02]"
              : "bg-white hover:border-blue-400"
            }`}
          >
            KlikBCA
          </button>

          {/* BNI */}
          <button
            onClick={() =>
              setSelectedBank({
                nama: "BNI Internet Banking",
                username: "bni_user",
                warna: "from-orange-500 via-amber-400 to-yellow-300",
                logo: "🟠",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "BNI Internet Banking"
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
                nama: "BRI Internet Banking",
                username: "bri_user",
                warna: "from-blue-700 via-indigo-500 to-indigo-400",
                logo: "🔵",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "BRI Internet Banking"
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
                nama: "Mandiri Online",
                username: "mandiri_user",
                warna: "from-yellow-400 via-orange-400 to-amber-300",
                logo: "🟡",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "Mandiri Online"
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
          Jangan bagikan password atau kode OTP Internet Banking kepada siapa pun.
        </p>

      </div>

      {/* ================= CARA BAYAR ================= */}
      <div className="bg-blue-50 border border-blue-200 rounded-[28px] p-5">

        <div className="flex justify-between items-center mb-5">

          <h3 className="font-bold text-blue-700 text-xl">
            Cara Pembayaran Internet Banking
          </h3>

          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
            Online
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
            title="Login Internet Banking"
            desc={`Masuk menggunakan akun ${selectedBank.username}`}
          />

          <Step
            no="3"
            title="Pilih Menu Transfer"
            desc="Masuk ke menu transfer atau pembayaran"
          />

          <Step
            no="4"
            title="Konfirmasi Pembayaran"
            desc={`Bayar Rp ${(nominal + 2500).toLocaleString("id-ID")}`}
          />

          <Step
            no="5"
            title="Pembayaran Berhasil"
            desc="Transaksi berhasil diproses"
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