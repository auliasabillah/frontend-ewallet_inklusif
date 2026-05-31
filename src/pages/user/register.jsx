import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logoEwallet from "../../assets/login/ewallet.png";

export default function Register() {
    const navigate = useNavigate();
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [nomorhp, setNomorhp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        if (!nama || !email || !nomorhp || !password || !confirmPassword) {
            alert("Semua data harus diisi!");
            return;
        }
        if (password !== confirmPassword) {
            alert("Password tidak sama!");
            return;
        }
        try {
            await axios.post("http://localhost:8000/api/register", {
                name: nama,
                email: email,
                password: password,
                notelp: nomorhp,
            });
            alert("Register berhasil!");
            navigate("/");
        } catch (error) {
            alert(error.response?.data?.message || "Register gagal");
        }
    };

    return (
        <div className="w-full min-h-screen flex bg-gradient-to-br from-teal-500 to-teal-800">
            <div className="m-auto bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <img src={logoEwallet} alt="Logo" className="h-16" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Daftar Akun</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-[14px] font-semibold mb-2">Nama</label>
                        <input
                            type="text"
                            placeholder="Masukkan nama"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[14px] font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Masukkan email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[14px] font-semibold mb-2">Nomor HP</label>
                        <input
                            type="text"
                            placeholder="Masukkan nomor telepon"
                            value={nomorhp}
                            onChange={(e) => setNomorhp(e.target.value)}
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[14px] font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Masukkan password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[14px] font-semibold mb-2">Konfirmasi Password</label>
                        <input
                            type="password"
                            placeholder="Konfirmasi password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <button
                        onClick={handleRegister}
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-xl py-3 font-semibold transition duration-300 mt-2"
                    >
                        Register
                    </button>
                    <p className="text-center text-sm">
                        Sudah punya akun?{" "}
                        <Link to="/" className="text-teal-600 font-semibold">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}