import { useNavigate } from "react-router-dom";
import { useState } from "react";
import indomaretLogo from "../assets/isisaldo/Indomaret.png";

function IsiSaldoMinimarket() {
    const navigate = useNavigate();
    const [nominal, setNominal] = useState("");
    const formatRupiah = (angka) => {
        if (!angka) return "Rp 0";
        return "Rp " + Number(angka).toLocaleString("id-ID");
    };

    return (
    <div className="min-h-screen bg-white">
        <div className="bg-[#126B7D] text-white px-6 py-4 flex items-center gap-3">
            <span onClick={() => navigate("/beranda")} className="text-2xl cursor-pointer">⬅︎</span>
            <h1 className="text-xl font-medium">Isi Saldo</h1>
        </div>
        <div className="px-8 py-6">
            <h2 className="text-2xl mb-3">Metode Pembayaran</h2>
            <div className="flex items-center gap-3 mb-6">
                <img src={indomaretLogo} className="w-12 h-12 object-contain" />
                <span className="text-xl">Indomaret</span>
            </div>
            <h2 className="text-2xl mb-3">Nominal Top Up</h2>
            <input type="number" value={nominal} onChange={(e) => setNominal(e.target.value)} className="w-full h-[70px] bg-[#126B7D] text-white text-3xl px-6 rounded-lg mb-4 outline-none" placeholder="Rp 0"/>
            <div className="flex justify-between gap-4 mb-8">
                {[10000, 15000, 20000, 50000, 100000].map((item, i) => (
                <button key={i} onClick={() => setNominal(item)} className="flex-1 bg-[#126B7D] text-white py-3 rounded-lg text-lg">{formatRupiah(item)}</button>
                ))}
            </div>
            <div className="bg-[#126B7D] text-white p-6 rounded-lg mb-8 min-h-[180px] mt-20 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between mb-2 text-lg">
                        <span>Nominal Top Up</span>
                        <span>{formatRupiah(nominal)}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Biaya Admin</span>
                        <span>{formatRupiah(0)}</span>
                    </div>
                </div>
                <div className="flex justify-between text-2xl font-semibold mt-6">
                    <span>Total Bayar</span>
                    <span>{formatRupiah(nominal)}</span>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-[#126B7D] text-white px-12 py-3 rounded-lg text-xl">Bayar →</button>
            </div>
        </div>
    </div>
);
}

export default IsiSaldoMinimarket;