import { useLocation, useNavigate } from "react-router-dom";

export default function SuksesPembayaran() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = {
    nominal: location.state?.nominal || 0,
    metode: location.state?.metode || "-",
    id: location.state?.id || "-",
    waktu: location.state?.waktu || "-",
    jenis: location.state?.jenis || "-",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f7f4] via-white to-[#dff4ef]">

      {/* HEADER */}
      <div className="bg-[#1F6F78] text-white p-5 flex items-center justify-between shadow-md">

        <div className="flex items-center gap-3">

          <div className="text-2xl">
            💸
          </div>

          <div>
            <h1 className="font-bold text-lg">
              Pembayaran Berhasil
            </h1>

            <p className="text-xs opacity-80">
              Transaksi telah diproses
            </p>
          </div>

        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full text-xs">
          SUCCESS
        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-lg mx-auto px-5 py-10">

        <div className="bg-white rounded-[35px] shadow-2xl overflow-hidden border border-gray-100">

          {/* TOP */}
          <div className="bg-gradient-to-r from-[#1F6F78] to-[#2F8F9D] p-8 text-center text-white relative overflow-hidden">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>

            {/* ICON */}
            <div className="relative z-10 w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center shadow-xl">

              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl">
                ✓
              </div>

            </div>

            <div className="relative z-10 mt-6">

              <p className="text-sm opacity-80">
                Pembayaran berhasil dilakukan
              </p>

              <h2 className="text-3xl font-bold mt-2">
                Rp {Number(data.nominal).toLocaleString("id-ID")}
              </h2>

            </div>

          </div>

          {/* DETAIL */}
          <div className="p-6 space-y-5">

            {/* STATUS */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Status Pembayaran
                </p>

                <p className="font-bold text-green-600">
                  BERHASIL
                </p>
              </div>

              <div className="text-4xl">
                🎉
              </div>

            </div>

            {/* DETAIL LIST */}
            <div className="space-y-4">

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-500">
                  Metode
                </span>

                <span className="font-semibold text-gray-800">
                  {data.metode}
                </span>
              </div>

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-500">
                  Jenis
                </span>

                <span className="font-semibold text-gray-800">
                  {data.jenis}
                </span>
              </div>

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-500">
                  ID Transaksi
                </span>

                <span className="font-semibold text-[#1F6F78] text-sm">
                  {data.id}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500">
                  Waktu
                </span>

                <span className="font-semibold text-gray-800 text-sm">
                  {data.waktu}
                </span>
              </div>

            </div>

            {/* INFO */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">

              <div className="flex items-start gap-3">

                <div className="text-2xl">
                  🔒
                </div>

                <div>
                  <p className="font-semibold text-blue-700">
                    Transaksi Aman
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    Pembayaran kamu berhasil diverifikasi dan diamankan oleh sistem E-Wallet.
                  </p>
                </div>

              </div>

            </div>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/beranda")}
              className="w-full bg-[#1F6F78] text-white py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition shadow-lg"
            >
              Kembali ke Beranda
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}