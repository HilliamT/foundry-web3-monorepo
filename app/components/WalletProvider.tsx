import { connectors } from "lib/connectors";
import { networkProvider, webSocketProvider } from "lib/providers";
import { Provider } from "wagmi";

export const WalletProvider = ({ children }) => {
  return (
    // Create Context for wallet account, connectors and network providers
    <Provider
      autoConnect
      connectors={connectors}
      provider={networkProvider}
      webSocketProvider={webSocketProvider}
    >
      {children}
    </Provider>
  );
};
