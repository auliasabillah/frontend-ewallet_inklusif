import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RiwayatTransaksi() {
  const navigate = useNavigate();

  const [filter1, setFilter1] = useState("Semua Transaksi");
  const [filter2, setFilter2] = useState("Bulan Ini");
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const data = [
    {
      group: "Hari Ini",
      items: [
        {
          title: "Top Up Saldo",
          desc: "Via Bank BCA",
          amount: "Rp 500.000",
          status: "Sukses",
          type: "topup",
        },
        {
          title: "Pembayaran Listrik",
          desc: "ID Pelanggan: 123456789",
          amount: "Rp 120.000",
          status: "Selesai",
          type: "keluar",
        },
      ],
    },
    {
      group: "Kemarin",
      items: [
        {
          title: "Pembayaran Shopee",
          desc: "Order: #88210",
          amount: "Rp 150.000",
          status: "Selesai",
          type: "keluar",
        },
        {
          title: "Pembelian Pulsa",
          desc: "Telkomsel 50.000",
          amount: "Rp 50.000",
          status: "Sukses",
          type: "keluar",
        },
      ],
    },
    {
      group: "20 April 2024",
      items: [
        {
          title: "Pembayaran QRIS",
          desc: "E-STRYXBPLKAS",
          amount: "Rp 15.000",
          status: "Selesai",
          type: "keluar",
        },
        {
          title: "Transfer Uang",
          desc: "Ke Akul Saibah",
          amount: "Rp 50.000",
          status: "Sukses",
          type: "keluar",
        },
      ],
    },
  ];

  const filterData = (items) => {
    if (filter1 === "Pemasukan") {
      return items.filter((item) => item.type === "topup");
    }
    if (filter1 === "Pengeluaran") {
      return items.filter((item) => item.type === "keluar");
    }
    return items;
  };

  const getColor = (type) => {
    if (type === "topup") return "text-cyan-300";
    return "text-white";
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-teal-700 text-white p-4 flex items-center gap-2">
        <span
          onClick={() => navigate(-1)} // 🔥 FIX BACK BUTTON
          className="text-xl cursor-pointer"
        >
          ←
        </span>
        <h1 className="font-semibold">Riwayat Transaksi</h1>
      </div>

      <div className="p-4">

        {/* FILTER */}
        <div className="bg-teal-700 p-3 rounded-xl flex gap-3 mb-5 relative">

          {/* FILTER 1 */}
          <div className="relative w-1/2">
            <button
              onClick={() => setOpen1(!open1)}
              className="w-full bg-white p-2 rounded-lg flex justify-between"
            >
              {filter1} <span>▼</span>
            </button>

            {open1 && (
              <div className="absolute w-full bg-white mt-1 rounded shadow z-10">
                {["Semua Transaksi", "Pemasukan", "Pengeluaran"].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setFilter1(item);
                      setOpen1(false);
                    }}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FILTER 2 */}
          <div className="relative w-1/2">
            <button
              onClick={() => setOpen2(!open2)}
              className="w-full bg-white p-2 rounded-lg flex justify-between"
            >
              {filter2} <span>▼</span>
            </button>

            {open2 && (
              <div className="absolute w-full bg-white mt-1 rounded shadow z-10">
                {["Hari Ini", "Minggu Ini", "Bulan Ini"].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setFilter2(item);
                      setOpen2(false);
                    }}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* LIST */}
        {data.map((group, i) => {
          const filteredItems = filterData(group.items);
          if (filteredItems.length === 0) return null;

          return (
            <div key={i} className="mb-5">

              <p className="text-gray-600 font-semibold mb-2">
                {group.group}
              </p>

              <div className="bg-teal-700 rounded-xl p-3 text-white space-y-3">
                {filteredItems.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center">

                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-200">{item.desc}</p>
                      </div>

                      <div className="text-right">
                        <p className={`font-semibold ${getColor(item.type)}`}>
                          {item.amount}
                        </p>
                        <p className="text-xs text-gray-300">
                          {item.status}
                        </p>
                      </div>
                    </div>

                    {idx !== filteredItems.length - 1 && (
                      <hr className="border-teal-500 mt-3" />
                    )}
                  </div>
                ))}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}