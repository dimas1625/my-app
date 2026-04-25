import { useSession } from "next-auth/react";
import Link from "next/link";

const HalamanProfile = () => {
  const { data }: any = useSession();

  // Ambil inisial nama untuk avatar
  const initial = data?.user?.fullname ? data.user.fullname.charAt(0).toUpperCase() : "U";

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#020617] font-sans overflow-hidden px-4">
      
      {/* Background Decor (Cahaya & Grid) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      {/* Main Card Profile */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl text-center">
        
        {/* Avatar Section */}
        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white text-4xl font-black shadow-[0_0_30px_rgba(37,99,235,0.4)] border-4 border-white/10">
          {initial}
        </div>

        {/* User Info */}
        <div className="mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-blue-500 block mb-2">
            Secure Profile Access
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">
            {data?.user?.fullname || "Guest Member"}
          </h1>
          <p className="text-slate-400 font-medium italic">
            {data?.user?.email || "no-email@detected.com"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link href="/profile/edit" className="w-full py-3.5 bg-white text-slate-950 rounded-2xl font-bold text-sm hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg shadow-white/5">
            Edit Information
          </Link>
          
          <button className="w-full py-3.5 bg-transparent border border-white/10 text-slate-400 rounded-2xl font-semibold text-sm hover:border-blue-500 hover:text-white transition-all">
            System Settings
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">
            Last Session: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HalamanProfile;