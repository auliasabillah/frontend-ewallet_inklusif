import { useState } from "react";

export default function TransferLainnya({ metode, nominal = 200000 }) {

  const [selectedBank, setSelectedBank] = useState({
    nama: "BCA Virtual Account",
    pembayaran: "880812341234",
    warna: "from-blue-600 via-sky-500 to-cyan-400",
    logo: "🏦",
    kode: "014",
    penerima: "PT Payment Indonesia",
  });

  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState("ATM");

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedBank.pembayaran);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  if (metode !== "ATM Transfer") return null;

  return (

    <div className="space-y-4">

      {/* ================= CARD ================= */}
      <div
        className={`bg-gradient-to-br ${selectedBank.warna} rounded-[30px] p-5 text-white shadow-xl relative overflow-hidden`}
      >

        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>

        <div className="relative z-10">

          {/* TOP */}
          <div className="flex justify-between items-start">

            <div>

              <p className="text-xs opacity-80 tracking-wide">
                ATM Transfer
              </p>

              <h1 className="text-3xl font-bold mt-2 tracking-wide">
                {selectedBank.nama}
              </h1>

            </div>

            <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              {selectedBank.logo}
            </div>

          </div>

          {/* NOMOR PEMBAYARAN */}
          <div className="bg-white/15 backdrop-blur-md rounded-[24px] p-5 mt-5 border border-white/10">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs opacity-80">
                  Nomor Pembayaran
                </p>

                <h2 className="text-2xl font-bold mt-2 tracking-[3px]">
                  {selectedBank.pembayaran}
                </h2>

              </div>

              <button
                onClick={handleCopy}
                className="bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition shadow"
              >
                {copied ? "✔ Tersalin" : "Salin"}
              </button>

            </div>

            {/* INFO */}
            <div className="mt-5 space-y-3 text-sm">

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
                  Penerima
                </span>

                <span className="font-semibold">
                  {selectedBank.penerima}
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
                pembayaran: "880812341234",
                warna: "from-blue-600 via-sky-500 to-cyan-400",
                logo: "🏦",
                kode: "014",
                penerima: "PT Payment Indonesia",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold hover:scale-[1.03]
            ${selectedBank.nama === "BCA Virtual Account"
              ? "bg-blue-600 text-white shadow-lg border-blue-600"
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
                pembayaran: "990011223344",
                warna: "from-orange-500 via-amber-400 to-yellow-300",
                logo: "🟠",
                kode: "009",
                penerima: "PT Payment Indonesia",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold hover:scale-[1.03]
            ${selectedBank.nama === "BNI Virtual Account"
              ? "bg-orange-500 text-white shadow-lg border-orange-500"
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
                pembayaran: "771188221199",
                warna: "from-blue-700 via-indigo-500 to-indigo-400",
                logo: "🔵",
                kode: "002",
                penerima: "PT Payment Indonesia",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold hover:scale-[1.03]
            ${selectedBank.nama === "BRI Virtual Account"
              ? "bg-blue-700 text-white shadow-lg border-blue-700"
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
                pembayaran: "551122994433",
                warna: "from-yellow-400 via-orange-400 to-amber-300",
                logo: "🟡",
                kode: "008",
                penerima: "PT Payment Indonesia",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold hover:scale-[1.03]
            ${selectedBank.nama === "Mandiri Virtual Account"
              ? "bg-yellow-500 text-white shadow-lg border-yellow-500"
              : "bg-white hover:border-yellow-400"
            }`}
          >
            Mandiri
          </button>

        </div>

      </div>

      {/* ================= TAB ================= */}
      <div className="bg-white rounded-[28px] border p-3 shadow-sm flex gap-3">

        <button
          onClick={() => setTab("ATM")}
          className={`w-full py-3 rounded-2xl font-semibold transition
          ${tab === "ATM"
            ? "bg-[#1F6F78] text-white shadow-lg"
            : "bg-gray-100 text-gray-700"
          }`}
        >
          ATM
        </button>

        <button
          onClick={() => setTab("Mobile")}
          className={`w-full py-3 rounded-2xl font-semibold transition
          ${tab === "Mobile"
            ? "bg-[#1F6F78] text-white shadow-lg"
            : "bg-gray-100 text-gray-700"
          }`}
        >
          Mobile Banking
        </button>

      </div>

      {/* ================= WARNING ================= */}
      <div className="bg-red-50 border border-red-200 rounded-[28px] p-5">

        <h3 className="font-bold text-red-600 mb-2">
          Perhatian
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed">
          Pastikan nominal pembayaran sesuai agar transaksi dapat diverifikasi otomatis oleh sistem.
        </p>

      </div>

      {/* ================= CARA BAYAR ================= */}
      <div className="bg-blue-50 border border-blue-200 rounded-[28px] p-5">

        <div className="flex justify-between items-center mb-5">

          <h3 className="font-bold text-blue-700 text-xl">

            {tab === "ATM"
              ? "Cara Pembayaran ATM"
              : "Cara Pembayaran Mobile Banking"}

          </h3>

          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
            1-5 Menit
          </div>

        </div>

        {tab === "ATM" ? (

          <div className="space-y-4">

            <Step
              no="1"
              title="Datang ke ATM"
              desc="Masukkan kartu ATM & login menggunakan PIN"
            />

            <Step
              no="2"
              title="Pilih Menu Transfer"
              desc="Pilih transfer Virtual Account / transfer bank"
            />

            <Step
              no="3"
              title="Masukkan Nomor Pembayaran"
              desc={`Input nomor ${selectedBank.pembayaran}`}
            />

            <Step
              no="4"
              title="Masukkan Nominal"
              desc={`Bayar Rp ${(nominal + 2500).toLocaleString("id-ID")}`}
            />

            <Step
              no="5"
              title="Konfirmasi Pembayaran"
              desc="Pastikan data pembayaran sudah benar"
            />

          </div>

        ) : (

          <div className="space-y-4">

            <Step
              no="1"
              title="Buka Mobile Banking"
              desc="Login ke aplikasi mobile banking"
            />

            <Step
              no="2"
              title="Pilih Transfer / Virtual Account"
              desc="Masuk ke menu pembayaran virtual account"
            />

            <Step
              no="3"
              title="Masukkan Nomor Pembayaran"
              desc={`Input nomor ${selectedBank.pembayaran}`}
            />

            <Step
              no="4"
              title="Masukkan Nominal"
              desc={`Bayar Rp ${(nominal + 2500).toLocaleString("id-ID")}`}
            />

            <Step
              no="5"
              title="Selesaikan Pembayaran"
              desc="Konfirmasi & selesaikan transaksi"
            />

          </div>

        )}

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