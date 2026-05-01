import { useLocation, useNavigate } from "react-router-dom";

export default function KonfirmasiTransfer() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state || {};

  const handleTransfer = () => {
    navigate("/konfirmasipembayaran", {
      state: {
        nominal: Number(data.nominal || 0),
        metode: "Transfer Bank",
        id: "TRX" + Date.now(),
        waktu: new Date().toLocaleString("id-ID"),
        jenis: "Transfer",
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-[#1F6F78] text-white p-4 flex items-center gap-3">
        <span onClick={() => navigate(-1)} className="cursor-pointer text-xl">←</span>
        <h1 className="font-semibold">Konfirmasi Pembayaran</h1>
      </div>

      <div className="max-w-3xl mx-auto p-6 space-y-5">

        {/* DETAIL */}
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="font-semibold mb-3">Detail Transfer</p>

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Metode</span>
              <span>Rekening Bank</span>
            </div>

            <div className="flex justify-between">
              <span>Bank Tujuan</span>
              <span>{data.bank}</span>
            </div>

            <div className="flex justify-between">
              <span>Nomor Rekening</span>
              <span className="font-semibold">{data.rekening}</span>
            </div>

            <div className="flex justify-between">
              <span>Nama Penerima</span>
              <span>{data.nama}</span>
            </div>

            <div className="flex justify-between">
              <span>Nominal Transfer</span>
              <span className="text-blue-600">
                Rp {Number(data.nominal || 0).toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Biaya Admin</span>
              <span>Rp 2.500</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>
                Rp {(Number(data.nominal || 0) + 2500).toLocaleString("id-ID")}
              </span>
            </div>

          </div>
        </div>

        {/* PIN */}
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <p className="mb-3">Masukkan PIN Anda</p>

          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <input
                key={i}
                className="w-12 h-12 border text-center rounded"
                maxLength={1}
              />
            ))}
          </div>

          <button
            onClick={handleTransfer} // 🔥 FIX DI SINI
            className="w-full bg-[#1F6F78] text-white py-3 rounded-xl"
          >
            Konfirmasi & Transfer
          </button>
        </div>

      </div>
    </div>
  );
}