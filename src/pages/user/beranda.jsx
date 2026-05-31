import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/dashboard/user.png";
import isiSaldo from "../../assets/dashboard/plus.png";
import transferIcon from "../../assets/dashboard/send.png";
import paymentIcon from "../../assets/dashboard/card.png";
import Atas from "../../assets/dashboard/atas.png";
import Bawah from "../../assets/dashboard/bawah.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

function Beranda() {
    const navigate = useNavigate();
    const [saldo, setSaldo] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const [grafikData, setGrafikData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/saldo/${user?.id}`)
            .then((res) => setSaldo(res.data.saldo))
            .catch((err) => console.log(err));

        axios
            .get(`http://127.0.0.1:8000/api/riwayat/${user?.id}`)
            .then((res) => {
                setTransactions(res.data.slice(0, 3));
            })
            .catch((err) => console.log(err));
        const bulan = new Date().getMonth() + 1;
        
        axios.get(`http://127.0.0.1:8000/api/pengeluaran/${user?.id}?bulan=${bulan}`)
        .then((res) => {
            setGrafikData({
                labels: Object.keys(res.data),
                datasets: [{
                    data: Object.values(res.data),
                    borderColor: "rgba(255,255,255,0.9)",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderWidth: 2,
                    pointBackgroundColor: "#F6D1B7",
                    pointRadius: 5,
                    tension: 0.4,
                    fill: true,
                }],
            });
        })
        .catch((err) => console.log(err));
    }, []);

    const fotoUser = () => {
        if (user?.photo) {
            return `http://127.0.0.1:8000/storage/photos/${user.photo}`;
        }
        return profileIcon;
    };

    return (
        <div className="w-screen min-h-screen bg-white overflow-x-hidden">

            {/* HEADER */}
            <div className="w-full bg-[#1A7082] rounded-b-[45px] px-[22px] pt-[18px] pb-[26px]">

                {/* TOP */}
                <div className="flex justify-between items-center">

                    <h1 className="text-white text-[32px] font-light tracking-wide">
                        E-Wallet Inklusif
                    </h1>

                    <img
                        src={fotoUser()}
                        alt="Profile"
                        className="w-[54px] h-[54px] rounded-full object-cover cursor-pointer border-2 border-white/20"
                        onClick={() => navigate("/profile")}
                    />

                </div>

                {/* CARD */}
                <div className="w-full bg-[#4095A7] rounded-[36px] mt-[26px] px-[40px] py-[32px] shadow-[0_10px_25px_rgba(0,0,0,0.18)]">

                    <h2 className="text-white text-[24px] font-light text-center">
                        Selamat Datang, {user?.name}
                    </h2>

                    <div className="flex justify-between items-center mt-[58px]">

                        {/* SALDO */}
                        <div>

                            <p className="text-white text-[20px] font-light">
                                Total Saldo
                            </p>

                            <h1 className="text-[#98D0A6] text-[60px] font-bold mt-2 leading-none">
                                Rp {Number(saldo).toLocaleString("id-ID")}
                            </h1>

                        </div>

                        {/* MENU */}
                        <div className="flex gap-[24px]">

                            {/* ISI SALDO */}
                            <div
                                onClick={() => navigate("/isisaldo")}
                                className="flex flex-col items-center cursor-pointer"
                            >

                                <div className="w-[84px] h-[84px] rounded-[24px] bg-[#59B78A] flex items-center justify-center shadow-md">

                                    <img
                                        src={isiSaldo}
                                        alt="Isi Saldo"
                                        className="w-[40px] h-[40px] brightness-0 invert"
                                    />

                                </div>

                                <p className="text-white text-[16px] mt-2">
                                    Isi Saldo
                                </p>

                            </div>

                            {/* TRANSFER */}
                            <div
                                onClick={() => navigate("/transfer")}
                                className="flex flex-col items-center cursor-pointer"
                            >

                                <div className="w-[84px] h-[84px] rounded-[24px] bg-[#4FA0D8] flex items-center justify-center shadow-md">

                                    <img
                                        src={transferIcon}
                                        alt="Transfer"
                                        className="w-[40px] h-[40px] brightness-0 invert"
                                    />

                                </div>

                                <p className="text-white text-[16px] mt-2">
                                    Transfer
                                </p>

                            </div>

                            {/* PEMBAYARAN */}
                            <div
                                onClick={() => navigate("/pembayaran")}
                                className="flex flex-col items-center cursor-pointer"
                            >

                                <div className="w-[84px] h-[84px] rounded-[24px] bg-[#7B6ED6] flex items-center justify-center shadow-md">

                                    <img
                                        src={paymentIcon}
                                        alt="Pembayaran"
                                        className="w-[40px] h-[40px] brightness-0 invert"
                                    />

                                </div>

                                <p className="text-white text-[16px] mt-2">
                                    Pembayaran
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* CONTENT */}
            <div className="flex gap-[20px] px-[34px] mt-[20px] pb-[20px]">

                {/* GRAFIK */}
                <div className="flex-1 h-[365px] bg-[#176F82] rounded-[30px] p-[26px] shadow-[0_10px_25px_rgba(0,0,0,0.18)]">

                    <div className="flex justify-between items-center">

                        <h2 className="text-white text-[22px] font-medium">
                            Grafik Pengeluaran
                        </h2>

                        <p
                            onClick={() => navigate("/grafikpengeluaran")}
                            className="text-white text-[16px] cursor-pointer"
                        >
                            Detail →
                        </p>

                    </div>

                    <div
                        className="w-full mt-[20px]"
                        style={{ height: "calc(100% - 60px)" }}
                    >
                        <Line data={grafikData} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                                x: { ticks: { display: false }, grid: { color: "rgba(255,255,255,0.1)" } },
                                y: { ticks: { color: "white" }, grid: { color: "rgba(255,255,255,0.1)" } },
                            },
                        }}
                        />
                    </div>
                </div>

                {/* RIWAYAT */}
                <div className="flex-1 h-[365px] bg-[#176F82] rounded-[30px] p-[26px] shadow-[0_10px_25px_rgba(0,0,0,0.18)]">

                    <div className="flex justify-between items-center">

                        <h2 className="text-white text-[22px] font-medium">
                            Riwayat Transaksi
                        </h2>

                        <p
                            onClick={() => navigate("/riwayat")}
                            className="text-white text-[16px] cursor-pointer"
                        >
                            Detail →
                        </p>

                    </div>

                    <div className="mt-[38px] flex flex-col">

                        {transactions.map((tx) => (

                            <div
                                key={tx.id}
                                className="flex justify-between items-center py-[14px] border-b border-white/10 last:border-b-0"
                            >

                                <div className="flex items-center gap-[14px]">

                                    <img
                                        src={tx.jenis === "pemasukan" ? Atas : Bawah}
                                        alt="icon"
                                        className={`w-[52px] h-[52px] rounded-[14px] p-[10px] ${tx.jenis === "pemasukan" ? "bg-[#59B78A]" : "bg-[#FF6B6B]"}`}
                                    />

                                    <div>

                                        <p className="text-white text-[17px] font-medium">
                                            {tx.deskripsi}
                                        </p>

                                        <p className="text-white/70 text-[13px]">
                                            {new Date(tx.created_at).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>

                                    </div>

                                </div>

                                <p className={`text-[17px] font-bold ${tx.jenis === "pemasukan" ? "text-[#98D0A6]" : "text-[#FF6B6B]"}`}>
                                    Rp {Number(tx.nominal).toLocaleString("id-ID")}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Beranda;
