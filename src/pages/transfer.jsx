import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Transfer() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    bank: "BCA - Bank Central Asia",
    rekening: "",
    nama: "",
    nominal: "",
    catatan: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    navigate("/konfirmasi-transfer", {
      state: form,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-[#1F6F78] text-white p-4 flex items-center gap-3">
        <span onClick={() => navigate(-1)} className="cursor-pointer text-xl">←</span>
        <h1 className="font-semibold">Transfer</h1>
      </div>

      <div className="p-6 max-w-3xl mx-auto space-y-5">

        {/* SALDO */}
        <div className="bg-[#1F6F78] text-white rounded-xl p-4">
          <p className="text-sm">Saldo Anda</p>
          <p className="text-xl font-bold text-green-300">Rp 2.000.000</p>
        </div>

        {/* FORM */}
        <div className="bg-white p-5 rounded-xl shadow space-y-4">

          <div>
            <label className="text-sm">Bank Tujuan</label>
            <input
              name="bank"
              value={form.bank}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="text-sm">Nomor Rekening</label>
            <input
              name="rekening"
              value={form.rekening}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="text-sm">Nama Penerima</label>
            <input
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="text-sm">Nominal Transfer</label>
            <input
              name="nominal"
              value={form.nominal}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="text-sm">Catatan</label>
            <input
              name="catatan"
              value={form.catatan}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#1F6F78] text-white py-3 rounded-xl"
          >
            Lanjutkan
          </button>

        </div>

      </div>
    </div>
  );
}