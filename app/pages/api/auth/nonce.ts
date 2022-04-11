import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "lib/ironOptions";
import { NextApiRequest, NextApiResponse } from "next";
import { generateNonce } from "siwe";

/**
 * GET /api/auth/nonce
 *
 * Generate a nonce for the user to prevent replay attacks
 * See: https://eips.ethereum.org/EIPS/eip-4361#security-considerations
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      req.session.nonce = generateNonce();
      await req.session.save();
      res.setHeader("Content-Type", "text/plain");
      res.send(req.session.nonce);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default withIronSessionApiRoute(handler, ironOptions);
