import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
export default function AdminLogin({ onLoginBerhasil }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === "admin@ewallet.id" && password === "admin123") {
        onLoginBerhasil();
        navigate("/admin/dashboard");
      } else {
        setError("Email atau password salah. Silakan coba lagi.");
      }
    }, 1500);
  };
 
  return (
    <div className="min-h-screen flex flex-col font-sans">
 
      {/* Banner Atas - setengah layar */}
      <div className="relative bg-emerald-700 w-full flex flex-col items-center justify-center py-16"
        style={{
          backgroundImage: "linear-gradient(135deg, #065f46 0%, #059669 50%, #065f46 100%)"
        }}
      >
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />
        <div className="z-10 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h14a2 2 0 012 2v1H3V7zM3 10h18v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
                <circle cx="17" cy="14" r="1" fill="currentColor" />
              </svg>
            </div>
            <span className="text-white text-3xl font-bold tracking-wide">E-Wallet Inklusif</span>
          </div>
          <p className="text-white/80 text-lg">Halo 👋 Selamat Datang, Admin!</p>
        </div>
      </div>
 
      {/* Bagian bawah - form */}
      <div className="flex-1 bg-gray-50 flex items-start justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-md px-8 py-8">
 
          <h1 className="text-center text-2xl font-bold text-slate-800 mb-1">Masuk Admin</h1>
          <p className="text-center text-sm text-slate-400 mb-6">Silakan login untuk mengakses dashboard admin</p>
 
          <form onSubmit={handleSubmit} className="space-y-4">
 
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1.5">
                Email/Username <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="admin@ewallet.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
 
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1.5">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 pr-10 py-2.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
 
            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3 py-2.5">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                {error}
              </div>
            )}
 
            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Memproses...
                </>
              ) : "Login"}
            </button>
          </form>
 
          <div className="flex items-start gap-2 mt-6 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2.5">
            <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-xs text-slate-400 leading-relaxed">
              Halaman ini hanya untuk admin. Akses tidak sah akan dicatat dan dilaporkan.
            </p>
          </div>
 
        </div>
      </div>
 
    </div>
  );
}