import { ProductType } from "../../types/product.type";
import styles from "../DetailProduct/detailProduct.module.scss";

const DetailProduk = ({ products }: { products: ProductType | ProductType[] }) => {
  if (!products) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>Loading...</p>
    );
  }

  const product: ProductType = Array.isArray(products) ? products[0] : products;

  if (!product) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        Produk tidak ditemukan.
      </p>
    );
  }

  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          {/* Line 11 - modifikasi: tambah pengecekan && sebelum render gambar */}
          <img
            src={product.image && product.image}
            alt={product.name}
            width={400}
          />
        </div>

        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>
            {product.name}
          </h1>
          <p className={styles.produkdetail__category}>
            {product.category}
          </p>
          <p className={styles.produkdetail__price}>
            Rp {product.price && product.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;