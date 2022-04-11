import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { SiweMessage } from "siwe";
import { ironOptions } from "lib/ironOptions";

/**
 * POST /api/auth/verify
 *
 * Verify the user's signed message
 * See: https://eips.ethereum.org/EIPS/eip-4361#wallet-implementer-guidelines
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        // Get unsigned and signed message
        const { message, signature } = req.body;

        // Verify the signature, extracting values if successful
        const siweMessage = new SiweMessage(message);
        const fields = await siweMessage.validate(signature);

        if (fields.nonce !== req.session.nonce)
          return res.status(422).json({ message: "Invalid nonce." });

        // Set the fields within the session upon success
        req.session.siwe = fields;
        await req.session.save();
        res.json({ ok: true });
      } catch (_error) {
        res.json({ ok: false });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default withIronSessionApiRoute(handler, ironOptions);
