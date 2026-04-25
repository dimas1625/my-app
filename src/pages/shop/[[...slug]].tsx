import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

// Import komponen TampilanProduk secara dinamis
const TampilanProduk = dynamic(() => import("../../views/produk"), {
  loading: () => <p className="text-slate-500 font-mono animate-pulse">Loading Products Component...</p>,
  ssr: false,
});

const HalamanToko = () => {
  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;
  const currentCategory = slug ? slug[0] : "Semua Kategori";

  // Fetching data produk dari API
  const { data, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex flex-col items-center pt-24 pb-20 px-6 font-sans relative overflow-hidden text-center">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -ml-20 -mb-20" />
      </div>

      {/* --- CONTENT HEADER --- */}
      <div className="relative z-10 w-full max-w-6xl">
        <div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Halaman Toko
        </h1>

        <div className="mb-12">
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto text-base md:text-lg font-medium">
            Temukan berbagai produk berkualitas dengan harga terbaik di toko kami. 
            Jelajahi kategori yang beragam dan temukan penawaran menarik setiap harinya.
          </p>
        </div>
        {/* --- PRODUCT GRID SECTION --- */}
        <div className="w-full mt-10">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-64 bg-white/5 rounded-3xl animate-shimmer border border-white/5" />
              ))}
            </div>
          ) : (
            /* Memanggil TampilanProduk dan mengirim data dari API */
            <TampilanProduk products={data?.data ?? []} />
          )}
        </div>
      </div>

      {/* Footer System */}
      <div className="mt-20 relative z-10">
      </div>
    </div>
  );
};

export default HalamanToko;