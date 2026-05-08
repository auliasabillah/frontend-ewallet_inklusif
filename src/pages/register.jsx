import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logoEwallet from "../assets/login/ewallet.png";

export default function Register() {

    const navigate = useNavigate();

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleRegister = () => {

    
        if (!nama || !email || !password || !confirmPassword) {
            alert("Semua data harus diisi!");
            return;
        }

      
        if (password !== confirmPassword) {
            alert("Password tidak sama!");
            return;
        }

       
        alert("Register berhasil!");

        navigate("/");
    };

    return (
        <div className="w-full min-h-screen flex bg-gradient-to-br from-teal-500 to-teal-800">

            <div className="w-1/2 flex items-center justify-center px-16">

                <div>
                    <h1 className="text-white text-[48px] font-extrabold leading-tight">
                        Mulai<br />
                        atur keuanganmu<br />
                        dengan lebih<br />
                        mudah!
                    </h1>
                </div>
            </div>


            <div className="w-1/2 flex items-center justify-center bg-white">

                <div className="w-[420px]">

            
                    <div className="flex flex-col items-center mb-5">

                        <img
                            src={logoEwallet}
                            alt="logo"
                            className="w-[80px] h-[80px] object-contain"
                        />

                        <p className="text-[14px] text-gray-500 mt-1 font-medium">
                            E-Wallet Inklusif
                        </p>
                    </div>

                    {/* TITLE */}
                    <h1 className="text-[40px] font-extrabold text-center mb-2">
                        Register
                    </h1>

                    <p className="text-center text-[14px] text-gray-500 mb-6">
                        Buat akun baru untuk mulai mengatur keuanganmu
                    </p>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-[14px] font-semibold mb-2">
                                Nama Lengkap
                            </label>

                            <input
                                type="text"
                                placeholder="Masukkan nama lengkap"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                        <div>
                            <label className="block text-[14px] font-semibold mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Masukkan email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                        <div>
                            <label className="block text-[14px] font-semibold mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Masukkan password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block text-[14px] font-semibold mb-2">
                                Konfirmasi Password
                            </label>

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


                    </div>
                </div>
            </div>
        </div>
    );
}