// Configure options for iron-session
// See: https://github.com/vvo/iron-session#ironoptions
export const ironOptions = {
  cookieName: "siwe",
  password: process.env.SESSION_SECRET || "",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
