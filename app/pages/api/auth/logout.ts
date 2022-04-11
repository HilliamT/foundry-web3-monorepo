import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "lib/ironOptions";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * GET /api/auth/me
 *
 * Destroy the user's session
 * See: https://github.com/vvo/iron-session#sessiondestroy
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      req.session.destroy();
      res.send({ ok: true });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default withIronSessionApiRoute(handler, ironOptions);
