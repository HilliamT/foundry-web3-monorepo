import "iron-session";
import { SiweMessage } from "siwe";

// Define type used by iron-session for `req.session`
declare module "iron-session" {
  interface IronSessionData {
    nonce?: string;
    siwe?: SiweMessage;
  }
}
