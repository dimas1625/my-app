import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  // {digunakan client-side rendering/}
  // // const Router = useRouter();
  // // const { query } = useRouter();
  // // const { data, isLoading, error } = useSWR(
  // //   query.produk ? `/api/produk/${query.produk}` : null,
  // //   fetcher
  // // );
  // // return (
  // //   <div>
  // //     <DetailProduk products={isLoading ? [] : data.data} />
  // //   </div>
  // // );

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

// {digunakan server-side rendering/}
export async function getServerSideProps({ params }: { params: { produk: string } }) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`);
   const respone = await res.json();
   console.log("Data produk yang diambil dari API:", respone);
   return {
     props: {
       product: respone.data,
     },
   };
 }

// {digunakan static-site generation/}
// saat deploy tidak bisa menggunakan server-side rendering, karena tidak bisa melakukan fetch data dari localhost, maka digunakan static-site generation
// {/digunakan static-site generation/}
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/produk");
//   const response = await res.json();

//   // Membuat array paths dari setiap produk, menggunakan id sebagai parameter URL
//   // Contoh hasil: [{ params: { produk: "1" } }, { params: { produk: "2" } }, ...]
//   const paths = response.data.map((product: ProductType) => ({
//     params: { produk: product.id },
//   }));

//   // console.log("Paths yang dihasilkan untuk produk:", paths);

//   return {
//     paths,
//     fallback: false, // Halaman yang tidak ada di paths akan return 404
//   };
// }

// saat deploy tidak bisa menggunakan server-side rendering, karena tidak bisa melakukan fetch data dari localhost, maka digunakan static-site generation
// export async function getStaticProps({
//   params,
// }: {
//   params: { produk: string }; // Tipe parameter URL yang diterima
// }) {
//   const res = await fetch(
//     `http://localhost:3000/api/produk/${params?.produk}`
//   );
//   // const response: ProductType[] = await res.json();
//   const response: { data: ProductType[] } = await res.json(); // Response dibungkus dalam objek { data: [...] }

//   // console.log("Data produk yang diambil dari API:", response);

//   return {
//     props: {
//       product: response.data ?? null, // Kirim data produk ke komponen, null jika tidak ada
//     },
//   };
// }