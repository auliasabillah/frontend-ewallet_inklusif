import { useNavigate, useLocation} from "react-router-dom";

function KonfirmasiPembayaran() {
    const navigate = useNavigate();
    const location = useLocation();
    const nominal = location.state?.nominal;
    const metode = location.state?.metode;
    const id_transaksi = location.state?.id_transaksi;
    const waktu = location.state?.waktu;

    return (
        <div className="w-screen h-screen bg-white overflow-hidden flex flex-col">
            <div className="w-full h-[56px] bg-[#126B7D] flex-none"></div>
            <div className="flex-1 flex flex-col items-center">
                <div className="mt-[46px] text-[#52B34D] text-[78px] leading-none">✓</div>
                <h1 className="text-[36px] font-bold text-black mt-6">Isi Saldo Berhasil!</h1>
                <div className="mt-4 mb-6 w-[280px] h-[68px] bg-[#D9E8D3] border border-[#3D7D8E] rounded-[24px] flex flex-col justify-center items-center px-8 py-5">
                    <p className="text-[18px] text-[#1F1F1F]">Nominal Top Up</p>
                    <h2 className="pb-2 text-[28px] font-bold text-[#457A2D] leading-none">Rp {Number(nominal).toLocaleString('id-ID')}</h2>
                </div>
                <div className="mt-4 w-[1080px] bg-white border border-[#B8B8B8] rounded-[18px] px-[55px] py-[22px]">
                    <div className="flex justify-between items-center text-[20px] text-[#2A2A2A] py-1.5">
                        <p>Metode Pembayaran</p>
                        <p>{metode}</p>
                    </div>
                    <div className="border-b border-[#8A8A8A] mt-2 mb-3"></div>
                    <div className="flex justify-between items-center text-[20px] text-[#2A2A2A]">
                        <p>ID Transaksi</p>
                        <p>TTRX{id_transaksi}</p>
                    </div>
                    <div className="border-b border-[#8A8A8A] mt-2 mb-3"></div>
                    <div className="flex justify-between items-center text-[20px] text-[#2A2A2A] py-1.5">
                        <p>Waktu Transaksi</p>
                        <p>{waktu}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-10">
                    <button onClick={() => navigate("/beranda")} className="w-[390px] h-[50px] bg-[#2F6F80] text-white text-[20px] font-semibold rounded-[10px]">Kembali Ke Beranda</button>
                    <button onClick={() => navigate("/riwayat")} className="w-[390px] h-[50px] border border-[#C9C9C9] bg-white text-[#2F6F80] text-[20px] font-semibold rounded-[10px]">Lihat Riwayat Transaksi</button>
                </div>
            </div>
        </div>
    );
}

export default KonfirmasiPembayaran;