import { useState } from "react";
import { useNavigate } from "react-router-dom";
import debitKredit from "../assets/isisaldo/paypal.png";

function DebitKredit() {
    const navigate = useNavigate();
    const [bank, setBank] = useState("");
    const [nomorKartu, setNomorKartu] = useState("");
    const [nominal, setNominal] = useState("");

    return (
        <div className="w-screen h-screen overflow-hidden bg-white">
            <div className="w-full h-20 bg-[#126B7D] flex items-center px-6 gap-4 text-white">
                <span onClick={() => navigate("/isisaldo")}className="text-2xl cursor-pointer">⬅︎</span>
                <h1 className="text-2xl font-light">Isi Saldo</h1>
            </div>
            <div className="w-full px-12 pt-6">
                <h2 className="text-2xl mb-3">Metode Pembayaran</h2>
                <div className="flex items-center gap-4 mb-6">
                    <img src={debitKredit} className="w-8 h-8 object-contain"/>
                    <span className="text-2xl">Kredit/Debit</span>
                </div>
                <div className="w-full border border-gray-400 rounded-2xl p-6 mt-12 bg-white">
                    <div className="mb-6">
                        <p className="text-xl font-semibold mb-3">Nama Bank</p>
                        <select value={bank} onChange={(e) => setBank(e.target.value)} className="w-full h-14 border border-gray-400 rounded-xl px-5 text-xl outline-none bg-white cursor-pointer">
                            <option value="BRI">BRI</option>
                            <option value="BNI">BNI</option>
                            <option value="BCA">BCA</option>
                            <option value="Mandiri">Mandiri</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <p className="text-xl font-semibold mb-3">Nomor Kartu</p>
                        <input type="number" value={nomorKartu} onChange={(e) => setNomorKartu(e.target.value)} placeholder="Masukkan nomor kartu" className="w-full h-14 border border-gray-400 rounded-xl px-5 text-xl outline-none"/>
                    </div>
                    <div>
                        <p className="text-xl font-semibold mb-3">Nominal Pembayaran</p>
                        <input type="number" value={nominal} onChange={(e) => setNominal(e.target.value)} placeholder="Rp 0" className="w-full h-14 border border-gray-400 rounded-xl px-5 text-xl"/>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button onClick={() => navigate("/detailpembayarankartu")} className="w-[280px] h-14 bg-[#126B7D] text-white text-xl rounded-xl">Lanjutkan</button>
                </div>
            </div>
        </div>
    );
}

export default DebitKredit;