import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function KelolaUser() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editNotelp, setEditNotelp] = useState("");

  const handleLogout = () => {
    const confirmLogout = window.confirm("Yakin logout?");

    if (confirmLogout) {
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus user ini?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/users/${id}`
      );

      setUsers(users.filter((user) => user.id !== id));

      alert("User berhasil dihapus");
    } catch (err) {
      console.log(err);
      alert("Gagal menghapus user");
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);

    setEditName(user.name);
    setEditEmail(user.email);
    setEditNotelp(user.notelp);

    setShowModal(true);
  };

  const handleUpdate = async () => {
  try {
    await axios.put(
      `http://127.0.0.1:8000/api/users/${selectedUser.id}`,
      {
        name: editName,
        email: editEmail,
        notelp: editNotelp,
      }
    );

    setUsers(
      users.map((u) =>
        u.id === selectedUser.id
          ? {
              ...u,
              name: editName,
              email: editEmail,
              notelp: editNotelp,
            }
          : u
      )
    );

    setShowModal(false);

    alert("User berhasil diupdate");
  } catch (err) {
    console.log(err);
    alert("Gagal update user");
  }
};

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

      {/* SIDEBAR */}
      <aside
        className="w-52 shrink-0 min-h-screen flex flex-col"
        style={{
          background:
            "linear-gradient(180deg, #0d7a5f 0%, #0a5e49 100%)",
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

      {/* MAIN */}
      <main className="flex-1 bg-white p-8 relative">

        <div
          onClick={handleLogout}
          className="absolute top-6 right-8 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-50">
            👤
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Kelola User
        </h2>

        {/* TOTAL USER + SEARCH */}
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

        {/* TABLE */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">

          <table className="w-full text-sm text-left">

            <thead>
              <tr className="bg-gray-50">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Nama</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Nomor Telepon</th>
                <th className="px-5 py-3 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-t">

                  <td className="px-5 py-3">
                    {user.id}
                  </td>

                  <td className="px-5 py-3">
                    {user.name}
                  </td>

                  <td className="px-5 py-3">
                    {user.email}
                  </td>

                  <td className="px-5 py-3">
                    {user.notelp}
                  </td>

                  <td className="px-5 py-3">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() => handleEdit(user)}
                        className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded flex items-center justify-center"
                      >
                        <FaEdit className="text-white text-xs" />
                      </button>

                      <button
                        onClick={() => handleDelete(user.id)}
                        className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded flex items-center justify-center"
                      >
                        <FaTrash className="text-white text-xs" />
                      </button>

                    </div>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>

         </div>

        {/* MODAL EDIT USER */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl p-6 w-[400px]">

              <h2 className="text-xl font-bold mb-4">
                Edit User
              </h2>

              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full border p-2 rounded mb-3"
                placeholder="Nama"
              />

              <input
                type="email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                className="w-full border p-2 rounded mb-3"
                placeholder="Email"
              />

              <input
                type="text"
                value={editNotelp}
                onChange={(e) => setEditNotelp(e.target.value)}
                className="w-full border p-2 rounded mb-4"
                placeholder="Nomor Telepon"
              />

              <div className="flex justify-end gap-2">

                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Batal
                </button>

                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Simpan
                </button>

              </div>

            </div>

          </div>
        )}

      </main>

    </div>
  );
}
