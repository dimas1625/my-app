// pages/products/server.tsx ← FILE SSR

import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/product.type";

// Props langsung terima data — tidak ada useState, tidak ada useEffect
const HalamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Server</h1>

      {/* 
        Tidak ada kondisi if loading → skeleton
        Langsung render produk karena data sudah ada 
      */}
      <TampilanProduk products={products} />
    </div>
  );
};

export default HalamanProdukServer;

// Ini yang mengambil data di SERVER sebelum halaman dikirim ke browser
export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk`);
  const data = await res.json();

  return {
    props: {
      products: data.data, // ← data dikirim ke komponen lewat props
    },
  };
}