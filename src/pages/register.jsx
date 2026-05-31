import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoLogin from "../assets/login/login.png";
import logoEwallet from "../assets/login/ewallet.png";
import logoGoogle from "../assets/login/google.png";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/login",
                {
                    email,
                    password,
                }
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            navigate("/beranda");

        } catch (error) {
            alert(error.response?.data?.message || "Login gagal");
        }
    };

    return (
        <div className="w-screen h-screen flex overflow-hidden fixed inset-0">

            {/* LEFT SIDE */}
            <div className="w-1/2 bg-[#1A7082] relative flex items-end justify-center overflow-hidden">

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-[#9FD0DA] opacity-40"></div>

                {/* IMAGE */}
                <img
                    src={logoLogin}
                    alt="login"
                    className="w-[520px] object-contain opacity-40 relative z-10"
                />

            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/2 bg-[#F2EBDD] flex justify-center items-center">

                <div className="w-[540px]">

                    {/* LOGO */}
                    <div className="flex flex-col items-center">

                        <img
                            src={logoEwallet}
                            className="w-[70px] h-[70px] object-contain"
                        />

                        <p className="tracking-[10px] text-[#C97B56] text-[16px] mt-4">
                            E - WALLET INKLUSIF
                        </p>

                    </div>

                    {/* TITLE */}
                    <div className="mt-10 text-center">

                        <h1 className="text-[82px] font-black text-[#3B2D2A] leading-none">
                            Halo!
                        </h1>

                        <p className="text-[#657166] text-[18px] mt-5 leading-[40px]">
                            Kelola keuanganmu dengan mudah,
                            <br />
                            aman dan modern.
                        </p>

                    </div>

                    {/* FORM */}
                    <div className="mt-14">

                        {/* EMAIL */}
                        <label className="text-[#3B322C] text-[18px] font-semibold">
                            Email
                        </label>

                        <div className="mt-3 bg-[#E8EDF7] rounded-[24px] px-6 py-6">

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-transparent outline-none w-full text-[18px]"
                            />

                        </div>

                        {/* PASSWORD */}
                        <label className="text-[#3B322C] text-[18px] font-semibold block mt-8">
                            Password
                        </label>

                        <div className="mt-3 bg-[#E8EDF7] rounded-[24px] px-6 py-6">

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-transparent outline-none w-full text-[18px]"
                            />

                        </div>

                        {/* FORGOT */}
                        <div className="text-right mt-4">

                            <a
                                href="#"
                                className="text-[#657166] text-[16px]"
                            >
                                Forgot Password?
                            </a>

                        </div>

                        {/* LOGIN BUTTON */}
                        <button
                            onClick={handleLogin}
                            className="w-full h-[76px] rounded-[24px] bg-[#135C73] text-white text-[30px] font-bold mt-8 shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                        >
                            Login
                        </button>

                        {/* OR */}
                        <div className="flex items-center gap-5 my-8">

                            <div className="flex-1 border-t border-[#D9DDD7]"></div>

                            <span className="text-[#657166] text-[18px]">
                                OR
                            </span>

                            <div className="flex-1 border-t border-[#D9DDD7]"></div>

                        </div>

                        {/* GOOGLE */}
                        <button className="w-full h-[76px] bg-white border border-[#E3E6E0] rounded-[24px] flex items-center justify-center gap-4 text-[22px] font-medium text-[#3B322C]">

                            <img
                                src={logoGoogle}
                                alt="google"
                                className="w-7 h-7"
                            />

                            Sign in with Google

                        </button>

                        {/* REGISTER */}
                        <p className="text-center text-[#657166] text-[18px] mt-8">

                            Belum punya akun?{" "}

                            <Link
                                to="/register"
                                className="text-[#C0754D] font-bold"
                            >
                                Register
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}