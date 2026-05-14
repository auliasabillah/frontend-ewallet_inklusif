import { useState } from "react";

export default function DebitCreditPayment({ nominal = 200000 }) {

  const [selectedBank, setSelectedBank] = useState({
    nama: "BCA",
    warna: "from-blue-600 via-sky-500 to-cyan-400",
    nomor: "4821",
    logo: "🏦",
  });

  const [cardType, setCardType] = useState({
    nama: "Visa",
    warna: "bg-blue-600",
    logo: "💠",
    nomor: "4821",
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
                Kartu Debit / Kredit
              </p>

              <h1 className="text-3xl font-bold mt-2 tracking-wide">
                {selectedBank.nama} • {cardType.nama}
              </h1>

            </div>

            <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-all duration-300">
              {cardType.logo}
            </div>

          </div>

          {/* INFO KARTU */}
          <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-5 mt-5 border border-white/10">

            <div className="space-y-4">

              <div>

                <p className="text-xs opacity-80">
                  Nomor Kartu
                </p>

                <h2 className="text-2xl font-bold mt-2 tracking-[3px] transition-all duration-300">
                  •••• •••• •••• {cardType.nomor}
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <p className="text-xs opacity-80">
                    Expired
                  </p>

                  <p className="font-semibold mt-1">
                    12/28
                  </p>

                </div>

                <div>

                  <p className="text-xs opacity-80">
                    CVV
                  </p>

                  <p className="font-semibold mt-1">
                    •••
                  </p>

                </div>

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
            Pilih Bank
          </h3>

          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            Aman
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          {/* BCA */}
          <button
            onClick={() =>
              setSelectedBank({
                nama: "BCA",
                warna: "from-blue-600 via-sky-500 to-cyan-400",
                nomor: "4821",
                logo: "🏦",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "BCA"
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
                nama: "BNI",
                warna: "from-orange-500 via-amber-400 to-yellow-300",
                nomor: "9921",
                logo: "🟠",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "BNI"
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
                nama: "BRI",
                warna: "from-blue-700 via-indigo-500 to-indigo-400",
                nomor: "7712",
                logo: "🔵",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "BRI"
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
                nama: "Mandiri",
                warna: "from-yellow-400 via-orange-400 to-amber-300",
                nomor: "5511",
                logo: "🟡",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${selectedBank.nama === "Mandiri"
              ? "bg-yellow-500 text-white border-yellow-500 shadow-lg scale-[1.02]"
              : "bg-white hover:border-yellow-400"
            }`}
          >
            Mandiri
          </button>

        </div>

      </div>

      {/* ================= PILIH JENIS KARTU ================= */}
      <div className="bg-white rounded-[28px] border p-5 shadow-sm">

        <div className="flex items-center justify-between mb-4">

          <h3 className="font-bold text-xl">
            Pilih Jenis Kartu
          </h3>

          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            Secure
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          {/* VISA */}
          <button
            onClick={() =>
              setCardType({
                nama: "Visa",
                warna: "bg-blue-600",
                logo: "💠",
                nomor: "4821",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${cardType.nama === "Visa"
              ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-[1.02]"
              : "bg-white hover:border-blue-400"
            }`}
          >
            Visa
          </button>

          {/* MASTERCARD */}
          <button
            onClick={() =>
              setCardType({
                nama: "Mastercard",
                warna: "bg-red-500",
                logo: "🔴",
                nomor: "7712",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${cardType.nama === "Mastercard"
              ? "bg-red-500 text-white border-red-500 shadow-lg scale-[1.02]"
              : "bg-white hover:border-red-400"
            }`}
          >
            Mastercard
          </button>

          {/* JCB */}
          <button
            onClick={() =>
              setCardType({
                nama: "JCB",
                warna: "bg-green-600",
                logo: "🟢",
                nomor: "9921",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${cardType.nama === "JCB"
              ? "bg-green-600 text-white border-green-600 shadow-lg scale-[1.02]"
              : "bg-white hover:border-green-400"
            }`}
          >
            JCB
          </button>

          {/* GPN */}
          <button
            onClick={() =>
              setCardType({
                nama: "GPN",
                warna: "bg-gray-700",
                logo: "⚫",
                nomor: "5511",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold
            ${cardType.nama === "GPN"
              ? "bg-gray-700 text-white border-gray-700 shadow-lg scale-[1.02]"
              : "bg-white hover:border-gray-400"
            }`}
          >
            GPN
          </button>

        </div>

      </div>

      {/* ================= WARNING ================= */}
      <div className="bg-red-50 border border-red-200 rounded-[28px] p-5">

        <h3 className="font-bold text-red-600 mb-2">
          Perhatian
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed">
          Pastikan data kartu yang dimasukkan benar dan jangan bagikan PIN atau OTP kepada siapa pun.
        </p>

      </div>

      {/* ================= CARA BAYAR ================= */}
      <div className="bg-blue-50 border border-blue-200 rounded-[28px] p-5">

        <div className="flex justify-between items-center mb-5">

          <h3 className="font-bold text-blue-700 text-xl">
            Cara Pembayaran Kartu
          </h3>

          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
            Instan
          </div>

        </div>

        <div className="space-y-4">

          <Step
            no="1"
            title="Pilih Bank"
            desc={`Gunakan kartu ${selectedBank.nama}`}
          />

          <Step
            no="2"
            title="Pilih Jenis Kartu"
            desc={`Pilih kartu ${cardType.nama}`}
          />

          <Step
            no="3"
            title="Masukkan Data Kartu"
            desc="Input nomor kartu, expired, dan CVV"
          />

          <Step
            no="4"
            title="Verifikasi OTP"
            desc="Masukkan kode OTP dari SMS / mobile banking"
          />

          <Step
            no="5"
            title="Pembayaran Berhasil"
            desc={`Pembayaran Rp ${(nominal + 2500).toLocaleString("id-ID")} berhasil diproses`}
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