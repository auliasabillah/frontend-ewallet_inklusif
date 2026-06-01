import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailPembayaran() {
  const navigate = useNavigate();

  const [nominal, setNominal] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    if (user?.id) {
      axios
        .get(`http://127.0.0.1:8000/api/saldo/${user.id}`)
        .then((res) => setSaldo(res.data.saldo))
        .catch((err) => console.log(err));
    }
  }, []);

  const handlePembayaran = async () => {
    try {
      if (!nominal || Number(nominal) <= 0) {
        alert("Masukkan nominal pembayaran");
        return;
      }

      const res = await axios.post(
        "http://127.0.0.1:8000/api/payment",
        {
          user_id: user.id,
          nominal: Number(nominal),
          metode: "QRIS",
        }
      );

      navigate("/konfirmasipembayaran", {
        state: {
          nominal: Number(nominal),
          metode: "QRIS",
          id: res.data.id_transaksi,
          waktu: new Date().toLocaleString("id-ID"),
          jenis: "Pembayaran QRIS",
          saldoAwal: saldo,
          saldoAkhir: res.data.saldo,
        },
      });
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Pembayaran gagal");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      <div className="bg-[#0D6B73] text-white px-6 py-4 flex items-center gap-4 shadow">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl"
        >
          ←
        </button>

        <h1 className="text-2xl font-semibold">
          Detail Pembayaran
        </h1>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-5">

        <div className="text-center mb-10">

          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto text-4xl">
            ✅
          </div>

          <h2 className="text-4xl font-bold mt-5">
            QR Berhasil Dipindai
          </h2>

          <p className="text-gray-500 mt-2">
            Masukkan nominal pembayaran
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border p-6">

          <h3 className="text-2xl font-bold text-[#0D6B73] mb-5">
            Nominal Pembayaran
          </h3>

          <input
            type="number"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
            placeholder="Masukkan nominal pembayaran"
            className="w-full border rounded-2xl p-4 text-xl outline-none"
          />

        </div>

        <div className="bg-white rounded-3xl shadow-sm border p-6 mt-6 flex justify-between">

          <span className="font-semibold text-xl">
            Saldo Anda
          </span>

          <span className="text-2xl font-bold text-[#0D6B73]">
            Rp {Number(saldo).toLocaleString("id-ID")}
          </span>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border p-6 mt-6">

          <h3 className="text-2xl font-bold text-[#0D6B73] mb-5">
            Detail Pembayaran
          </h3>

          <div className="flex justify-between mb-4">
            <span>Nominal</span>
            <span>
              Rp {Number(nominal || 0).toLocaleString("id-ID")}
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Biaya Admin</span>
            <span>Rp 0</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total Bayar</span>
            <span className="text-[#0D6B73]">
              Rp {Number(nominal || 0).toLocaleString("id-ID")}
            </span>
          </div>

        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-5 mt-6">

          <p className="text-blue-700 font-semibold">
            Pastikan nominal pembayaran sudah sesuai sebelum melanjutkan transaksi.
          </p>

        </div>

        <button
          onClick={handlePembayaran}
          className="w-full mt-8 bg-[#0D6B73] text-white py-5 rounded-3xl text-xl font-semibold"
        >
          Lanjutkan Pembayaran
        </button>

      </div>

    </div>
  );
}

