import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GrafikPengeluaran() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [grafikData, setGrafikData] = useState({ labels: [], datasets: [] });
  const [lastTransaksi, setLastTransaksi] = useState(null);
  const [bulan, setBulan] = useState(new Date().getMonth() + 1);
  const [tanggal, setTanggal] = useState(new Date().getDate());
  useEffect(() => {
    console.log("fetch dengan bulan:", bulan, "tanggal:", tanggal);
    axios.get(`http://localhost:8000/api/pengeluaran/${user?.id}?bulan=${bulan}&tanggal=${tanggal}`)
    .then(res => {
      const labels = Object.keys(res.data);
      const values = Object.values(res.data);
      setGrafikData({
        labels: labels,
        datasets: [{
          label: "Pengeluaran",
          data: values,
          backgroundColor: "#60A5FA",
          borderRadius: 8,
        }] 
      });
      })
        .catch(err => console.log(err));

    axios.get(`http://localhost:8000/api/riwayat/${user?.id}`)
        .then(res => {
            if (res.data.length > 0) {
                setLastTransaksi(res.data[0]);
            }
        })
        .catch(err => console.log(err));
      }, [bulan, tanggal]);
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      };
      

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="bg-[#126B7D] text-white px-6 py-4 flex items-center justify-between">
        <span
          onClick={() => navigate("/beranda")}
          className="text-xl cursor-pointer"
        >
          ←
        </span>

        <h1 className="text-lg font-semibold">
          Informasi Pembayaran
        </h1>

        <span>⋯</span>
      </div>

      <div className="p-8 grid grid-cols-2 gap-6">
        <div className="border rounded-xl p-6 bg-[#126B7D] text-white">
          <h2 className="font-bold mb-6">
            PAYMENT OVERVIEW
          </h2>
          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Payment ID</span>
            <span className="font-semibold">TRX{lastTransaksi?.id || '-'}</span>
          </div>
          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Tanggal</span>
            <span className="font-semibold">{lastTransaksi ? new Date(lastTransaksi.created_at).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'}) : '-'}</span>
          </div>
          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Total Pembayaran</span>
            <span className="text-red-300 font-semibold">
              Rp {lastTransaksi ? Number(lastTransaksi.nominal).toLocaleString('id-ID') : '0'}
            </span>
          </div>
          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Metode</span>
            <span className="font-semibold">{lastTransaksi?.deskripsi || '-'}</span>
          </div>
        </div>
        <div className="border rounded-xl p-6 bg-[#126B7D] text-white flex flex-col">
          <div>
            <h2 className="font-bold text-lg text-center">
              GRAFIK PENGELUARAN
            </h2>
            <div className="flex gap-4 mt-4">
              <select value={bulan} onChange={(e) => setBulan(e.target.value)} className="flex-1 bg-white text-black px-4 py-3 rounded-lg outline-none cursor-pointer">
                <option value="1">Januari - 2026</option>
                <option value="2">Februari - 2026 </option>
                <option value="3">Maret - 2026</option>
                <option value="4">April - 2026</option>
                <option value="5">Mei - 2026</option>
                <option value="6">Juni - 2026</option>
                <option value="7">Juli - 2026</option>
                <option value="8">Agustus - 2026</option>
                <option value="9">September - 2026</option>
                <option value="10">Oktober - 2026</option>
                <option value="11">November - 2026</option>
                <option value="12">Desember - 2026</option>
              </select>

              <select value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="flex-1 bg-white text-black px-4 py-3 rounded-lg outline-none cursor-pointer">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>

              </select>

            </div>
          </div>

          <div className="bg-white rounded-xl p-4 mt-6">
            <Bar data={grafikData} options={options} />
          </div>
          <div className="mt-4 text-sm px-2">
            Pengeluaran terbesar harian ada pada metode QRIS.
          </div>

        </div>

      </div>
    </div>
  );
}

export default GrafikPengeluaran;