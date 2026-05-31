import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function KelolaUser() {
  const navigate = useNavigate();

    const handleLogout = () => {
      const confirmLogout = window.confirm("Yakin logout?");

      if (confirmLogout) {
        localStorage.removeItem("user");
        navigate("/");
      }
    };
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      u.notelp?.includes(search)
  );

  const navItems = [
    { label: "Kelola User", path: "/admin/dashboard" },
    { label: "Transaksi", path: "/admin/transaksi" },
    { label: "Pemasukan", path: "/admin/pemasukan" },
    { label: "Pengeluaran", path: "/admin/pengeluaran" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className="w-52 shrink-0 min-h-screen flex flex-col"
        style={{
          background: "linear-gradient(180deg, #0d7a5f 0%, #0a5e49 100%)",
        }}
      >
        <div className="px-5 pt-8 pb-6 border-b border-white/10">
          <h1 className="text-white text-xl font-bold tracking-wide">
            E-Wallet
          </h1>
          <div className="mt-1 h-0.5 w-10 bg-white/30 rounded-full" />
        </div>

        <nav className="px-3 pt-5 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium w-full text-left transition ${
                item.label === "Kelola User"
                  ? "bg-white/20 text-white"
                  : "text-teal-100 hover:bg-white/10"
              }`}
            >
              {item.label}
              <span>→</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-white p-8 relative">
        <div 
          onClick={handleLogout}
          className="absolute top-6 right-8 cursor-pointer"
          >
          <div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-50">
            👤
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-6">Kelola User</h2>

        {/* Stats */}
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-5 py-3.5 shadow-sm">
            <span className="text-sm text-gray-500 font-medium">
              Total User
            </span>
            <span className="text-3xl font-bold text-gray-800">
              {filtered.length}
            </span>
          </div>

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2"
          />
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Nama</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Nomor Telepon</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-5 py-3">{user.id}</td>
                  <td className="px-5 py-3">{user.name}</td>
                  <td className="px-5 py-3">{user.email}</td>
                  <td className="px-5 py-3">{user.notelp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}