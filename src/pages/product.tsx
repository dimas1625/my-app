import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProductPage() {
  const { push } = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("login");

    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <p>Selamat datang di halaman produk</p>
    </div>
  );
}