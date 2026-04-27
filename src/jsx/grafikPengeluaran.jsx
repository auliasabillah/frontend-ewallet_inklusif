import React from "react";
import { useNavigate } from "react-router-dom";

function grafikPengeluaran() {
    const navigate = useNavigate();
    return (
    <div className="min-h-screen bg-gray-200">
        <div className="bg-teal-500 text-white p-4 flex items-center justify-between">
            <span onClick={() => navigate("/beranda")} className="text-xl cursor-pointer">←</span>
            <h1 className="font-semibold">Informasi Pembayaran</h1>
            <span>...</span>
        </div>
        <div className="p-8 grid grid-cols-2 gap-4 min-h-[80vh] items-center">
            <div className="bg-teal-700 text-white p-10 rounded min-h-[80vh] items-center ">
                <h2 className="mb-4 font-bold">PAYMENT OVERVIEW</h2><br/>
                <div className="border-b py-2 flex justify-between">
                    <span>Payment ID</span>
                    <span>PK4856919</span>
                </div>
                <div className="border-b py-2 flex justify-between">
                    <span>Tanggal</span>
                    <span>2 februari 2026 16.00</span>
                </div>
                <div className="border-b py-2 flex justify-between">
                    <span>Total Pembayaran</span>
                    <span className="text-red-400">Rp 0</span>
                </div>
                <div className="border-b py-2 flex justify-between">
                    <span>Metode</span>
                    <span>QRIS</span>
                </div>
                <div className="border-b py-2 flex justify-between">
                    <span>Biaya Admin</span>
                    <span className="text-red-400">Rp 500</span>
                </div>
            </div>
            <div className="bg-teal-700 text-white p-4 min-h-[80vh] items-center">
                <div>
                    <h2 className="font-bold">GRAFIK PENGELUARAN</h2>
                    <p className="text-center mt-2">FEBRUARI 2026</p>
                </div>
                <div className="text-sm mt-4 flex justify-between">
                    <span>Gopay</span>
                    <span>LinkAja</span>
                    <span>QRIS</span>
                    <span>Dana</span>
                    <span>Shopee Pay</span>
                </div>
                <div className="flex items-center mt-3 gap-2">
                    <div className="w-4 h-4 bg-white"></div>
                        <span className="text-sm">Pengeluaran terbesar minggu ini</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default grafikPengeluaran;