
import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/dashboard/user.png";
import isiSaldo from "../../assets/dashboard/plus.png";
import transferIcon from "../../assets/dashboard/send.png";
import paymentIcon from "../../assets/dashboard/card.png";
import Atas from "../../assets/dashboard/atas.png";
import Bawah from "../../assets/dashboard/bawah.png";
import { useState, useEffect } from "react";
import axios from "axios";

function Beranda() {
    const navigate = useNavigate();
    const [saldo, setSaldo] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

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

                        <svg viewBox="0 0 600 260" className="w-full h-full" fill="none">

                            <defs>

                                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">

                                    <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />

                                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />

                                </linearGradient>

                            </defs>

                            <path
                                d="M0 40 C40 20,40 80,70 70 C120 40,90 170,160 140 C220 100,240 170,300 100 C360 40,400 220,450 120 C500 60,540 150,600 60 L600 260 L0 260 Z"
                                fill="url(#grad)"
                            />

                            <path
                                d="M0 40 C40 20,40 80,70 70 C120 40,90 170,160 140 C220 100,240 170,300 100 C360 40,400 220,450 120 C500 60,540 150,600 60"
                                stroke="#0D1D25"
                                strokeWidth="3"
                            />

                            <line
                                x1="300"
                                y1="10"
                                x2="300"
                                y2="245"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeDasharray="4 3"
                            />

                            <circle
                                cx="300"
                                cy="100"
                                r="8"
                                fill="#F6D1B7"
                                stroke="white"
                                strokeWidth="3"
                            />

                        </svg>

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
