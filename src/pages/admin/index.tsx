const HalamanAdmin = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex flex-col items-center pt-32 px-6 font-sans relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      {/* Efek cahaya redup agar background tidak terlalu flat */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -ml-20 -mb-20" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-4xl text-center">

        {/* Judul Utama */}
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
          Halaman Admin
        </h1>

        {/* Deskripsi */}
        <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto text-base md:text-lg font-medium">
          Selamat datang kembali! Anda memiliki akses penuh ke pusat kontrol sistem. 
          Gunakan panel ini untuk mengelola infrastruktur pengguna, memantau laporan real-time, 
          dan menjaga stabilitas operasional secara efisien.
        </p>

        {/* Action Button Sederhana (Opsional) */}
        <div className="mt-12 flex justify-center gap-4">
        </div>
      </div>

      {/* Footer Minimalis */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
      </div>
    </div>
  );
};

export default HalamanAdmin;