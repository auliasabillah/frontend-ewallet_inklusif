import { useLocation, useNavigate } from "react-router-dom";

export default function DetailPembayaran() {
  const navigate = useNavigate();
  const location = useLocation();

  const nominal = location.state?.nominal || 200000;
  const metode = location.state?.metode || "QRIS";

  const handleBayar = () => {
    navigate("/konfirmasipembayaran", {
      state: {
        nominal,
        metode,
        id: "TRX001",
        waktu: new Date().toLocaleString("id-ID"),
        jenis: "Top Up Saldo",
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-[#1F6F78] text-white p-4 flex items-center gap-3">
        <span onClick={() => navigate(-1)} className="cursor-pointer text-xl">
          ←
        </span>
        <h1 className="font-semibold">Detail Pembayaran</h1>
      </div>

      <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-4">

        {/* LEFT */}
        <div className="bg-white rounded-xl shadow p-4 space-y-3">
          <h2 className="font-semibold text-lg">Detail Pembayaran</h2>
          <p className="text-xs text-gray-500">
            Periksa kembali informasi pembayaran anda sebelum melanjutkan
          </p>

          <div className="border rounded-xl p-3 space-y-2">
            <p className="text-sm font-semibold text-[#1F6F78]">
              Ringkasan Pembayaran
            </p>

            <div className="flex justify-between text-sm">
              <span>Jenis Transaksi</span>
              <span>Top Up Saldo</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Nominal</span>
              <span className="text-[#1F6F78] font-semibold">
                Rp {nominal.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Metode</span>
              <span>{metode}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Biaya Admin</span>
              <span>Rp 1.500</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <span>Total Pembayaran</span>
              <span className="text-[#1F6F78]">
                Rp {(nominal + 1500).toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-xl shadow p-4 text-center space-y-3">

          <p className="bg-[#1F6F78] text-white py-2 rounded text-sm">
            Scan QRIS untuk Pembayaran
          </p>

          <div className="w-40 h-40 bg-gray-300 mx-auto flex items-center justify-center">
            QR
          </div>

          <p className="text-xs text-gray-500">ID Transaksi</p>
          <p className="font-semibold text-[#1F6F78]">TRX001</p>

          
          <button
            onClick={handleBayar}
            className="w-full bg-[#1F6F78] text-white py-2 rounded"
          >
            Saya Sudah Bayar
          </button>

          <button className="w-full border border-red-500 text-red-500 py-2 rounded">
            Batalkan Transaksi
          </button>

        </div>
      </div>
    </div>
  );
}