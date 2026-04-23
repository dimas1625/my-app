import dynamic from "next/dynamic";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

// Dynamic import TampilanProduk
const TampilanProduk = dynamic(() => import("../../views/produk"), {
  loading: () => (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
      padding: "16px"
    }}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} style={{
          borderRadius: "10px",
          border: "1px solid #e0e0e0",
          padding: "12px",
          backgroundColor: "#fff",
        }}>
          <div style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            marginBottom: "12px",
            background: "linear-gradient(90deg, #eee, #f5f5f5, #eee)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }} />
          <div style={{
            width: "80%", height: "16px", borderRadius: "4px",
            marginBottom: "8px",
            background: "linear-gradient(90deg, #eee, #f5f5f5, #eee)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }} />
          <div style={{
            width: "50%", height: "14px", borderRadius: "4px",
            background: "linear-gradient(90deg, #eee, #f5f5f5, #eee)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }} />
        </div>
      ))}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  ),
  ssr: false,
});

const HalamanProduk = () => {
  const { data, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <h1 style={{ padding: "0 16px" }}>Halaman Produk</h1>
      <TampilanProduk products={data?.data ?? []} />
    </div>
  );
};

export default HalamanProduk;