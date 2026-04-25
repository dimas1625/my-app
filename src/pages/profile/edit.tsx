import { useSession } from "next-auth/react";
import Link from "next/link";

const EditProfilePage = () => {
  const { data }: any = useSession();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#020617] font-sans overflow-hidden px-4 py-20">
      
      {/* Background Decor (Animasi Cahaya & Grid) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      {/* Main Card Form */}
      <div className="relative z-10 w-full max-w-lg bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-white tracking-tight">
            Edit Profile
          </h1>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Fullname Input */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500 mb-2 ml-1">
              Full Name
            </label>
            <input 
              type="text" 
              defaultValue={data?.user?.fullname}
              placeholder="Enter your name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Email Input (Read Only / Locked) */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-2 ml-1">
              Email Address (Locked)
            </label>
            <input 
              type="email" 
              value={data?.user?.email}
              readOnly
              className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3.5 text-slate-500 cursor-not-allowed italic"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500 mb-2 ml-1">
              New Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button 
              type="submit"
              className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20"
            >
              Save Changes
            </button>
            <Link 
              href="/profile"
              className="flex-1 py-4 bg-transparent border border-white/10 text-slate-400 rounded-2xl font-semibold text-sm hover:border-white/20 hover:text-white transition-all text-center"
            >
              Cancel
            </Link>
          </div>
        </form>

        {/* System Warning */}
        <div className="mt-8 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
          <p className="text-[10px] text-blue-400/80 leading-relaxed text-center italic">
            Note: Updating your credentials may require a fresh session login for security synchronization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;