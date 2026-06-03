import { useState, useEffect } from "react";
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
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState("");

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [saldo, setSaldo] = useState(0);
  useEffect(() => {
  axios
    .get(`http://127.0.0.1:8000/api/saldo/${user?.id}`)
    .then((res) => setSaldo(res.data.saldo))
    .catch((err) => console.log(err));
  }, []);

  return (

    <div className="min-h-screen bg-[#f5f7fb]">

    <div className="bg-[#126B7D] text-white p-4 flex items-center gap-3">
      <button
        onClick={() => navigate(-1)}
        className="text-2xl"
      >
       ←
      </button>

      <h1 className="font-semibold text-xl">
        Transfer Bank
      </h1>
    </div>

    <div className="min-h-screen bg-[#f5f7fb] px-8 py-10">

      <div className="max-w-3xl mx-auto">

      
        {/* ================= RIGHT ================= */}
        <div className="bg-white rounded-[36px] p-8 shadow-sm border border-gray-100 space-y-6">

          <div className="flex items-center justify-between">

            <div>

              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 mb-6">
                <p className="text-gray-500 text-sm">
                    Saldo Anda
                </p>

                 <h2 className="text-3xl font-bold text-[#126B7D]">
                     Rp {Number(saldo).toLocaleString("id-ID")}
                  </h2>
                </div>

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
                type="text"
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
          <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-4">

          <p className="text-yellow-700 text-sm">

            ⚠️ Pastikan nomor rekening dan nama penerima sudah benar.
            Transfer yang berhasil tidak dapat dibatalkan.

          </p>

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

              <div className="flex justify-between">

                <span className="text-gray-500">
                Saldo Saat Ini
              </span>

                <span className="font-semibold">
                  Rp {Number(saldo).toLocaleString("id-ID")}
                </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
                Sisa Saldo
            </span>

            <span className="font-semibold text-red-500">
              Rp {(saldo - (Number(nominal || 0) + 2500)).toLocaleString("id-ID")}
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

                  if (!rekening || !nama || !nominal) {
                    alert("Lengkapi semua data transfer");
                    return;
                  }

                  if (nominal <= 0) {
                    alert("Nominal harus lebih dari 0");
                    return;
                  }

                  if (rekening.length < 8) {
                    alert("Nomor rekening terlalu pendek");
                    return;
                  }
                  
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
                    setShowPin(true);

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

              {/* ================= MODAL PIN ================= */}
  {showPin && (

  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-3xl p-8 w-[420px] shadow-xl">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          Masukkan PIN
        </h2>

        <button
          onClick={() => setShowPin(false)}
          className="text-gray-500 text-xl"
        >
          ✕
        </button>

      </div>

      <p className="text-gray-500 mt-3 text-center">
        Masukkan PIN Anda untuk melanjutkan transfer
      </p>

      <input
        type="password"
        maxLength="6"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="******"
        className="w-full border rounded-2xl p-4 mt-6 text-center text-2xl tracking-[10px]"
      />

      <p className="text-center text-[#126B7D] mt-4 cursor-pointer">
        Lupa PIN?
      </p>

      <div className="grid grid-cols-2 gap-3 mt-6">

        <button
          onClick={() => setShowPin(false)}
          className="border rounded-2xl py-3"
        >
          Batal
        </button>

        <button
          onClick={() => {

            if(pin.length !== 6){
              alert("PIN harus 6 digit");
              return;
            }

            setShowPin(false);
            setSuccess(true);

          }}
          className="bg-[#126B7D] text-white rounded-2xl py-3"
        >
          Konfirmasi
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

      </div>

    );
  }