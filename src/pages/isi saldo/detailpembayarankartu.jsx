import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function DetailPembayaranKartu() {
  const navigate = useNavigate();
  const location = useLocation();

  const nominal = location.state?.nominal || 0;
  const metode = location.state?.metode || "Kartu Debit/Kredit";

  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!pin) {
      alert("Masukkan PIN terlebih dahulu");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:8000/api/topup", {
        user_id: user?.id,
        nominal: nominal,
        metode: metode,
      });

      alert("Top up berhasil!");
      navigate("/beranda");
    } catch (error) {
      console.log(error.response?.data);
      alert("Top up gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      
      {/* HEADER */}
      <div className="bg-[#0E6B78] text-white py-4 px-6 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-2xl">
          ←
        </button>

        <h1 className="text-2xl font-bold">
          Informasi Pembayaran
        </h1>

        <div>⋯</div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-3xl shadow-lg p-10">

        <h2 className="text-3xl font-bold text-center mb-8">
          Konfirmasi Pembayaran
        </h2>

        <div className="space-y-6">

          <div>
            <label className="block text-lg font-medium mb-2">
              Metode Pembayaran
            </label>

            <input
              type="text"
              value={metode}
              disabled
              className="w-full border rounded-xl px-4 py-4 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Nominal Top Up
            </label>

            <input
              type="text"
              value={`Rp ${nominal.toLocaleString("id-ID")}`}
              disabled
              className="w-full border rounded-xl px-4 py-4 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Masukkan PIN
            </label>

            <input
              type="password"
              placeholder="******"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full border rounded-xl px-4 py-4"
            />
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-[#0E6B78] text-white py-4 rounded-2xl font-bold text-lg hover:opacity-90"
          >
            {loading ? "Memproses..." : "Konfirmasi Pembayaran"}
          </button>

        </div>
      </div>
    </div>
  );
}