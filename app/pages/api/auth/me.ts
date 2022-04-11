import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "lib/ironOptions";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * GET /api/auth/me
 *
 * Returns the user's authenticated wallet address.
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      res.send({ address: req.session.siwe?.address });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default withIronSessionApiRoute(handler, ironOptions);
