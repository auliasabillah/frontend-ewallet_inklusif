import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarIcon from "../../assets/profile/avatar.png";
import telpIcon from "../../assets/profile/call.png";
import editIcon from "../../assets/profile/edit.png";
import emailIcon from "../../assets/profile/email.png";
import loginIcon from "../../assets/profile/login.png";
import avatarProfile from "../../assets/profile/profile.png";
import axios from "axios";

function Profile() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const user = JSON.parse(localStorage.getItem("user"));

    const [profileImage, setProfileImage] = useState(
        user?.photo
            ? `http://127.0.0.1:8000/storage/photos/${user.photo}`
            : avatarProfile
    );

    const [tempImage, setTempImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const [editProfil, setEditProfil] = useState(false);
    const [editNama, setEditNama] = useState(user?.name || "");
    const [editNotelp, setEditNotelp] = useState(user?.notelp || "");
    const [editEmail, setEditEmail] = useState(user?.email || "");

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setSelectedFile(file);

            const reader = new FileReader();

            reader.onload = () => {
                setTempImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSimpanProfile = async () => {
        try {
            let updatedUser = user;

            if (selectedFile) {
                const formData = new FormData();
                formData.append("photo", selectedFile);
                formData.append("user_id", user?.id);

                const photoRes = await axios.post(
                    "http://127.0.0.1:8000/api/upload-photo",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                updatedUser = photoRes.data.user;

                setProfileImage(
                    `http://127.0.0.1:8000/storage/photos/${updatedUser.photo}`
                );

                setTempImage(null);
                setSelectedFile(null);
            }

            const response = await axios.put(
                `http://127.0.0.1:8000/api/profile/${user?.id}`,
                {
                    name: editNama,
                    notelp: editNotelp,
                    email: editEmail,
                }
            );

            updatedUser = {
                ...response.data.user,
                photo: updatedUser.photo,
            };

            localStorage.setItem("user", JSON.stringify(updatedUser));

            setEditProfil(false);

            alert("Profil berhasil diupdate!");
        } catch (error) {
            console.log(error.response?.data);
            alert("Gagal update profil");
        }
    };

    return (
        <div className="w-full h-screen bg-white overflow-hidden">
            <div className="w-full h-[75px] bg-[#126B7D] flex items-center justify-between px-8">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate("/beranda")}
                        className="text-white text-[30px] font-light"
                    >
                        ⬅︎
                    </button>

                    <h1 className="text-white text-[24px] font-semibold">
                        Profil
                    </h1>
                </div>
            </div>

            <div className="flex flex-col items-center px-8 py-6">
                <img
                    src={tempImage || profileImage}
                    alt="Profile"
                    className="w-[190px] h-[190px] object-contain"
                />

                <h2 className="text-[28px] font-semibold text-black mt-2">
                    {editNama}
                </h2>

                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                />

                {editProfil ? (
                    <button
                        onClick={() => fileInputRef.current.click()}
                        className="mt-2 bg-[#d6d6d6] px-4 py-2 rounded-[7px] flex items-center gap-2 shadow-sm"
                    >
                        <img
                            src={editIcon}
                            alt="Edit"
                            className="w-[13px] h-[15px] object-contain"
                        />

                        <span className="text-[11px] font-medium text-black">
                            Edit Foto Profile
                        </span>
                    </button>
                ) : (
                    <button
                        onClick={() => setEditProfil(true)}
                        className="bg-[#d6d6d6] border border-white text-black px-6 py-2 rounded-[10px]"
                    >
                        Edit Profil
                    </button>
                )}

                <div className="w-full max-w-[900px] mt-8 flex flex-col gap-4">
                    <div className="bg-[#126B7D] rounded-[18px] px-6 py-4 flex items-center gap-5">
                        <img
                            src={avatarIcon}
                            alt="Avatar"
                            className="w-[34px] h-[34px] object-contain brightness-0 invert"
                        />

                        {editProfil ? (
                            <input
                                value={editNama}
                                onChange={(e) => setEditNama(e.target.value)}
                                className="text-black px-3 py-1 rounded-lg flex-1"
                            />
                        ) : (
                            <p className="text-white text-[18px]">{editNama}</p>
                        )}
                    </div>

                    <div className="bg-[#126B7D] rounded-[18px] px-6 py-4 flex items-center gap-5">
                        <img
                            src={telpIcon}
                            alt="Phone"
                            className="w-[34px] h-[34px] object-contain brightness-0 invert"
                        />

                        {editProfil ? (
                            <input
                                value={editNotelp}
                                onChange={(e) => setEditNotelp(e.target.value)}
                                className="text-black px-3 py-1 rounded-lg flex-1"
                            />
                        ) : (
                            <p className="text-white text-[18px]">{editNotelp}</p>
                        )}
                    </div>

                    <div className="bg-[#126B7D] rounded-[18px] px-6 py-4 flex items-center gap-5">
                        <img
                            src={emailIcon}
                            alt="Email"
                            className="w-[34px] h-[34px] object-contain brightness-0 invert"
                        />

                        {editProfil ? (
                            <input
                                value={editEmail}
                                onChange={(e) => setEditEmail(e.target.value)}
                                className="text-black px-3 py-1 rounded-lg flex-1"
                            />
                        ) : (
                            <p className="text-white text-[18px]">{editEmail}</p>
                        )}
                    </div>

                    {editProfil && (
                        <button
                            onClick={handleSimpanProfile}
                            className="bg-[#33af64] text-white mt-5 px-4 py-2 rounded-[10px] w-full"
                        >
                            Simpan Profil
                        </button>
                    )}

                    {!editProfil && (
                        <div
                            onClick={() => {
                                localStorage.clear();
                                navigate("/");
                            }}
                            className="bg-[#126B7D] rounded-[18px] px-6 py-4 flex items-center justify-between cursor-pointer"
                        >
                            <div className="flex items-center gap-5">
                                <img
                                    src={loginIcon}
                                    alt="Logout"
                                    className="w-[34px] h-[34px] object-contain brightness-0 invert"
                                />

                                <p className="text-white text-[18px]">
                                    Keluar / ganti akun
                                </p>
                            </div>

                            <span className="text-white text-[32px]">＞</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;