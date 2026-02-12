// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProducts } from "../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = await retrieveProducts("products");
  res.status(200).json({ status: true, status_code: 200, data });
}

// import type { NextApiRequest, NextApiResponse } from "next";
// import { retrieveProducts } from "../utils/db/servicefirebase";
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const data = await retrieveProducts("products");

//     res.status(200).json({
//       status: true,
//       status_code: 200,
//       data,
//     });

//   } catch (error) {
//     console.error("API ERROR:", error);

//     res.status(500).json({
//       status: false,
//       status_code: 500,
//       message: "Internal Server Error",
//     });
//   }
// }

// export default async function handler(req: any, res: any) {
//   try {
//     res.status(200).json({
//       status: true,
//       status_code: 200,
//       data: [
//         { id: "1", name: "Test", price: 10000, size: "M" }
//       ],
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: false,
//       status_code: 500,
//       message: "Internal Server Error",
//     });
//   }
// }


// import { retrieveProducts } from "../utils/db/servicefirebase";

// export default async function handler(req: any, res: any) {
//   try {
//     const data = await retrieveProducts("products");

//     res.status(200).json({
//       status: true,
//       status_code: 200,
//       data,
//     });

//   } catch (error: any) {
//     console.error("FIREBASE ERROR:", error);

//     res.status(500).json({
//       status: false,
//       status_code: 500,
//       message: error.message,
//     });
//   }
// }
