import {
  alchemyId,
  defaultChain,
  etherscanApiKey,
  infuraId,
} from "./constants";
import { providers } from "ethers";
import { Connector, defaultChains as chains, chain, Provider } from "wagmi";

type ProviderConfig = { chainId?: number; connector?: Connector };

const isChainSupported = (chainId?: number) =>
  chains.some((x) => x.id === chainId);

// Configure network provider to communicate with the Ethereum network
const networkProvider = ({ chainId }: ProviderConfig) =>
  providers.getDefaultProvider(
    isChainSupported(chainId) ? chainId : defaultChain.id,
    {
      alchemy: alchemyId,
      etherscan: etherscanApiKey,
      infura: infuraId,
    }
  );

// Configure web socket provider to listen to events from the Ethereum network
const webSocketProvider = ({ chainId }: ProviderConfig) =>
  isChainSupported(chainId)
    ? new providers.InfuraWebSocketProvider(chainId, infuraId)
    : undefined;

export { networkProvider, webSocketProvider };
