import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentMethodItem = ({ title, subtitle, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-4 border rounded-2xl hover:bg-gray-50 cursor-pointer transition-all duration-300 hover:shadow-sm"
    >
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
          💳
        </div>

        <div>

          <p className="font-semibold text-lg">
            {title}
          </p>

          <p className="text-sm text-gray-500">
            {subtitle}
          </p>

        </div>

      </div>

      <span className="text-gray-400 text-2xl">
        ›
      </span>

    </div>
  );
};

export default function pembayaran() {

  const navigate = useNavigate();

  const [showMoreLeft, setShowMoreLeft] = useState(false);
  const [showMoreRight, setShowMoreRight] = useState(false);

  const [nominal, setNominal] = useState(200000);

  const handleClick = (metode) => {

    navigate("/detail-pembayaran", {
      state: {
        metode,
        nominal,
      },
    });

  };

  return (

    <div className="min-h-screen bg-[#f5f7fb]">

      {/* ================= HEADER ================= */}
      <div className="bg-[#1F6F78] text-white px-6 py-5 flex items-center gap-4 shadow">

        <span
          onClick={() => navigate(-1)}
          className="text-3xl cursor-pointer hover:opacity-80 transition"
        >
          ←
        </span>

        <h1 className="font-semibold text-2xl">
          Pintu Pembayaran
        </h1>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-8 max-w-7xl mx-auto">

        {/* ================= NOMINAL TOP UP ================= */}
        <div className="bg-gradient-to-r from-[#1F6F78] via-[#278892] to-cyan-500 rounded-[36px] p-8 text-white shadow-2xl relative overflow-hidden mb-8">

          {/* EFFECT */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/10 rounded-full"></div>

          <div className="absolute -bottom-16 -left-10 w-60 h-60 bg-white/5 rounded-full"></div>

          <div className="relative z-10 flex items-center justify-between">

            {/* LEFT */}
            <div>

              <p className="text-sm opacity-80 tracking-wide">
                Nominal Top Up
              </p>

              <h1 className="text-6xl font-bold mt-3 tracking-wide">
                Rp {nominal.toLocaleString("id-ID")}
              </h1>

              {/* QUICK BUTTON */}
              <div className="flex gap-3 mt-5 flex-wrap">

                {[50000, 100000, 200000, 500000, 1000000].map((item) => (

                  <button
                    key={item}
                    onClick={() => setNominal(item)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${nominal === item
                      ? "bg-white text-[#1F6F78]"
                      : "bg-white/20 hover:bg-white/30"
                    }`}
                  >

                    Rp {item.toLocaleString("id-ID")}

                  </button>

                ))}

              </div>

              {/* INPUT CUSTOM */}
              <div className="mt-5">

                <input
                  type="number"
                  placeholder="Masukkan nominal custom"
                  value={nominal}
                  onChange={(e) => setNominal(Number(e.target.value))}
                  className="bg-white/15 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 w-[320px] outline-none placeholder:text-white/60 text-white"
                />

              </div>

            </div>

            {/* RIGHT */}
            <div className="w-28 h-28 rounded-[32px] bg-white/20 backdrop-blur-md flex items-center justify-center text-6xl shadow-xl">

              💰

            </div>

          </div>

          {/* TOTAL */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[28px] p-6 mt-8 flex items-center justify-between">

            <div>

              <p className="text-sm opacity-80">
                Total Pembayaran
              </p>

              <h2 className="text-4xl font-bold mt-2">
                Rp {(nominal + 2500).toLocaleString("id-ID")}
              </h2>

            </div>

            <div className="text-right">

              <p className="text-sm opacity-80">
                Status
              </p>

              <div className="bg-yellow-300 text-yellow-900 px-5 py-2 rounded-full text-sm font-bold mt-2">
                Menunggu Pembayaran
              </div>

            </div>

          </div>

        </div>

        {/* ================= TITLE ================= */}
        <div className="flex items-center justify-between mb-5">

          <h2 className="font-bold text-3xl text-gray-800">
            Pilih Metode Pembayaran
          </h2>

          <div className="bg-white border rounded-2xl px-4 py-2 shadow-sm text-sm text-gray-600">
            Total metode: 7
          </div>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* ================= LEFT ================= */}
          <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

            <div className="bg-[#1F6F78] text-white p-5 text-xl font-semibold">
              E-Wallet & QRIS
            </div>

            <div className="p-5 space-y-4">

              <PaymentMethodItem
                title="QRIS"
                subtitle="Scan QR"
                onClick={() => handleClick("QRIS")}
              />

              <PaymentMethodItem
                title="GOPAY"
                subtitle="Aplikasi Gopay"
                onClick={() => handleClick("GoPay")}
              />

              <PaymentMethodItem
                title="DANA"
                subtitle="Saldo Dana"
                onClick={() => handleClick("DANA")}
              />

              <PaymentMethodItem
                title="Shopee Pay"
                subtitle="Aplikasi Shopee"
                onClick={() => handleClick("ShopeePay")}
              />

              <PaymentMethodItem
                title="Link Aja!"
                subtitle="Aplikasi LinkAja"
                onClick={() => handleClick("LinkAja")}
              />

              {showMoreLeft && (

                <>

                  <PaymentMethodItem
                    title="OVO"
                    subtitle="Aplikasi OVO"
                    onClick={() => handleClick("OVO")}
                  />

                  <PaymentMethodItem
                    title="iSaku"
                    subtitle="Saldo iSaku"
                    onClick={() => handleClick("iSaku")}
                  />

                </>

              )}

              <button
                onClick={() => setShowMoreLeft(!showMoreLeft)}
                className="w-full border py-3 rounded-2xl text-sm text-blue-600 hover:bg-blue-50 transition"
              >

                {showMoreLeft
                  ? "Sembunyikan"
                  : "Lihat lainnya"}

              </button>

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

            <div className="bg-[#1F6F78] text-white p-5 text-xl font-semibold">
              Transfer & Pembayaran Lainnya
            </div>

            <div className="p-5 space-y-4">

              <PaymentMethodItem
                title="ATM Transfer"
                subtitle="Transfer Bank"
                onClick={() => handleClick("ATM Transfer")}
              />

              <PaymentMethodItem
                title="Minimarket"
                subtitle="Bayar di kasir"
                onClick={() => handleClick("Minimarket")}
              />

              <PaymentMethodItem
                title="Kartu Debit/Kredit"
                subtitle="Visa / Mastercard"
                onClick={() => handleClick("Kartu Debit/Kredit")}
              />

              {showMoreRight && (

                <>

                  <PaymentMethodItem
                    title="Virtual Account"
                    subtitle="VA Bank"
                    onClick={() => handleClick("Virtual Account")}
                  />

                  <PaymentMethodItem
                    title="Internet Banking"
                    subtitle="Online Banking"
                    onClick={() => handleClick("Internet Banking")}
                  />

                </>

              )}

              <button
                onClick={() => setShowMoreRight(!showMoreRight)}
                className="w-full border py-3 rounded-2xl text-sm text-blue-600 hover:bg-blue-50 transition"
              >

                {showMoreRight
                  ? "Sembunyikan"
                  : "Lihat lainnya"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}