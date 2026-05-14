import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarIcon from "../assets/profile/avatar.png";
import telpIcon from "../assets/profile/call.png";
import editIcon from "../assets/profile/edit.png";
import emailIcon from "../assets/profile/email.png";
import loginIcon from "../assets/profile/login.png";
import avatarProfile from "../assets/profile/profile.png";

function Profile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || avatarProfile);
  const [tempImage, setTempImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setTempImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
  };
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="w-full h-screen bg-white overflow-hidden">
        <div className="w-full h-[75px] bg-[#126B7D] flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
                <button onClick={() => navigate("/beranda")} className="text-white text-[30px] font-light">⬅︎</button>
                <h1 className="text-white text-[24px] font-semibold">Profil</h1>
            </div>
        </div>
        <div className="flex flex-col items-center px-8 py-6">
            <img src={tempImage || profileImage} alt="Profile" className="w-[190px] h-[190px] object-contain"/>
            <h2 className="text-[28px] font-semibold text-black mt-2">{user?.name}</h2>
            <button onClick={() => fileInputRef.current.click()} className="mt-2 bg-[#d6d6d6] px-4 py-2 rounded-[7px] flex items-center gap-2 shadow-sm">
                <img src={editIcon} alt="Edit" className="w-[13px] h-[15px] object-contain"/>
                <span className="text-[11px] font-medium text-black"> Edit Foto Profile </span>
            </button>
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden"/>
            {tempImage && (
                <button onClick={() => {
                    setProfileImage(tempImage); 
                    localStorage.setItem("profileImage", tempImage);
                    setTempImage(null);
                }} 
                className="mt-3 bg-[#126B7D] text-white px-4 py-2 rounded-[10px]">Simpan</button>
            )}
            <div className="w-full max-w-[900px] mt-8 flex flex-col gap-4">
                <div className="bg-[#126B7D] rounded-[18px] px-6 py-4 flex items-center gap-5">
                    <img src={avatarIcon} alt="Avatar" className="w-[34px] h-[34px] object-contain brightness-0 invert"/>
                    <p className="text-white text-[18px]">{user?.name}</p>
                </div>
                <div className="bg-[#126B7D] rounded-[18px] px-6 py-4 flex items-center gap-5">
                    <img src={telpIcon} alt="Phone" className="w-[34px] h-[34px] object-contain brightness-0 invert"/>
                    <p className="text-white text-[18px]">08949672983</p>
                </div>
                <div className="bg-[#126B7D] rounded-[18px] px-6 py-4 flex items-center gap-5">
                    <img src={emailIcon} alt="Email" className="w-[34px] h-[34px] object-contain brightness-0 invert"/>
                    <p className="text-white text-[18px]">{user?.email}</p>
                </div>
                <div className="bg-[#126B7D] rounded-[18px] px-6 py-4 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-5">
                        <img src={loginIcon} alt="Logout" className="w-[34px] h-[34px] object-contain brightness-0 invert"/> 
                        <p className="text-white text-[18px]">Keluar / ganti akun</p>
                    </div>
                    <span onClick={() => navigate("/")} className="text-white text-[32px]">＞</span>
                </div>
            </div>
        </div>
    </div>
);
}

export default Profile;