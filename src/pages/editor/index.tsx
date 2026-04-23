import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./editor.module.scss";

const EditorPage = () => {
  const { data, status }: any = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    // Redirect jika tidak login atau bukan editor
    if (!data) {
      router.push("/auth/login");
      return;
    }
    if (data.user?.role !== "editor") {
      router.push("/");
    }
  }, [data, status, router]);

  // Tampilkan loading saat session masih diambil
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  // Jangan render halaman jika bukan editor
  if (!data || data.user?.role !== "editor") {
    return null;
  }

  return (
    <div className={styles.editor__container}>
      <div className={styles.editor__header}>
        <h1>📝 Halaman Editor</h1>
        <p>
          Selamat datang, <strong>{data.user?.fullname}</strong>
        </p>
        <span className={styles.editor__badge}>Role: Editor</span>
      </div>

      <div className={styles.editor__content}>
        <h2>Kelola Konten</h2>
        <div className={styles.editor__cards}>
          <div className={styles.editor__card}>
            <h3>📄 Artikel</h3>
            <p>Tulis dan kelola artikel</p>
            <button className={styles.editor__btn}>Buka</button>
          </div>
          <div className={styles.editor__card}>
            <h3>🖼️ Media</h3>
            <p>Upload dan kelola media</p>
            <button className={styles.editor__btn}>Buka</button>
          </div>
          <div className={styles.editor__card}>
            <h3>💬 Komentar</h3>
            <p>Moderasi komentar user</p>
            <button className={styles.editor__btn}>Buka</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;