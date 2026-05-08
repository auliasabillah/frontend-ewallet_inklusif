import { useNavigate } from "react-router-dom";

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
      const data = {
      labels: ["Gopay", "LinkAja", "QRIS", "Dana", "ShopeePay"],
      datasets: [
      {
        label: "Pengeluaran",
        data: [50000, 30000, 90000, 40000, 60000],
        backgroundColor: "#60A5FA",
        borderRadius: 8,
      },
    ],
  };

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
            <span className="font-semibold">
              PK4856919
            </span>
          </div>

          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Tanggal</span>
            <span className="font-semibold">
              2 Februari 2026 16.00
            </span>
          </div>

          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Total Pembayaran</span>
            <span className="text-red-300 font-semibold">
              Rp 0
            </span>
          </div>

          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Metode</span>
            <span className="font-semibold">
              QRIS
            </span>
          </div>

          <div className="border-b border-white/40 py-3 flex justify-between">
            <span>Biaya Admin</span>
            <span className="text-red-300 font-semibold">
              Rp 500
            </span>
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-[#126B7D] text-white flex flex-col">
          <div>
            <h2 className="font-bold text-lg text-center">
              GRAFIK PENGELUARAN
            </h2>

            <div className="flex gap-4 mt-4">
              <select className="flex-1 bg-white text-black px-4 py-3 rounded-lg outline-none cursor-pointer">
                <option>Januari</option>
                <option>Februari</option>
                <option>Maret</option>
                <option>April</option>
                <option>Mei</option>
                <option>Juni</option>
                <option>Juli</option>
                <option>Agustus</option>
                <option>September</option>
                <option>Oktober</option>
                <option>November</option>
                <option>Desember</option>
              </select>

              <select className="flex-1 bg-white text-black px-4 py-3 rounded-lg outline-none cursor-pointer">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>

              </select>

            </div>
          </div>

          <div className="bg-white rounded-xl p-4 mt-6">
            <Bar data={data} options={options} />
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