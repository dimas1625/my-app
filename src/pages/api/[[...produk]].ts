// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  retrieveDataByID,
  retrieveProducts,
} from "../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

const fixImagePath = (product: any) => {
  if (!product) return product;
  let image = product.image || "";
  image = image.replace(/"+$/, "").trim();
  image = image.split(" ").join("%20");
  return { ...product, image };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.produk![1]) {
    const targetId = req.query.produk![1];

    // Coba ambil langsung pakai document ID Firebase
    let raw = await retrieveDataByID("products", targetId);

    // Jika tidak ketemu by document ID,
    // cari berdasarkan field "id" di dalam dokumen
    if (!raw) {
      const allProducts: any[] = await retrieveProducts("products");
      raw = allProducts.find((p: any) => p.id === targetId);
    }

    const data = fixImagePath(raw);
    res.status(200).json({ status: true, status_code: 200, data });
    return;

  } else {
    const raw: any[] = await retrieveProducts("products");
    const data = raw.map(fixImagePath);
    res.status(200).json({ status: true, status_code: 200, data });
  }
}