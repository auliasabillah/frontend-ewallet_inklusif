import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoLogin from "../assets/login/login.png";
import logoEwallet from "../assets/login/ewallet.png";
import logoGoogle from "../assets/login/google.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    return (
    <div className="w-full min-h-screen flex bg-white">
        <div className="w-1/2 bg-gradient-to-br from-teal-500 to-teal-800 flex flex-col justify-between px-16 py-12">
        <div className="mt-8">
            <h1 className="text-white text-[44px] font-extrabold leading-tight"> Pantau<br/> pengeluaranmu<br/> Atur keuangan harian<br/> Jadi lebih hemat! </h1>
        </div>

        <div className="flex justify-center items-end mb-6">
            <img src={logoLogin} alt="chart" className="w-[450px] h-auto"/>
        </div>
        </div>
        
        <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[420px]">
            <div className="flex flex-col items-center mb-8">
                <img src={logoEwallet} className="w-[90px] h-[90px] object-contain"/>
                <p className="text-[14px] text-gray-500 mt-2 font-medium"> E-Wallet Inklusif </p>
            </div>
            <h2 className="text-[42px] font-extrabold text-black mb-1">Halo!</h2>
            <p className="text-[14px] text-gray-500 mb-8">Kelola keuanganmu dengan mudah, aman dan transparan </p>
            
            <label className="block text-[14px] font-semibold mb-2">Email</label>
            <div className="bg-gray-100 rounded-xl flex items-center px-4 py-3 mb-5">
                <span className="text-gray-400 mr-3"></span>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent outline-none w-full text-[14px]"/>
            </div>
            
            <label className="block text-[14px] font-semibold mb-2"> Password</label>
            <div className="bg-gray-100 rounded-xl flex items-center px-4 py-3 mb-3">
                <span className="text-gray-400 mr-3"></span>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-transparent outline-none w-full text-[14px]"/>
            </div>

            <div className="text-right mb-6"> 
                <a href="#" className="text-[13px] text-gray-400"> Forgot Password?</a>
            </div>

            <button onClick={() => navigate("/beranda")} className="w-full bg-blue-700 text-white rounded-xl py-3" > Login </button>
            
            <div className="flex items-center mb-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-3 text-gray-400 text-[13px]">OR</span>
                <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <button className="w-full border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-3 text-[14px] font-medium">
                <img src={logoGoogle} alt="google" className="w-5 h-5"/> Sign in with Google
            </button>
            </div>
        </div>
    </div>
  );
}