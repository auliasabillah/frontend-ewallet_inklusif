import { useLocation, useNavigate } from "react-router-dom";

export default function PembayaranDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const nominal = location.state?.nominal || 200000;
  const metode = location.state?.metode || "ATM Transfer";

  const handleBayar = () => {
    navigate("/konfirmasipembayaran", {
      state: {
        nominal: nominal,
        metode: metode,
        id: "TRX" + Date.now(),
        waktu: new Date().toLocaleString("id-ID"),
        jenis: "Top Up Saldo",
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-[#1F6F78] text-white p-4 flex items-center gap-3">
        <span onClick={() => navigate(-1)} className="cursor-pointer text-xl">
          ←
        </span>
        <h1 className="font-semibold">Pembayaran</h1>
      </div>

      <div className="p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            <div>
              <h2 className="text-lg font-semibold">Detail Transfer Uang</h2>
              <p className="text-sm text-gray-500">
                Periksa kembali informasi transaksi sebelum melanjutkan
              </p>
            </div>

            <div className="bg-white rounded-2xl border p-5 shadow-sm">
              <p className="text-[#1F6F78] font-semibold mb-4">
                Ringkasan Pembayaran
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Jenis Transaksi</span>
                  <span>Top Up Saldo</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Nominal</span>
                  <span className="text-[#1F6F78] font-semibold">
                    Rp {nominal.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Metode</span>
                  <span>{metode}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Biaya Admin</span>
                  <span>Rp 2.500</span>
                </div>

                <hr />

                <div className="flex justify-between font-semibold">
                  <span>Total Pembayaran</span>
                  <span className="text-[#1F6F78]">
                    Rp {(nominal + 2500).toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border p-5 shadow-sm">
              <p className="font-semibold mb-3">Metode Pembayaran</p>

              <div className="border rounded-xl p-4 flex items-center gap-3 bg-gray-50">
                <input type="radio" checked readOnly className="accent-[#1F6F78]" />

                <div className="flex items-center gap-3">
                  <div className="text-xl">🏦</div>
                  <div>
                    <p className="font-semibold">{metode}</p>
                    <p className="text-sm text-gray-500">
                      Manual transfer dari bank manapun
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 text-blue-700 p-3 rounded-lg text-sm">
                Setelah transfer, pembayaran akan diverifikasi otomatis
              </div>
            </div>

            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl text-sm font-medium">
              Selesaikan pembayaran dalam{" "}
              <span className="font-bold">23:59:48</span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="w-full border rounded-xl py-3 hover:bg-gray-50"
              >
                Kembali
              </button>

              <button
                onClick={handleBayar}
                className="w-full bg-[#1F6F78] text-white rounded-xl py-3 hover:opacity-90"
              >
                Saya Sudah Transfer
              </button>
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">

              <div className="bg-[#1F6F78] text-white p-4">
                <p className="font-semibold">
                  {metode === "QRIS"
                    ? "Scan QRIS untuk Pembayaran"
                    : "Transfer ke Rekening Berikut"}
                </p>
              </div>

              <div className="p-5 space-y-4 text-sm">

                {metode === "QRIS" ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-40 h-40 bg-gray-300 flex items-center justify-center rounded">
                      QR
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="text-gray-500">Bank Tujuan</p>
                      <p className="font-semibold">BCA</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Nomor Rekening</p>
                      <p className="font-semibold">1234 5678 9012</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Nama</p>
                      <p className="font-semibold">Zefanya Angelica</p>
                    </div>
                  </>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}