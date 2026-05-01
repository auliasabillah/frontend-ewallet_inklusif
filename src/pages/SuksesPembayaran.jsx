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
    <div className="min-h-screen bg-gray-100">

      <div className="bg-[#1F6F78] text-white p-4 text-center font-semibold">
        Pembayaran Berhasil
      </div>

      <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow p-6 text-center">

        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white text-2xl mb-4">
          ✓
        </div>

        <h2 className="text-lg font-semibold">Pembayaran Berhasil!</h2>

        <div className="bg-green-100 text-green-700 py-3 rounded-lg my-4 font-semibold">
          Rp {(data.nominal).toLocaleString("id-ID")}
        </div>

        <div className="text-left text-sm space-y-2">
          <p>Metode: {data.metode}</p>
          <p>ID: {data.id}</p>
          <p>Waktu: {data.waktu}</p>
        </div>

        <button
          onClick={() => navigate("/beranda")}
          className="mt-5 w-full bg-[#1F6F78] text-white py-3 rounded-xl"
        >
          Kembali ke Beranda
        </button>

      </div>
    </div>
  );
}