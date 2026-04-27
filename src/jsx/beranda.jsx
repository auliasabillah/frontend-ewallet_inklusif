import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/dashboard/user.png";
import isiSaldo from "../assets/dashboard/plus.png";
import transferIcon from "../assets/dashboard/send.png";
import paymentIcon from "../assets/dashboard/card.png";
import Atas from "../assets/dashboard/atas.png";
import Bawah from "../assets/dashboard/bawah.png";

export default function Beranda() {
  const navigate = useNavigate();

  const transactions = [
    { name: "Seniaku",   date: "1 April, 17.20",  amount: "Rp 40.000",  icon: Bawah, type: "out" },
    { name: "Leyi",      date: "11 Maret, 15.00",  amount: "Rp 50.000",  icon: Atas,  type: "in"  },
    { name: "Indomaret", date: "11 Maret, 14.20",  amount: "Rp 100.000", icon: Bawah, type: "out" },
    { name: "Meyy",      date: "8 Maret, 09.00",   amount: "Rp 15.000",  icon: Atas,  type: "in"  },
  ];

  return (
    <div className="w-full h-screen bg-[#ededed] overflow-hidden">
      <div className="w-full h-[75px] bg-[#2f7181] flex items-center justify-between px-10">
        <h1 className="text-white text-[28px] font-semibold">E-Wallet</h1>
        <img src={profileIcon} alt="Profile" className="w-[48px] h-[48px] cursor-pointer brightness-0 invert" onClick={() => navigate("/profile")}/>
      </div>

      <div className="px-10 py-5 h-[calc(100vh-75px)]">
        <div className="mb-4">
          <h2 className="text-[28px] font-semibold text-black">Selamat Datang, Nana</h2>
          <p className="text-[16px] mt-2 text-black">Total Saldo</p>
          <h3 className="text-[42px] font-bold text-[#79c7a3]">Rp 2.000.000</h3><br></br>
        </div>

        <div className="grid grid-cols-[1.15fr_0.95fr] gap-6 h-[58vh]">
          <div className="flex flex-col gap-6">
            <div className="bg-[#367789] rounded-[24px] p-4 shadow-md h-[160px]">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="flex flex-col items-center justify-center gap-3 cursor-pointer" onClick={() => navigate("/IsiSaldo")}>
                  <div className="bg-[#5aab7e] w-[70px] h-[70px] rounded-[16px] flex items-center justify-center">
                    <img src={isiSaldo} alt="Isi Saldo" className="w-[36px] h-[36px] object-contain brightness-0 invert" />
                  </div>
                  <p className="text-white text-[13px] font-medium">Isi Saldo</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 cursor-pointer" onClick={() => navigate("/transfer")}>
                  <div className="bg-[#4a9ecf] w-[70px] h-[70px] rounded-[16px] flex items-center justify-center">
                    <img src={transferIcon} alt="Transfer" className="w-[36px] h-[36px] object-contain brightness-0 invert" />
                  </div>
                  <p className="text-white text-[13px] font-medium">Transfer</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 cursor-pointer" onClick={() => navigate("/pembayaran")}>
                  <div className="bg-[#9b6ecf] w-[70px] h-[70px] rounded-[16px] flex items-center justify-center">
                    <img src={paymentIcon} alt="Pembayaran" className="w-[36px] h-[36px] object-contain brightness-0 invert" />
                  </div>
                  <p className="text-white text-[13px] font-medium">Pembayaran</p>
                </div>
              </div>
            </div>

            <div className="bg-[#367789] rounded-[24px] p-5 flex-1 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-[18px] font-medium">Grafik Pengeluaran</h3>
                <p onClick={() => navigate("/grafikPengeluaran")} className="text-white text-[14px] cursor-pointer">Detail →</p>
              </div>

              <svg viewBox="0 0 400 170" className="w-full h-[160px]">
                <line stroke="#79c7a3" strokeWidth="5"
                  x1="30"
                  y1="120"
                  x2="370"
                  y2="120"
                  strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="bg-[#367789] rounded-[24px] p-5 shadow-md flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-[20px] font-medium">Riwayat Transaksi</h3>
              <p className="text-white text-[14px] cursor-pointer">Detail →</p>
            </div>

            <div className="flex flex-col justify-between flex-1">
              {transactions.map((tx, i) => (
                <div key={i} className={`flex justify-between items-center py-2 ${i < transactions.length - 1 ? "border-b border-white/20" : ""}`}>
                  <div className="flex items-center gap-3">
                    <img src={tx.icon} alt={tx.name} className={`w-[40px] h-[40px] object-contain rounded-[10px] p-2 ${tx.type === "in" ? "bg-[#4ecb8a]" : "bg-[#e07070]"}`}/>
                    <div>
                      <p className="text-white text-[15px] font-medium">{tx.name}</p>
                      <p className="text-[#d9edf1] text-[11px]">{tx.date}</p>
                    </div>
                  </div>
                  <p className={`text-[15px] font-semibold ${tx.type === "in" ? "text-[#8ce0b0]" : "text-[#ff8f86]"}`}>{tx.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}