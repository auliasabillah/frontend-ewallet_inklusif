import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Transfer() {
  const [selectedBank, setSelectedBank] = useState({
    nama: "BCA",
    warna: "from-blue-600 via-sky-500 to-cyan-400",
    logo: "🏦",
  });
  const [showBank, setShowBank] = useState(false);
  const [rekening, setRekening] = useState("");
  const [nama, setNama] = useState("");
  const [nominal, setNominal] = useState("");
  const [catatan, setCatatan] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  return (

    <div className="min-h-screen bg-[#f5f7fb] px-8 py-10">

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">

        {/* ================= LEFT ================= */}
        <div className="space-y-6">

          {/* HEADER */}
          <div className="flex items-center justify-between">

            <div>

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/beranda")}
            className="mb-4 flex items-center gap-2 text-gray-600 hover:text-[#1F6F78] transition-all"
  >

          <div className="w-10 h-10 rounded-2xl bg-white shadow flex items-center justify-center text-lg">
              ←
          </div>

          <span className="font-medium">
            Kembali
          </span>

          </button>

          <p className="text-sm text-gray-500">
            Transfer Bank
          </p>

        <h1 className="text-4xl font-bold text-gray-800 mt-1">
            Kirim Uang
          </h1>

        </div>

            <div className="w-14 h-14 rounded-3xl bg-white shadow flex items-center justify-center text-2xl">
              💸
            </div>

          </div>

          {/* CARD */}
          <div
            className={`bg-gradient-to-br ${selectedBank.warna} rounded-[36px] p-7 text-white shadow-2xl relative overflow-hidden transition-all duration-500`}
          >

            <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/10 rounded-full"></div>

            <div className="relative z-10">

              <div className="flex justify-between items-start">

                <div>

                  <p className="text-xs opacity-80 tracking-widest uppercase">
                    Transfer Bank
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    {selectedBank.nama}
                  </h2>

                </div>

                <div className="w-20 h-20 rounded-[28px] bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl shadow-lg">
                  {selectedBank.logo}
                </div>

              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-[30px] p-6 mt-8 border border-white/10 space-y-6">

                <div>

                  <p className="text-sm opacity-80">
                    Nomor Rekening
                  </p>

                  <h3 className="text-3xl font-bold mt-2 tracking-[4px]">
                    {rekening || "•••• •••• ••••"}
                  </h3>

                </div>

                <div>

                  <p className="text-sm opacity-80">
                    Nama Penerima
                  </p>

                  <p className="font-semibold text-2xl mt-1">
                    {nama || "-"}
                  </p>

                </div>

                <div className="flex justify-between items-center">

                  <span className="opacity-80 text-lg">
                    Nominal
                  </span>

                  <span className="font-bold text-2xl">
                    {nominal
                      ? `Rp ${Number(nominal).toLocaleString("id-ID")}`
                      : "-"}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-white rounded-[36px] p-8 shadow-sm border border-gray-100 space-y-6 h-fit">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-bold text-3xl text-gray-800">
                Data Transfer
              </h3>

              <p className="text-gray-500 mt-1">
                Lengkapi data penerima transfer
              </p>

            </div>

            <div className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              Aman
            </div>

          </div>

          {/* PILIH BANK */}
          <div className="relative">

            <p className="text-sm text-gray-500 mb-3">
              Pilih Bank
            </p>

            <button
              onClick={() => setShowBank(!showBank)}
              className="w-full bg-gray-50 border border-gray-200 rounded-3xl px-5 py-5 flex items-center justify-between hover:border-[#1F6F78] transition-all"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center text-3xl">
                  {selectedBank.logo}
                </div>

                <div className="text-left">

                  <p className="font-semibold text-lg text-gray-800">
                    {selectedBank.nama}
                  </p>

                  <p className="text-sm text-gray-500">
                    Transfer Bank
                  </p>

                </div>

              </div>

              <span className="text-gray-500 text-xl">
                ▼
              </span>

            </button>

            {/* LIST BANK */}
            {showBank && (

              <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[30px] border shadow-2xl overflow-hidden z-50">

                {[
                  {
                    nama: "BCA",
                    warna: "from-blue-600 via-sky-500 to-cyan-400",
                    logo: "🏦",
                  },
                  {
                    nama: "BNI",
                    warna: "from-orange-500 via-amber-400 to-yellow-300",
                    logo: "🟠",
                  },
                  {
                    nama: "BRI",
                    warna: "from-blue-700 via-indigo-500 to-indigo-400",
                    logo: "🔵",
                  },
                  {
                    nama: "Mandiri",
                    warna: "from-yellow-400 via-orange-400 to-amber-300",
                    logo: "🟡",
                  },
                ].map((bank, index) => (

                  <button
                    key={index}
                    onClick={() => {
                      setSelectedBank(bank);
                      setShowBank(false);
                    }}
                    className="w-full p-5 flex items-center gap-4 hover:bg-gray-50 transition-all"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl">
                      {bank.logo}
                    </div>

                    <div className="text-left">

                      <p className="font-semibold text-lg">
                        {bank.nama}
                      </p>

                      <p className="text-sm text-gray-500">
                        Transfer Bank
                      </p>

                    </div>

                  </button>

                ))}

              </div>

            )}

          </div>

          {/* INPUT */}
          <div className="space-y-5">

            <div>

              <p className="text-sm text-gray-500 mb-2">
                Nomor Rekening
              </p>

              <input
                type="text"
                placeholder="Masukkan nomor rekening"
                value={rekening}
                onChange={(e) => setRekening(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-3xl p-5 outline-none focus:border-[#1F6F78] transition-all text-lg"
              />

            </div>

            <div>

              <p className="text-sm text-gray-500 mb-2">
                Nama Penerima
              </p>

              <input
                type="text"
                placeholder="Masukkan nama penerima"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-3xl p-5 outline-none focus:border-[#1F6F78] transition-all text-lg"
              />

            </div>

            <div>

              <p className="text-sm text-gray-500 mb-2">
                Nominal Transfer
              </p>

              <input
                type="number"
                placeholder="Masukkan nominal transfer"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-3xl p-5 outline-none focus:border-[#1F6F78] transition-all text-lg"
              />

            </div>

            <div>

              <p className="text-sm text-gray-500 mb-2">
                Catatan Transfer
              </p>

              <textarea
                placeholder="Tambahkan catatan..."
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-3xl p-5 outline-none focus:border-[#1F6F78] transition-all min-h-[120px] resize-none"
              />

            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={() => setShowConfirm(true)}
            className="w-full bg-[#1F6F78] text-white py-5 rounded-3xl font-semibold text-xl shadow-lg hover:scale-[1.01] transition-all"
          >

            Lanjutkan Transfer

          </button>

        </div>

      </div>

      {/* ================= MODAL KONFIRMASI ================= */}
      {showConfirm && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-[36px] p-8 w-full max-w-xl shadow-2xl">

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="text-sm text-gray-500">
                  Konfirmasi Transfer
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-1">
                  Detail Transfer
                </h2>

              </div>

              <button
                onClick={() => setShowConfirm(false)}
                className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 transition"
              >
                ✕
              </button>

            </div>

            <div className="space-y-5">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Bank
                </span>

                <span className="font-semibold">
                  {selectedBank.nama}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Rekening
                </span>

                <span className="font-semibold">
                  {rekening}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Penerima
                </span>

                <span className="font-semibold">
                  {nama}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Nominal
                </span>

                <span className="font-bold text-xl">
                  Rp {Number(nominal || 0).toLocaleString("id-ID")}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Biaya Admin
                </span>

                <span className="font-semibold">
                  Rp 2.500
                </span>

              </div>

              <div className="border-t pt-5 flex justify-between">

                <span className="font-bold text-lg">
                  Total
                </span>

                <span className="font-bold text-2xl text-[#1F6F78]">
                  Rp {(Number(nominal || 0) + 2500).toLocaleString("id-ID")}
                </span>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <button
                onClick={() => setShowConfirm(false)}
                className="py-5 rounded-3xl border font-semibold text-lg hover:bg-gray-50 transition-all"
              >
                Batal
              </button>

              <button
                onClick={async () => {
                  try {
                    const response = await axios.post("http://127.0.0.1:8000/api/transfer", {
                      user_id: user?.id,
                      nominal: nominal,
                      nama_penerima: nama,
                      bank: selectedBank.nama,
                      rekening: rekening,
                      catatan: catatan,
                    });
                    setShowConfirm(false);
                    setSuccess(true);
                  } catch (error) {
                    alert(error.response?.data?.message || "Transfer gagal");
                    setShowConfirm(false);
                  }
                }}
                className="bg-[#1F6F78] text-white py-5 rounded-3xl font-semibold text-lg shadow-lg hover:scale-[1.01] transition-all"
              >

                Transfer Sekarang

              </button>

            </div>

          </div>

        </div>

      )}

      {/* ================= SUCCESS ================= */}
      {success && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-[40px] p-10 w-full max-w-lg shadow-2xl text-center">

            <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center text-6xl mx-auto">
              ✅
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mt-8">
              Transfer Berhasil
            </h1>

            <p className="text-gray-500 mt-3 text-lg leading-relaxed">
              Transfer ke {nama || "Penerima"} berhasil diproses.
            </p>

            <div className="bg-gray-50 rounded-[30px] p-6 mt-8 text-left space-y-4">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Bank
                </span>

                <span className="font-semibold">
                  {selectedBank.nama}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Rekening
                </span>

                <span className="font-semibold">
                  {rekening}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Total Transfer
                </span>

                <span className="font-bold text-[#1F6F78] text-xl">
                  Rp {(Number(nominal || 0) + 2500).toLocaleString("id-ID")}
                </span>

              </div>

            </div>

            <button
              onClick={() => {
                setSuccess(false);
                navigate("/beranda");
            }}
              className="w-full mt-8 bg-[#1F6F78] text-white py-5 rounded-3xl font-semibold text-lg shadow-lg hover:scale-[1.01] transition-all"
>

              Kembali ke Beranda

                </button>
          </div>

        </div>

      )}

    </div>

  );
}