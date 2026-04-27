import React from "react";
import { useNavigate } from "react-router-dom";

import avatarIcon from "../assets/profile/avatar.png";
import telpIcon from "../assets/profile/call.png";
import editIcon from "../assets/profile/edit.png";
import emailIcon from "../assets/profile/email.png";
import helpIcon from "../assets/profile/help.png";
import loginIcon from "../assets/profile/login.png";
import avatarProfile from "../assets/profile/profile.png";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-[#ececec] overflow-hidden">
        <div className="w-full h-[75px] bg-[#2f7181] flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
                <button onClick={() => navigate("/beranda")} className="text-white text-[30px] font-light"> ← </button>
                <h1 className="text-white text-[24px] font-semibold">Profil</h1>
            </div>
            <img src={helpIcon} alt="Help" className="w-[38px] h-[38px] object-contain brightness-0 invert"/>
        </div>
        <div className="flex flex-col items-center px-8 py-6">
            <img src={avatarProfile} alt="Profile" className="w-[190px] h-[190px] object-contain"/>
            <h2 className="text-[28px] font-semibold text-black mt-2">Nana</h2>
            <button className="mt-3 bg-[#d6d6d6] px-5 py-2 rounded-[10px] flex items-center gap-2 shadow-sm">
                <img src={editIcon} alt="Edit" className="w-[15px] h-[15px] object-contain"/>
                <span className="text-[13px] font-medium text-black"> Edit Profile </span>
            </button>
            <div className="w-full max-w-[900px] mt-8 flex flex-col gap-4">
                <div className="bg-[#367789] rounded-[18px] px-6 py-4 flex items-center gap-5">
                    <img src={avatarIcon} alt="Avatar" className="w-[34px] h-[34px] object-contain brightness-0 invert"/>
                    <p className="text-white text-[18px]">Nana Liana</p>
                </div>
                <div className="bg-[#367789] rounded-[18px] px-6 py-4 flex items-center gap-5">
                    <img src={telpIcon} alt="Phone" className="w-[34px] h-[34px] object-contain brightness-0 invert"/>
                    <p className="text-white text-[18px]">08949672983</p>
                </div>
                <div className="bg-[#367789] rounded-[18px] px-6 py-4 flex items-center gap-5">
                    <img src={emailIcon} alt="Email" className="w-[34px] h-[34px] object-contain brightness-0 invert"/>
                    <p className="text-white text-[18px]"> lianaa739@gmail.com</p>
                </div>
                <div className="bg-[#367789] rounded-[18px] px-6 py-4 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-5">
                        <img src={loginIcon} alt="Logout" className="w-[34px] h-[34px] object-contain brightness-0 invert"/> 
                        <p className="text-white text-[18px]">Keluar / ganti akun</p>
                    </div>
                    <span className="text-white text-[28px]">›</span>
                </div>
            </div>
        </div>
    </div>
  );
}