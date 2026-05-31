import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { key: "user", label: "Kelola User", path: "/admin/dashboard" },
  { key: "transaksi", label: "Transaksi", path: "/admin/transaksi" },
  { key: "pemasukan", label: "Pemasukan", path: "/admin/pemasukan" },
  { key: "pengeluaran", label: "Pengeluaran", path: "/admin/pengeluaran" },
];

export default function Transaksi() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/transaksi")
      .then((res) => res.json())
      .then((data) => setTransaksi(data))
      .catch((err) => console.error(err));
  }, []);

      const filtered = transaksi.filter((item) =>
      item.kategori?.toLowerCase().includes(search.toLowerCase()) ||
      item.jenis?.toLowerCase().includes(search.toLowerCase()) ||
      item.user_id?.toString().includes(search) ||
      item.nominal?.toString().includes(search) ||
        new Date(item.created_at)
          .toLocaleDateString("id-ID")
          .includes(search)
      );

  return (
    <div className="min-h-screen flex font-sans bg-gray-100">

      {/* Sidebar */}
      <aside
        className="w-52 flex flex-col py-8 px-5 shrink-0 min-h-screen"
        style={{
          background: "linear-gradient(180deg, #0d7a5f 0%, #0a5e49 100%)",
        }}
      >
        <div className="px-0 pb-6 border-b border-white/10 mb-5">
          <h1 className="text-white text-xl font-bold tracking-wide">
            E-Wallet
          </h1>
          <div className="mt-1 h-0.5 w-10 bg-white/30 rounded-full" />
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => navigate(item.path)}
              className={`w-full text-left flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                ${
                  item.key === "transaksi"
                    ? "bg-white/20 text-white"
                    : "text-teal-100 hover:bg-white/10"
                }`}
            >
              {item.label}
              <span className="text-xs">→</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-white p-8 relative">

        {/* Avatar */}
        <div className="absolute top-6 right-8">
          <div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-50">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zM12 2a10 10 0 100 20A10 10 0 0012 2z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-5">
          Transaksi
        </h2>

        {/* Card + Search */}
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-5 py-3.5 shadow-sm bg-white">
            <div className="w-10 h-10 rounded-full border-2 border-teal-500 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5"
                />
              </svg>
            </div>

            <span className="text-gray-500 text-sm">Total Transaksi</span>
            <span className="text-teal-700 font-bold text-xl">
              {filtered.length}
            </span>
          </div>

          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 gap-2 shadow-sm w-56 bg-white">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-sm text-gray-600 bg-transparent flex-1 focus:outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-gray-500 font-semibold px-5 py-3">
                  Id Transaksi
                </th>
                <th className="text-left text-gray-500 font-semibold px-5 py-3">
                  Id User
                </th>
                <th className="text-left text-gray-500 font-semibold px-5 py-3">
                  Jenis
                </th>
                <th className="text-left text-gray-500 font-semibold px-5 py-3">
                  Kategori
                </th>
                <th className="text-left text-gray-500 font-semibold px-5 py-3">
                  Nominal
                </th>
                <th className="text-left text-gray-500 font-semibold px-5 py-3">
                  Waktu
                </th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-gray-400 py-12">
                    Tidak ada transaksi ditemukan.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="px-5 py-3">{item.id}</td>
                    <td className="px-5 py-3">{item.user_id}</td>
                    <td className="px-5 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.jenis === "pemasukan"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.jenis}
                      </span>
                    </td>
                    <td className="px-5 py-3">{item.kategori}</td>
                    <td className="px-5 py-3">
                      Rp {Number(item.nominal).toLocaleString("id-ID")}
                    </td>
                    <td className="px-5 py-3">
                      {new Date(item.created_at).toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}