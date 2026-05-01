import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentMethodItem = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50 cursor-pointer transition">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          💳
        </div>
        <div>
          <p className="font-semibold text-sm">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <span className="text-gray-400 text-lg">›</span>
    </div>
  );
};

export default function Payment() {
  const navigate = useNavigate();
  const [showMoreLeft, setShowMoreLeft] = useState(false);
  const [showMoreRight, setShowMoreRight] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-[#1F6F78] text-white px-4 py-4 flex items-center gap-3">
        <span
          onClick={() => navigate(-1)}
          className="text-2xl cursor-pointer"
        >
          ←
        </span>
        <h1 className="font-semibold">Pintu Pembayaran</h1>
      </div>

      <div className="p-6 max-w-5xl mx-auto">

        {/* NOMINAL */}
        <div className="bg-white p-4 rounded-xl mb-4 flex justify-between shadow">
          <span>Nominal Top Up</span>
          <span className="text-[#1F6F78] font-semibold">Rp 200.000</span>
        </div>

        <p className="mb-3 font-semibold text-sm">
          Pilih Metode Pembayaran
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          {/* LEFT */}
          <div className="bg-white rounded-xl shadow">
            <div className="bg-[#1F6F78] text-white p-3 rounded-t-xl">
              E-Wallet & QRIS
            </div>

            <div className="p-3 space-y-3">

              {/* 🔥 QRIS (bisa klik) */}
              <div
                onClick={() =>
                  navigate("/detail-pembayaran", {
                    state: { metode: "QRIS", nominal: 200000 },
                  })
                }
              >
                <PaymentMethodItem title="QRIS" subtitle="Scan QR" />
              </div>

              <PaymentMethodItem title="GOPAY" subtitle="Aplikasi Gopay" />
              <PaymentMethodItem title="DANA" subtitle="Saldo Dana" />
              <PaymentMethodItem title="Shopee Pay" subtitle="Aplikasi Shopee" />
              <PaymentMethodItem title="Link Aja!" subtitle="Aplikasi LinkAja" />

              {showMoreLeft && (
                <>
                  <PaymentMethodItem title="OVO" subtitle="Aplikasi OVO" />
                  <PaymentMethodItem title="iSaku" subtitle="Saldo iSaku" />
                </>
              )}

              <button
                onClick={() => setShowMoreLeft(!showMoreLeft)}
                className="w-full border py-2 rounded-xl text-sm text-blue-600"
              >
                {showMoreLeft ? "Sembunyikan" : "Lihat lainnya"}
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-xl shadow">
            <div className="bg-[#1F6F78] text-white p-3 rounded-t-xl">
              Transfer & Pembayaran Lainnya
            </div>

            <div className="p-3 space-y-3">
              <PaymentMethodItem title="ATM Transfer" subtitle="Transfer Bank" />
              <PaymentMethodItem title="Minimarket" subtitle="Bayar di kasir" />
              <PaymentMethodItem title="Kartu Debit/Kredit" subtitle="Visa / Mastercard" />

              {showMoreRight && (
                <>
                  <PaymentMethodItem title="Virtual Account" subtitle="VA Bank" />
                  <PaymentMethodItem title="Internet Banking" subtitle="Online" />
                </>
              )}

              <button
                onClick={() => setShowMoreRight(!showMoreRight)}
                className="w-full border py-2 rounded-xl text-sm text-blue-600"
              >
                {showMoreRight ? "Sembunyikan" : "Lihat lainnya"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
