import { useRouter } from "next/router";

export default function CategoryPage() {
  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;

  return (
    <div>
      <h1>Halaman Category</h1>

      <h3>Parameter URL:</h3>
      <ul>
        {slug
          ? slug.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          : <li>Tidak ada kategori</li>}
      </ul>
    </div>
  );
}