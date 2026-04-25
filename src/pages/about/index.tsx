const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex flex-col items-center pt-32 px-6 font-sans relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION (Glow Effect) --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -ml-24 -mt-24" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -mr-20 -mb-20" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-4xl text-center">
        
        {/* Badge/Label Atas */}
        <div className="flex justify-center items-center gap-2 mb-6">
        </div>

        {/* Judul Utama */}
        <h1 data-testid="title" className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
          About Page
        </h1>

        {/* Deskripsi Tentang Aplikasi */}
        <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto text-base md:text-lg font-medium">
          Aplikasi ini dikembangkan sebagai bagian dari praktikum integrasi sistem 
          dengan Next.js. Fokus utama kami adalah memberikan pengalaman pengguna 
          yang cepat, aman, dan memiliki antarmuka modern bagi seluruh civitas akademika.
        </p>

        {/* Info Grid Sederhana */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
          <div className="border-l border-white/10 pl-6">
            <h4 className="text-white font-bold text-sm mb-1">Version</h4>
            <p className="text-slate-500 text-xs font-mono">Build 1.0.4 - 2026</p>
          </div>
          <div className="border-l border-white/10 pl-6">
            <h4 className="text-white font-bold text-sm mb-1">Framework</h4>
            <p className="text-slate-500 text-xs font-mono">Next.js Pages Router</p>
          </div>
          <div className="border-l border-white/10 pl-6">
            <h4 className="text-white font-bold text-sm mb-1">Environment</h4>
            <p className="text-slate-500 text-xs font-mono">D4 Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;