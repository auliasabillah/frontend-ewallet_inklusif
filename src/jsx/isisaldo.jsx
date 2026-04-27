import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import transferBank from "../assets/isisaldo/shopping.png";
import virtualAcc from "../assets/isisaldo/card.png";
import Minimarket from "../assets/isisaldo/place.png";
import debitKredit from "../assets/isisaldo/paypal.png";

export default function IsiSaldoPage() {
    const navigate = useNavigate();
    const [nominal, setNominal] = useState(0);
    const [selectedMethod, setSelectedMethod] = useState("");
    let adminFee = 0;
    if (nominal > 0) {adminFee = 1000;}
    const totalBayar = nominal + adminFee;
    const quickAmounts = [10000, 15000, 20000, 50000, 100000];
    return (
    <div className="w-full min-h-screen bg-[#ececec]">
        <div className="w-full h-[85px] bg-[#367789] flex items-center px-6">
            <button onClick={() => navigate("/beranda")} className="text-white text-[34px] mr-4">←</button>
            <h1 className="text-white text-[22px] font-medium">Isi Saldo</h1>
        </div>
        <div className="px-8 py-6">
            <h2 className="text-[18px] text-black">Saldo Anda</h2>
            <p className="text-[26px] font-bold text-[#68bb91]">Rp 2.000.000</p>
            <h2 className="text-[18px] text-black mt-6 mb-3">Nominal Top Up</h2>
            <input type="number" value={nominal} onChange={(e) => setNominal(Number(e.target.value))} className="w-full bg-[#367789] text-white text-[24px] font-semibold rounded-[10px] px-6 py-5 outline-none" placeholder="Rp 0"/>
            <div className="grid grid-cols-5 gap-4 mt-4"> 
                {quickAmounts.map((amount) => {
                    return (
                    <button key={amount} onClick={() => setNominal(amount)} className="bg-[#367789] text-white rounded-[8px] py-3 text-[18px]"> Rp {amount.toLocaleString("id-ID")}</button>
                );
                })}
            </div>
            <h2 className="text-[18px] text-black mt-8 mb-3">Metode Pembayaran</h2>
            <div className="flex flex-col gap-3">
                <button onClick={() => setSelectedMethod("bank")} className={`bg-[#5f9ccc] rounded-[10px] px-6 py-4 flex items-center gap-5 ${selectedMethod === "bank" ? "ring-4 ring-white" : ""}`}>
                    <img src={transferBank} alt="Transfer Bank" className="w-[45px] h-[45px] object-contain brightness-0 invert"/>
                    <div className="text-left">
                        <h3 className="text-white text-[20px] font-semibold">Transfer Bank</h3>
                        <p className="text-white text-[14px]">BRI, BNI, BCA, Mandiri, dll</p>
                    </div>
                </button>
                <button onClick={() => setSelectedMethod("va")} className={`bg-[#7772be] rounded-[10px] px-6 py-4 flex items-center gap-5 ${ selectedMethod === "va" ? "ring-4 ring-white" : ""}`}>
                    <img src={virtualAcc} alt="Virtual Account" className="w-[45px] h-[45px] object-contain brightness-0 invert"/>
                    <div className="text-left">
                        <h3 className="text-white text-[20px] font-semibold">Virtual Account</h3>
                        <p className="text-white text-[14px]">Via ATM atau M-Banking</p>
                    </div>
                </button>
                <button onClick={() => setSelectedMethod("market")} className={`bg-[#66ac88] rounded-[10px] px-6 py-4 flex items-center gap-5 ${ selectedMethod === "market" ? "ring-4 ring-white" : ""}`}>
                    <img src={Minimarket} alt="Minimarket" className="w-[45px] h-[45px] object-contain brightness-0 invert"/>
                    <div className="text-left">
                        <h3 className="text-white text-[20px] font-semibold">Minimarket</h3>
                        <p className="text-white text-[14px]">Indomaret, Alfamart</p>
                    </div>
                </button>
                <button onClick={() => setSelectedMethod("card")} className={`bg-[#efb23b] rounded-[10px] px-6 py-4 flex items-center gap-5 ${ selectedMethod === "card" ? "ring-4 ring-white" : ""}`}>
                    <img src={debitKredit} alt="Kartu" className="w-[45px] h-[45px] object-contain brightness-0 invert"/>
                    <div className="text-left">
                        <h3 className="text-white text-[20px] font-semibold"> Kartu Debit/Kredit</h3>
                        <p className="text-white text-[14px]">Visa</p>
                    </div>
                </button>
            </div>
            <div className="bg-[#367789] rounded-[10px] mt-8 px-6 py-5 text-white">
                <div className="flex justify-between text-[18px]">
                    <span>Nominal Top Up</span>
                    <span>Rp {nominal.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-[18px]">
                    <span>Biaya Admin</span>
                    <span>Rp {adminFee.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between mt-4 font-bold text-[26px]">
                    <span>Total Bayar</span>
                    <span>Rp {totalBayar.toLocaleString("id-ID")}</span>
                </div>
            </div>
            <div className="flex justify-end mt-8">
                <button className="bg-[#367789] text-white text-[22px] px-10 py-3 rounded-[8px]">Bayar →</button>
            </div>
        </div>
    </div>
  );
}