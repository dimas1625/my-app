import { useRouter } from "next/router";

const BlogDetail = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Halaman Blog</h1>
      <p>Slug: {query.slug}</p>
    </div>
  );
};

export default BlogDetail;