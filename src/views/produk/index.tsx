import styles from "../../pages/produk/produk.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "../../types/product.type";

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
      padding: "16px"
    }}>
      {products.length > 0 ? (
        products.map((product: ProductType) => (
          <Link
            href={`/produk/${product.id}`}
            key={product.id}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "12px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <h4 style={{ margin: "8px 0 4px" }}>{product.name}</h4>
            <p style={{ margin: "0 0 4px", color: "#888", fontSize: "13px" }}>
              {product.category}
            </p>
            <p style={{ margin: 0, color: "red", fontWeight: "bold" }}>
              Rp {product.price.toLocaleString("id-ID")}
            </p>
          </Link>
        ))
      ) : (
        <p>Tidak ada produk</p>
      )}
    </div>
  );
};

export default TampilanProduk;