
import type { NextApiRequest, NextApiResponse } from "next";
import { getProdukData } from "@/lib/produk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getProdukData();
  res.status(200).json({ data });
}
