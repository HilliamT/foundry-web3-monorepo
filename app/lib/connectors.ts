import { defaultChains as chains, chain } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";
import { infuraId, appName, defaultChain } from "./constants";

// Set up Wallet connectors
const connectors = ({ chainId }: { chainId?: number }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    defaultChain.rpcUrls[0];
  return [
    // Support MetaMask wallets
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    // Support WalletConnect wallets e.g Rainbow
    new WalletConnectConnector({
      chains,
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    // Support Coinbase Wallet
    new WalletLinkConnector({
      chains,
      options: {
        appName,
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ];
};

export { connectors };
