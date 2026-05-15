import { useNavigate } from "react-router-dom";

import virtualAcc from "../assets/isisaldo/card.png";
import Minimarket from "../assets/isisaldo/place.png";
import debitKredit from "../assets/isisaldo/paypal.png";
import alfamartLogo from "../assets/isisaldo/Alfamart.png";
import indomaretLogo from "../assets/isisaldo/Indomaret.png";
import bcaLogo from "../assets/isisaldo/BCA.png";
import briLogo from "../assets/isisaldo/BRI.png";
import bniLogo from "../assets/isisaldo/BNI.png";
import mandiriLogo from "../assets/isisaldo/Mandiri.png";
import tokoLogo from "../assets/isisaldo/tokoTerdekat.png";

function IsiSaldo() {
    const navigate = useNavigate();
    
    return (
    <div className="min-h-screen bg-white">
        <div className="bg-[#126B7D] text-white p-4 flex items-center gap-3">
            <span onClick={() => navigate("/beranda")} className="text-xl cursor-pointer">⬅︎</span>
            <h1 className="text-lg">Isi Saldo</h1>
        </div>
        <div className="p-6">
            <h2 className="text-2xl mb-4">Metode Pembayaran</h2>
            <div className="bg-[#5C8FB6] rounded-xl overflow-hidden mb-3 shadow">
                <div className="flex items-center gap-4 p-4 bg-[#3FA0D7] text-white text-lg font-semibold">
                    <img src={virtualAcc} className="w-8 filter brightness-0 invert" />Virtual Account</div>
                    <div className="bg-[#2b85b6] text-white">
                        <div className="flex items-center justify-between pl-14 px-4 py-3 border-b border-white/30">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-1 rounded-md">
                                <img src={briLogo} className="w-6 h-6 object-contain" />
                            </div>
                            <span>BRI</span>
                        </div>
                        <span onClick={() => navigate("/isisaldobank", {state: {bank:"bri"}})} className="text-xl mr-14 cursor-pointer">＞</span>
                    </div>
                    <div className="flex items-center justify-between pl-14 px-4 py-3 border-b border-white/30">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-1 rounded-md">
                            <img src={bniLogo} className="w-6 h-6 object-contain" />
                        </div>
                        <span>BNI</span>
                    </div>
                    <span onClick={() => navigate("/isisaldobank", {state: {bank:"bni"}})} className="text-xl mr-14 cursor-pointer">＞</span>
                </div> 
                <div className="flex items-center justify-between pl-14 px-4 py-3 border-b border-white/30">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-1 rounded-md">
                        <img src={bcaLogo} className="w-6 h-6 object-contain" />
                    </div>
                    <span>BCA</span>
                </div>
                <span onClick={() => navigate("/isisaldobank", {state: {bank:"bca"}})} className="text-xl mr-14 cursor-pointer">＞</span>
            </div>
            <div className="flex items-center justify-between pl-14 px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="bg-white p-1 rounded-md">
                        <img src={mandiriLogo} className="w-6 h-6 object-contain" />
                    </div>
                    <span>Mandiri</span>
                </div>
                <span onClick={() => navigate("/isisaldobank", {state: {bank:"mandiri"}})} className="text-xl mr-14 cursor-pointer">＞</span>
            </div>
        </div>
    </div>
    <div className="bg-[#46A784] rounded-xl overflow-hidden mb-3 shadow">
        <div className="flex items-center gap-4 p-4 text-white text-lg font-semibold">
            <img src={Minimarket} className="w-8 filter brightness-0 invert" />Minimarket</div>
            <div className="bg-[#358E6E] text-white">
                <div className="flex items-center justify-between pl-14 px-4 py-3 border-b border-white/30">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-1 rounded-md">
                            <img src={indomaretLogo} className="w-6 h-6 object-contain" />
                        </div>
                        <span>Indomaret</span>
                    </div>
                    <span onClick={() => navigate("/isisaldominimarket", {state: {minimarket:"indomaret"}})} className="text-xl mr-14 cursor-pointer">＞</span>
                </div>
                <div className="flex items-center justify-between pl-14 px-4 py-3 border-b border-white/30">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-1 rounded-md">
                            <img src={alfamartLogo} className="w-6 h-6 object-contain" />
                        </div>
                        <span>Alfamart</span>
                    </div>
                <span onClick={() => navigate("/isisaldominimarket", {state: {minimarket:"alfamart"}})} className="text-xl mr-14 cursor-pointer">＞</span>
            </div>
            <div className="flex items-center justify-between pl-14 px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="bg-white p-1 rounded-md">
                        <img src={tokoLogo} className="w-6 h-6 object-contain" />
                    </div>
                    <span>Toko Terdekat</span>
                </div>
                <span onClick={() => navigate("/isisaldominimarket", {state: {minimarket:"tokoterdekat"}})} className="text-xl mr-14 cursor-pointer">＞</span>
            </div>
        </div>
    </div>
    <div className="bg-[#FFAD00] rounded-xl p-4 flex items-center justify-between text-white shadow">
        <div className="flex items-center gap-4 text-lg font-semibold">
            <img src={debitKredit} className="w-8 filter brightness-0 invert" />Kartu Debit/Kredit</div>
            <span onClick={() => navigate("/isisaldokartu")} className="text-xl mr-14 cursor-pointer">＞</span>
        </div>
    </div>
    </div>
  );
}

export default IsiSaldo;