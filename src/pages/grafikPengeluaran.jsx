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
  const user = JSON.parse(localStorage.getItem("user"));

  const [grafikData, setGrafikData] = useState({
    labels: [],
    datasets: [],
  });

  const [bulan, setBulan] = useState(new Date().getMonth() + 1);
  const [tanggal, setTanggal] = useState(new Date().getDate());

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/pengeluaran/${user?.id}?bulan=${bulan}&tanggal=${tanggal}`
      )
      .then((res) => {
        const labels = Object.keys(res.data);
        const values = Object.values(res.data);

        setGrafikData({
          labels: labels,
          datasets: [
            {
              label: "Pengeluaran",
              data: values,
              backgroundColor: "#60A5FA",
              borderRadius: 8,
            },
          ],
        });
      })
      .catch((err) => console.log(err));
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
      {/* HEADER */}
      <div className="bg-[#126B7D] text-white px-6 py-4 flex items-center justify-between">
        <span
          onClick={() => navigate("/beranda")}
          className="text-xl cursor-pointer"
        >
          ←
        </span>

        <h1 className="text-lg font-semibold">
          Grafik Pengeluaran
        </h1>

        <span>⋯</span>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <div className="border rounded-xl p-6 bg-[#126B7D] text-white flex flex-col max-w-6xl mx-auto">
          <div>
            <h2 className="font-bold text-2xl text-center">
              GRAFIK PENGELUARAN
            </h2>

            <div className="flex gap-4 mt-6">
              <select
                value={bulan}
                onChange={(e) => setBulan(e.target.value)}
                className="flex-1 bg-white text-black px-4 py-3 rounded-lg outline-none cursor-pointer"
              >
                <option value="1">Januari - 2026</option>
                <option value="2">Februari - 2026</option>
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

              <select
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="flex-1 bg-white text-black px-4 py-3 rounded-lg outline-none cursor-pointer"
              >
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mt-8">
            <Bar data={grafikData} options={options} />
          </div>

          <div className="mt-4 text-sm px-2 text-center">
            Pengeluaran terbesar harian ada pada metode QRIS.
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrafikPengeluaran;