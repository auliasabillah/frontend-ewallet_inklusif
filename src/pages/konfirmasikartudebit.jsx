import { useNavigate } from "react-router-dom";

function IsiSaldoBerhasil() {

    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen bg-[#fbfbfb] overflow-hidden flex flex-col">
            <div className="w-full h-[78px] bg-[#126B7D] flex items-center px-10 flex-shrink-0">
                <h1 className="text-white text-[27px] font-bold">Isi Saldo Berhasil</h1>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <div className="mt-[60px] text-[#22C55E] text-[72px] leading-none">✓</div>
                <h2 className="text-[46px] font-bold mt-2 text-black">Rp 150.000</h2>
                <div className="w-[1120px] bg-white border border-[#D6D6D6] rounded-2xl mt-[60px] px-[55px] py-[42px] shadow-sm">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-[14px] text-[18px] text-[#333333]">
                            <p>Bank</p>
                            <p>Nomor Rekening</p>
                            <p>Nominal Transfer</p>
                            <p>Biaya Admin</p>
                            <p>Total</p>
                        </div>
                        <div className="flex flex-col gap-[14px] text-right text-[18px] text-[#333333]">
                            <p>BCA - Bank Central Asia</p>
                            <p className="font-semibold tracking-wide">1234 5678 9012 3456</p>
                            <p className="text-[#126B7D] font-bold">Rp 150.000</p>
                            <p>Rp 2.500</p>
                            <p className="text-[#126B7D] font-bold">Rp 152.500</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-[44px]">
                    <button onClick={() => navigate("/beranda")} className="w-[500px] h-[45px] bg-[#126B7D] text-white text-[20px] font-semibold rounded-lg">Kembali Ke Beranda</button>
                </div>
            </div>
        </div>
    );
}

export default IsiSaldoBerhasil;