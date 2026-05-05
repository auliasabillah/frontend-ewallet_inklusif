import { useNavigate } from "react-router-dom";

function GrafikPengeluaran() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200">

      {/* HEADER */}
      <div className="bg-[#126B7D] text-white px-6 py-4 flex items-center justify-between">
        <span onClick={() => navigate("/beranda")} className="text-xl cursor-pointer">⬅</span>
        <h1 className="text-lg font-semibold">Informasi Pembayaran</h1>
        <span>⋯</span>
      </div>

      {/* CONTENT */}
      <div className="p-8 grid grid-cols-2 gap-6">

        {/* LEFT - PAYMENT OVERVIEW */}
        <div className="border rounded-xl p-6 bg-[#126B7D] text-white">
          <h2 className="font-bold mb-6">PAYMENT OVERVIEW</h2>

          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Payment ID</span>
            <span className="font-semibold">PK4856919</span>
          </div>

          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Tanggal</span>
            <span className="font-semibold">2 februari 2026 16.00</span>
          </div>

          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Total Pembayaran</span>
            <span className="text-red-300 font-semibold">Rp 0</span>
          </div>

          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Metode</span>
            <span className="font-semibold">QRIS</span>
          </div>

          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Biaya Admin</span>
            <span className="text-red-300 font-semibold">Rp 500</span>
          </div>
        </div>

        {/* RIGHT - GRAFIK */}
        <div className="border rounded-xl p-6 bg-[#126B7D] text-white flex flex-col">

          {/* TITLE */}
          <div>
            <h2 className="font-bold">GRAFIK PENGELUARAN</h2>

            {/* BULAN + ICON */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <span>📅</span>
              <span>FEBRUARI 2026</span>
            </div>
          </div>

          {/* AREA GRAFIK (kosong dulu / placeholder) */}
          <div className="flex-1 flex items-center justify-between px-6 text-2xl">
            <span>←</span>
            <span>→</span>
          </div>

          {/* LABEL */}
          <div className="flex justify-between text-sm px-4">
            <span>Gopay</span>
            <span>LinkAja</span>
            <span>QRIS</span>
            <span>Dana</span>
            <span>Shopee Pay</span>
          </div>

          {/* KETERANGAN */}
          <div className="mt-4 text-sm px-4">
            Pengeluaran terbesar minggu ini
          </div>

        </div>

      </div>
    </div>
  );
}

export default GrafikPengeluaran;