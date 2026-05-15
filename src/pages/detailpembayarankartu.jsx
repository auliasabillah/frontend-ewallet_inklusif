import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function DetailPembayaran() {
    const navigate = useNavigate();
    const [pin, setPin] = useState(["", "", "", "", ""]);
    const handlePinChange = (value, index) => {
        if (value.length > 1) return;
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);
    };
    const location = useLocation();
    const nomorKartu = location.state?.nomorKartu;
    const nominal = location.state?.nominal;
    const bank= location.state?.bank;
        const bankData = {
            BRI: { nama: "BRI - Bank Rakyar Indonesia"},
            BNI: { nama: "BNI - Bank Negara Indonesia"},
            BCA: { nama: "BCA - Bank Central Asia"},
            Mandiri: { nama: "Mandiri"},
        };
        const data = bankData[bank];

    return (
        <div className="w-screen h-screen bg-[#fbfbfb] flex flex-col overflow-hidden">
            <div className="bg-[#126B7D] h-[75px] flex items-center px-8 flex-shrink-0">
                <span onClick={() => navigate(-1)} className="text-white text-3xl cursor-pointer">⬅︎</span>
                <h1 className="text-white text-2xl font-semibold ml-6">Detail Pembayaran</h1>
            </div>
            <div className="flex-1 px-8 py-6  overflow-hidden flex flex-col gap-4">
                <div className="border border-gray-400 rounded-2xl bg-white p-4 flex-1 overflow-hidden">
                    <h2 className="text-xl font-bold">Periksa Detail Pembayaran</h2>
                    <p className="text-base text-gray-700 mt-1">Pastikan semua informasi sudah benar sebelum melanjutkan</p>
                    <div className="border border-gray-400 rounded-2xl w-[85%] mx-auto mt-8 p-4">
                        <h3 className="text-xl font-bold mb-4">Detail Transfer</h3>
                        <div className="flex justify-between text-base">
                            <div className="space-y-3">
                                <p>Bank</p>
                                <p>Nomor Rekening</p>
                            </div>
                            <div className="space-y-3 text-right">
                                <p>{data?.nama}</p>
                                <p className="font-bold">{nomorKartu}</p>
                            </div>
                        </div>
                        <div className="border-b border-gray-400 my-4"></div>
                        <div className="flex justify-between text-base mb-3">
                            <p>Nominal Pembayaran</p>
                            <p className="text-[#126B7D] font-bold">Rp {Number(nominal).toLocaleString("id-ID")}</p>
                        </div>
                        <div className="flex justify-between text-base">
                            <p>Biaya Admin</p>
                            <p>Rp 2.500</p>
                        </div>
                        <div className="border-b border-gray-400 my-4"></div>
                        <div className="flex justify-between text-base">
                            <p>Total</p>
                            <p className="text-[#126B7D] font-bold">Rp {(Number(nominal) + 2500).toLocaleString("id-ID")}</p>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-400 rounded-2xl bg-white p-4 w-[70%] mx-auto flex-shrink-0">
                    <h2 className="text-xl font-bold mb-4">Masukkan PIN Anda</h2>
                    <div className="flex justify-center gap-4 mb-4">
                        {pin.map((item, index) => (
                            <input key={index} type="password" maxLength="1" value={item} onChange={(e) =>
                                    handlePinChange(e.target.value, index)
                                }className="w-[50px] h-[50px] border border-gray-400 rounded-xl text-center text-xl outline-none"/>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => navigate("/konfirmasikartudebit", {state: {bank: data?.nama, nomorKartu, nominal}})} className="bg-[#126B7D] text-white text-lg font-semibold px-10 py-2 rounded-lg">Konfirmasi</button>
                </div>
            </div>
        </div>
    );
}

export default DetailPembayaran;