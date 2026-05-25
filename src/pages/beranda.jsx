import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/dashboard/user.png";
import isiSaldo from "../assets/dashboard/plus.png";
import transferIcon from "../assets/dashboard/send.png";
import paymentIcon from "../assets/dashboard/card.png";
import Atas from "../assets/dashboard/atas.png";
import Bawah from "../assets/dashboard/bawah.png";
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
        <div className="w-screen h-screen bg-[#F3F3F3] overflow-hidden flex flex-col">
            <div className="w-full bg-[#126B7D] rounded-b-[45px] px-[45px] pt-[22px] pb-[24px] flex-shrink-0">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-[36px] font-light">
                        E-Wallet Inklusif
                    </h1>

                    <img
                        src={fotoUser()}
                        alt="Profile"
                        className="w-[55px] h-[55px] rounded-full object-cover cursor-pointer"
                        onClick={() => navigate("/profile")}
                    />
                </div>

                <div className="w-full bg-[#3790A2] rounded-[32px] mt-[30px] mb-[4px] shadow-[0_8px_24px_rgba(8,58,70,0.8)] px-[28px] py-[18px]">
                    <h2 className="text-white text-[26px] font-light text-center">
                        Selamat Datang, {user?.name}
                    </h2>

                    <div className="flex justify-between items-center mt-[58px]">
                        <div>
                            <p className="text-white text-[22px] font-light">
                                Total Saldo
                            </p>

                            <h1 className="text-[#7AD0A5] text-[52px] font-bold mt-1 leading-none">
                                Rp {Number(saldo).toLocaleString("id-ID")}
                            </h1>
                        </div>

                        <div className="flex gap-[22px]">
                            <div
                                onClick={() => navigate("/isisaldo")}
                                className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
                            >
                                <div className="w-[80px] h-[80px] rounded-[14px] bg-[#46A784] flex items-center justify-center">
                                    <img
                                        src={isiSaldo}
                                        alt="Isi Saldo"
                                        className="w-[36px] h-[36px] brightness-0 invert"
                                    />
                                </div>

                                <p className="text-white text-[15px] mt-1">
                                    Isi Saldo
                                </p>
                            </div>

                            <div
                                onClick={() => navigate("/transfer")}
                                className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
                            >
                                <div className="w-[80px] h-[80px] rounded-[14px] bg-[#3FA0D7] flex items-center justify-center">
                                    <img
                                        src={transferIcon}
                                        alt="Transfer"
                                        className="w-[36px] h-[36px] brightness-0 invert"
                                    />
                                </div>

                                <p className="text-white text-[15px] mt-1">
                                    Transfer
                                </p>
                            </div>

                            <div
                                onClick={() => navigate("/pembayaran")}
                                className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
                            >
                                <div className="w-[80px] h-[80px] rounded-[14px] bg-[#736FBB] flex items-center justify-center">
                                    <img
                                        src={paymentIcon}
                                        alt="Pembayaran"
                                        className="w-[36px] h-[36px] brightness-0 invert"
                                    />
                                </div>

                                <p className="text-white text-[15px] mt-1">
                                    Pembayaran
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-[22px] px-[34px] mt-[18px] flex-1">
                <div className="flex-1 h-[358px] bg-[#126B7D] shadow-[0_8px_24px_rgba(8,58,70,0.8)] rounded-[28px] p-[24px]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white text-[24px] font-light">
                            Grafik Pengeluaran
                        </h2>

                        <p
                            onClick={() => navigate("/grafikpengeluaran")}
                            className="text-white text-[16px] cursor-pointer transition-transform duration-200 hover:scale-110"
                        >
                            Detail →
                        </p>
                    </div>

                    <div
                        className="w-full mt-[20px] flex-1"
                        style={{ height: "calc(100% - 60px)" }}
                    >
                        <svg viewBox="0 0 600 260" className="w-full h-full" fill="none">
                            <defs>
                                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgba(217,217,217,0.5)" />
                                    <stop offset="100%" stopColor="rgba(47,111,128,0)" />
                                </linearGradient>
                            </defs>

                            <path
                                d="M0 40 C40 20,40 80,70 70 C120 40,90 170,160 140 C220 100,240 170,300 100 C360 40,400 220,450 120 C500 60,540 150,600 60 L600 260 L0 260 Z"
                                fill="url(#grad)"
                            />

                            <path
                                d="M0 40 C40 20,40 80,70 70 C120 40,90 170,160 140 C220 100,240 170,300 100 C360 40,400 220,450 120 C500 60,540 150,600 60"
                                stroke="rgba(0,0,0,0.7)"
                                strokeWidth="2.5"
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
                                r="7"
                                fill="#2F6F80"
                                stroke="white"
                                strokeWidth="3"
                            />

                            <text x="10" y="255" fill="rgba(255,255,255,0.7)" fontSize="13">
                                Jan
                            </text>
                            <text x="100" y="255" fill="rgba(255,255,255,0.7)" fontSize="13">
                                Feb
                            </text>
                            <text x="190" y="255" fill="rgba(255,255,255,0.7)" fontSize="13">
                                Mar
                            </text>
                            <text x="285" y="255" fill="rgba(255,255,255,0.7)" fontSize="13">
                                Apr
                            </text>
                            <text x="395" y="255" fill="rgba(255,255,255,0.7)" fontSize="13">
                                Mei
                            </text>
                            <text x="505" y="255" fill="rgba(255,255,255,0.7)" fontSize="13">
                                Jun
                            </text>
                        </svg>
                    </div>
                </div>

                <div className="flex-1 h-[358px] bg-[#126B7D] shadow-[0_8px_24px_rgba(8,58,70,0.8)] rounded-[28px] p-[24px]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white text-[24px] font-light">
                            Riwayat Transaksi
                        </h2>

                        <p
                            onClick={() => navigate("/riwayat")}
                            className="text-white text-[16px] cursor-pointer transition-transform duration-200 hover:scale-110"
                        >
                            Detail →
                        </p>
                    </div>

                    <div className="mt-[48px] flex flex-col">
                        {transactions.map((tx) => (
                            <div
                                key={tx.id}
                                className="flex justify-between items-center py-[13px] border-b border-white/20 last:border-b-0"
                            >
                                <div className="flex items-center gap-[14px]">
                                    <img
                                        src={tx.jenis === "pemasukan" ? Atas : Bawah}
                                        alt="icon"
                                        className={`w-[48px] h-[48px] rounded-[10px] p-[10px] ${
                                            tx.jenis === "pemasukan"
                                                ? "bg-[#4ECCA3]"
                                                : "bg-[#FF6B6B]"
                                        }`}
                                    />

                                    <div>
                                        <p className="text-white text-[17px]">
                                            {tx.deskripsi}
                                        </p>

                                        <p className="text-white/60 text-[13px]">
                                            {new Date(tx.created_at).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <p
                                    className={`text-[17px] font-medium ${
                                        tx.jenis === "pemasukan"
                                            ? "text-[#4ECCA3]"
                                            : "text-[#FF6B6B]"
                                    }`}
                                >
                                    Rp {Number(tx.nominal).toLocaleString("id-ID")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-[20px] flex-shrink-0" />
        </div>
    );
}

export default Beranda;