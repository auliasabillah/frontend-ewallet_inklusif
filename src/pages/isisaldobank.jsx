import { useNavigate, useLocation } from "react-router-dom";
import briLogo from "../assets/isisaldo/BRI.png";
import bniLogo from "../assets/isisaldo/BNI.png";
import bcaLogo from "../assets/isisaldo/BCA.png";
import mandiriLogo from "../assets/isisaldo/Mandiri.png";

function Bank() {
    const navigate = useNavigate();
    const location = useLocation();
    const bank= location.state?.bank;
    const bankData = {
        bri: { nama: "BRI", logo: briLogo, noVA: "88650 0894 9672 983"},
        bni: { nama: "BNI", logo: bniLogo, noVA: "9876 0894 9672 983"},
        bca: { nama: "BCA", logo: bcaLogo, noVA: "52496 0894 9672 983"},
        mandiri: { nama: "Mandiri", logo: mandiriLogo, noVA: "3848 0894 9672 983"},
    };
    const data = bankData[bank];
    
    return (
    <div className="min-h-screen bg-white">
        <div className="bg-[#126B7D] text-white px-5 py-4 flex items-center gap-3">
            <span onClick={() => navigate("/beranda")} className="text-xl cursor-pointer">⬅︎</span>
            <h1 className="text-lg">Isi Saldo</h1>
        </div>
        <div className="p-6">
            <h2 className="text-xl mb-3">Metode Pembayaran</h2>
            <div className="flex items-center gap-3 mb-6">
                <img src={data?.logo} className="w-10 h-10 object-contain" />
                <span className="text-lg">{data?.nama}</span>
            </div>
            <h2 className="text-xl mb-3">Nomor Virtual Account</h2>
            <div className="bg-[#b1e2ff] text-center py-6 rounded">
                <span className="text-2xl tracking-widest">{data?.noVA}</span>
            </div>
            <div className="bg-[#f0f0f0] mt-8 p-5 rounded">
                <p className="text-[#5b5b5b] mb-3">MBANKING</p>
                <ol className="text-sm text-[#5b5b5b] space-y-1">
                    <li>1. Login ke aplikasi mobile banking atau internet banking Anda.</li>
                    <li>2. Pilih menu pembayaran Virtual Account.</li>
                    <li>3. Masukkan nomor Virtual Account yang tersedia.</li>
                    <li>4. Pastikan nominal sesuai.</li>
                    <li>5. Lanjutkan dan konfirmasi transaksi.</li>
                    <li>6. Tunggu hingga saldo berhasil ditambahkan.</li>
                </ol>
            </div>
            <div className="bg-[#f0f0f0] mt-2 p-5 rounded">
                <p className="text-[#5b5b5b] mb-3">ATM</p>
                <ol className="text-sm text-[#5b5b5b] space-y-1">
                    <li>1. Masukkan kartu ATM ke mesin.</li>
                    <li>2. Pilih bahasa dan masukkan PIN.</li>
                    <li>3. Pilih menu Pembayaran atau Virtual Account.</li>
                    <li>4. Masukkan nomor Virtual Account yang tersedia.</li>
                    <li>5. Periksa detail transaksi dan nominal pembayaran.</li>
                    <li>6. Konfirmasi transaksi.</li>
                    <li>7. Simpan struk sebagai bukti pembayaran.</li>
                </ol>
            </div>
        </div>
    </div>
);
}

export default Bank;