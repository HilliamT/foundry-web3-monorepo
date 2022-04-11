import { chain } from "wagmi";

// Chain to host dApp upon
const defaultChain = chain.mainnet;

// Extract environment variables into constants
const appName = process.env.APP_NAME as string;

const infuraId = process.env.INFURA_ID as string;
const alchemyId = process.env.ALCHEMY_ID as string;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY as string;

export { defaultChain, appName, infuraId, alchemyId, etherscanApiKey };
