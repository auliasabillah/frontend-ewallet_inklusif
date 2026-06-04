import { useState } from "react";
import { useNavigate } from "react-router-dom";
import debitKredit from "../../../assets/isisaldo/paypal.png";

function DebitKredit() {
    const navigate = useNavigate();
    const [nomorKartu, setNomorKartu] = useState("");
    const [nominal, setNominal] = useState("");

    return (
        <div className="w-screen h-screen overflow-hidden bg-[#f4f4f4]">
            <div className="w-full h-16 bg-[#126B7D] flex items-center px-6 gap-4 text-white">
                <span onClick={() => navigate("/isisaldo")} className="text-xl cursor-pointer">⬅︎</span>
                <h1 className="text-lg font-medium">Isi Saldo</h1>
            </div>

            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-3xl shadow-lg p-10">
                <h2 className="text-2xl font-bold text-center mb-8">Detail Pembayaran</h2>

                <div className="flex items-center gap-3 mb-8 pb-6 mt-10 border-b border-gray-100">
                    <img src={debitKredit} className="w-8 h-8 object-contain" />
                    <div>
                        <p className="block text-xl font-medium">Metode Pembayaran</p>
                        <p className="text-lg font-semibold text-gray-700">Kredit / Debit</p>
                    </div>
                </div>

                <div>
                    <div>
                        <label className="block text-lg font-medium text-gray-600 mb-2">Nomor Kartu</label>
                        <input type="number" value={nomorKartu} onChange={(e) => setNomorKartu(e.target.value)} placeholder="Masukkan nomor kartu" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 text-base outline-none focus:border-[#126B7D] focus:bg-white focus:ring-2 focus:ring-[#126B7D]/10 transition-all"/>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-600 mb-2 mt-4">Nominal Top-Up</label>
                        <input type="number" value={nominal} onChange={(e) => setNominal(e.target.value)} placeholder="Rp 0" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 text-base outline-none focus:border-[#126B7D] focus:bg-white focus:ring-2 focus:ring-[#126B7D]/10 transition-all"/>
                    </div>
                    <button onClick={() => navigate("/detailpembayarankartu", { state: { nomorKartu, nominal } })} className="w-full h-12 bg-[#126B7D] hover:opacity-90 active:scale-[0.98] text-white text-base font-bold rounded-2xl transition-all mt-10">Lanjutkan</button>
                </div>
            </div>
        </div>
    );
}

export default DebitKredit;