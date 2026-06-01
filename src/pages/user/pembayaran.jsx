import { useNavigate } from "react-router-dom";

export default function Pembayaran() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* HEADER */}
      <div className="bg-[#0D6B73] text-white px-6 py-4 flex items-center gap-4 shadow">

        <button
          onClick={() => navigate(-1)}
          className="text-2xl"
        >
          ←
        </button>

        <h1 className="text-2xl font-semibold">
          Pembayaran QRIS
        </h1>

      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto py-10 px-5 text-center">

        {/* ICON */}
        <div className="w-20 h-20 mx-auto rounded-full bg-cyan-50 flex items-center justify-center text-4xl">
          📷
        </div>

        <h2 className="text-3xl font-bold mt-5 text-gray-800">
          Scan QR untuk Membayar
        </h2>

        <p className="text-gray-500 mt-2">
          Arahkan kamera ke kode QR merchant untuk melakukan pembayaran.
        </p>

        {/* QRIS */}
        <div className="inline-block mt-4 bg-cyan-100 text-cyan-700 px-5 py-2 rounded-xl font-semibold">
          QRIS
        </div>

        {/* SCANNER */}
        <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

          <div className="relative mx-auto w-[320px] h-[320px] bg-black rounded-3xl overflow-hidden">

            {/* Corner */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-cyan-400"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-cyan-400"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-cyan-400"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-cyan-400"></div>

            {/* Dummy QR */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white p-3 rounded-lg">

                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=MERCHANT"
                  alt="QR Merchant"
                />

              </div>

            </div>

            {/* Scan Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan-400 animate-pulse"></div>

          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/detail-pembayaran")}
          className="mt-8 bg-[#0D6B73] text-white px-10 py-4 rounded-2xl font-semibold hover:opacity-90"
        >
          Detail Pembayaran
        </button>

      </div>

    </div>
  );
}

