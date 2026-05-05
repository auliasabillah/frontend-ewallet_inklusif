import { useNavigate } from "react-router-dom";

function DetailPembayaran() {
    const navigate = useNavigate();
    return (
    <div className="min-h-screen bg-white">
        <div className="bg-[#126B7D] text-white px-6 py-4 flex items-center gap-3">
            <span onClick={() => navigate(-1)} className="text-2xl cursor-pointer">⬅︎</span>
            <h1 className="text-xl">Detail Pembayaran</h1>
        </div>
        <div className="p-8">
            <div className="bg-white border border-gray-400 rounded-xl p-8">
                <h2 className="text-center text-2xl mb-6">Kode Pembayaran</h2><br/>
                <div className="flex justify-center mb-8">
                    <div className="bg-[#BFD3C9] px-16 py-5 text-4xl tracking-widest">AHBFFH AYEG B45</div>
                </div><br/>
                <div className="flex justify-between items-start mb-4">
                    <div className="text-lg">
                        <p>Total yang harus dibayar</p>
                        <p>Batas waktu pembayaran</p>
                    </div>
                    <div className="text-right text-lg">
                        <p className="text-green-500 font-semibold">Rp 100.000</p>
                        <p className="text-red-500 font-semibold">24:55:09</p>
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                <div className="bg-gray-200 p-5 rounded">
                    <p className="mb-3 text-lg">Cara Pembayaran</p>
                    <ol className="text-gray-700 space-y-1 text-sm">
                        <li>1. Pergi ke kasir Indomaret terdekat</li>
                        <li>2. Tunjukkan kode pembayaran ke kasir</li>
                        <li>3. Bayar sejumlah Rp 100.000</li>
                        <li>4. Saldo akan masuk otomatis dalam 1-5 menit setelah kasir konfirmasi</li>
                    </ol>
                </div>
            </div>
            <div className="flex justify-center gap-10 mt-8">
                <button onClick={() => navigate("/isisaldo")} className="bg bg-white border border-black px-16 py-3 rounded-lg text-lg">Batalkan</button>
                <button onClick={() => navigate("/konfirmasipembayaran")} className="bg-[#126B7D] text-white px-16 py-3 rounded-lg text-lg">Sudah bayar</button>
            </div>
        </div>
    </div>
);
}

export default DetailPembayaran;