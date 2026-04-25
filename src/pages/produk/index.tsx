import dynamic from "next/dynamic";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import style from "./produk.module.scss";

const TampilanProduk = dynamic(() => import("../../views/produk"), {
  loading: () => (
    <div className={style.produk__grid}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className={style.produk__skeleton_card}>
          <div className={style.produk__skeleton_img} />
          <div className={style.produk__skeleton_text} style={{ width: "80%" }} />
          <div className={style.produk__skeleton_text} style={{ width: "40%" }} />
          <div className={style.produk__skeleton_text} style={{ width: "60%" }} />
        </div>
      ))}
    </div>
  ),
  ssr: false,
});

const HalamanProduk = () => {
  const { data, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div className={style.produk}>
      <div className={style.produk__header}>
        <h1 data-testid="product-title">Daftar Produk</h1>
        <p>Temukan sepatu terbaik untuk gaya hidup aktif anda.</p>
      </div>

      {isLoading ? (
         <div className={style.produk__grid}>
            {/* Loading state handled by dynamic import loader above */}
         </div>
      ) : (
        <TampilanProduk products={data?.data ?? []} />
      )}
    </div>
  );
};

export default HalamanProduk;