import { useIsMounted } from "hooks/useIsMounted";
import { useConnect } from "wagmi";
import { useCallback, useEffect, useState } from "react";
import { SiweMessage } from "siwe";

export const WalletButton = () => {
  const isMounted = useIsMounted();
  const [state, setState] = useState<{
    address?: string;
    error?: Error;
    loading?: boolean;
  }>({});

  const [
    {
      data: { connector, connectors },
      error,
      loading,
    },
    connect,
  ] = useConnect();

  // Sign a user in following Sign-In with Ethereum
  const signIn = useCallback(async (connector) => {
    try {
      // Connect to the chosen Wallet connector e.g Metamask, WalletConnect etc.
      const res = await connect(connector);
      if (!res.data) throw res.error ?? new Error("Something went wrong");

      // Generate random nonce from server to prevent replay attacks
      const nonceRes = await fetch("/api/auth/nonce");

      // Substitute values into standard EIP-4361 sign-in message
      // See: https://eips.ethereum.org/EIPS/eip-4361#abnf-message-format
      const message = new SiweMessage({
        domain: window.location.host,
        address: res.data.account,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: res.data.chain?.id,
        nonce: await nonceRes.text(),
      });

      // Ask user to sign the message with their Wallet (uses Ethers signing)
      const signer = await connector.getSigner();
      const signature = await signer.signMessage(message.prepareMessage());

      // Send the signature to server to verify that user has signed it
      const verifyRes = await fetch("/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, signature }),
      });
      if (!verifyRes.ok) throw new Error("Error verifying message");

      // It worked! User is signed in with Ethereum
    } catch (error) {
      // If user cancels sign-in, remove any session store and address
      await fetch("/api/auth/logout");
      setState({ error });
    }
  }, []);

  // Fetch user when:
  useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const json = await res.json();
        setState((x) => ({ ...x, address: json.address }));
      } finally {
        setState((x) => ({ ...x, loading: false }));
      }
    };
    // 1. page loads
    (async () => await handler())();

    // 2. window is focused (in case user logs out of another window)
    window.addEventListener("focus", handler);
    return () => window.removeEventListener("focus", handler);
  }, []);

  if (state.address) {
    return (
      <button
        onClick={async () => {
          await fetch("/api/auth/logout");
          setState({});
        }}
      >
        Signed in as {state.address}
      </button>
    );
  }

  return (
    <div>
      <div>
        {connectors.map((x) => (
          <button
            disabled={isMounted && !x.ready}
            key={x.name}
            onClick={() => signIn(x)}
          >
            {x.id === "injected" ? (isMounted ? x.name : x.id) : x.name}
            {isMounted && !x.ready && " (unsupported)"}
            {loading && x.name === connector?.name && "…"}
          </button>
        ))}
      </div>
      <div>{error && (error?.message ?? "Failed to connect")}</div>
    </div>
  );
};
