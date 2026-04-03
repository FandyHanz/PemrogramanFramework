import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProducts, retrieveProductByID } from "../../utils/db/servicefirebase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.query.produk![1]) {
    const data = await retrieveProductByID("products", req.query.produk![1]);
    res.status(200).json({ status: true, status_code: 200, data });
    return;
  } else {
    const data = await retrieveProducts("products");
    res.status(200).json({ status: true, status_code: 200, data });
  };
}