import { useState } from "react";

export default function MinimarketPayment({ nominal = 200000 }) {

  const [selectedMarket, setSelectedMarket] = useState({
    nama: "Indomaret",
    kode: "INV882341234",
    warna: "from-blue-600 via-sky-500 to-cyan-400",
    logo: "🏪",
  });

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedMarket.kode);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (

    <div className="space-y-4">

      {/* ================= CARD ================= */}
      <div
        className={`bg-gradient-to-br ${selectedMarket.warna} rounded-[30px] p-5 text-white shadow-xl relative overflow-hidden`}
      >

        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>

        <div className="relative z-10">

          {/* TOP */}
          <div className="flex justify-between items-start">

            <div>

              <p className="text-xs opacity-80 tracking-wide">
                Pembayaran Minimarket
              </p>

              <h1 className="text-3xl font-bold mt-2 tracking-wide">
                {selectedMarket.nama}
              </h1>

            </div>

            <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              {selectedMarket.logo}
            </div>

          </div>

          {/* KODE PEMBAYARAN */}
          <div className="bg-white/15 backdrop-blur-md rounded-[24px] p-5 mt-5 border border-white/10">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs opacity-80">
                  Kode Pembayaran
                </p>

                <h2 className="text-2xl font-bold mt-2 tracking-[3px]">
                  {selectedMarket.kode}
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
                  Merchant
                </span>

                <span className="font-semibold">
                  PT Payment Indonesia
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

              <div className="flex justify-between items-center">

                <span className="opacity-80">
                  Berlaku Sampai
                </span>

                <span className="font-semibold">
                  23:59 WIB
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= PILIH MARKET ================= */}
      <div className="bg-white rounded-[28px] border p-5 shadow-sm">

        <div className="flex items-center justify-between mb-4">

          <h3 className="font-bold text-xl">
            Pilih Minimarket
          </h3>

          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            Aktif
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          {/* INDOMARET */}
          <button
            onClick={() =>
              setSelectedMarket({
                nama: "Indomaret",
                kode: "INV882341234",
                warna: "from-blue-600 via-sky-500 to-cyan-400",
                logo: "🏪",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold hover:scale-[1.03]
            ${selectedMarket.nama === "Indomaret"
              ? "bg-blue-600 text-white shadow-lg border-blue-600"
              : "bg-white hover:border-blue-400"
            }`}
          >
            Indomaret
          </button>

          {/* ALFAMART */}
          <button
            onClick={() =>
              setSelectedMarket({
                nama: "Alfamart",
                kode: "ALF992341234",
                warna: "from-red-500 via-orange-400 to-yellow-300",
                logo: "🛒",
              })
            }
            className={`rounded-2xl p-3 border transition-all duration-300 font-semibold hover:scale-[1.03]
            ${selectedMarket.nama === "Alfamart"
              ? "bg-red-500 text-white shadow-lg border-red-500"
              : "bg-white hover:border-red-400"
            }`}
          >
            Alfamart
          </button>

        </div>

      </div>

      {/* ================= WARNING ================= */}
      <div className="bg-red-50 border border-red-200 rounded-[28px] p-5">

        <h3 className="font-bold text-red-600 mb-2">
          Perhatian
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed">
          Tunjukkan kode pembayaran kepada kasir untuk menyelesaikan transaksi.
        </p>

      </div>

      {/* ================= CARA BAYAR ================= */}
      <div className="bg-blue-50 border border-blue-200 rounded-[28px] p-5">

        <div className="flex justify-between items-center mb-5">

          <h3 className="font-bold text-blue-700 text-xl">
            Cara Pembayaran Minimarket
          </h3>

          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
            1-5 Menit
          </div>

        </div>

        <div className="space-y-4">

          <Step
            no="1"
            title={`Datang ke ${selectedMarket.nama}`}
            desc="Kunjungi gerai minimarket terdekat"
          />

          <Step
            no="2"
            title="Beritahu Kasir"
            desc="Sampaikan ingin melakukan pembayaran"
          />

          <Step
            no="3"
            title="Tunjukkan Kode Pembayaran"
            desc={`Kasih kode ${selectedMarket.kode} ke kasir`}
          />

          <Step
            no="4"
            title="Lakukan Pembayaran"
            desc={`Bayar Rp ${(nominal + 2500).toLocaleString("id-ID")}`}
          />

          <Step
            no="5"
            title="Simpan Struk"
            desc="Simpan bukti pembayaran dari kasir"
          />

        </div>

      </div>

      {/* ================= INFORMASI ================= */}
      <div className="bg-white rounded-[28px] border p-5 shadow-sm">

        <h3 className="font-bold text-xl mb-4">
          Informasi Pembayaran
        </h3>

        <div className="space-y-4 text-sm text-gray-600">

          <div className="flex items-start gap-3">
            🧾
            <span>
              Simpan struk pembayaran sebagai bukti transaksi
            </span>
          </div>

          <div className="flex items-start gap-3">
            ⚡
            <span>
              Verifikasi pembayaran berlangsung otomatis & cepat
            </span>
          </div>

          <div className="flex items-start gap-3">
            💬
            <span>
              Hubungi bantuan jika mengalami kendala transaksi
            </span>
          </div>

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