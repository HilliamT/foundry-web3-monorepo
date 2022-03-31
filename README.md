<h1 align="center">
  Another Foundry Boilerplate <sub><sup><sub><sup>but this time, as a web3 monorepo</sup></sub></sup></sub>
</h1>

This monorepo draws inspiration from [Scaffold-Eth](https://github.com/scaffold-eth/scaffold-eth) to jump into experimenting with smart contract and Web3 development.

Though this repository will encompass code for both the frontend and smart contract backend for you to develop quickly on the fly, you should generally opt to split the work into two separate repositories for projects.

## Installation

To install the dependencies provided in this boilerplate, you can run:

```bash
make install
```

The following dependencies will be installed:

- `lib/`
  - [solmate](https://github.com/Rari-Capital/solmate) - Gas optimised smart contracts to build upon
  - [ds-test](https://github.com/dapphub/ds-test/) - Helpers for testing your smart contracts in Solidity
- `app/node_modules/`
  - [blitz](https://github.com/blitz-js/blitz) - A simple, fast, and powerful JavaScript framework for building web applications
  - [ethers](https://github.com/ethers-io/ethers.js) - A JavaScript library for interacting with the Ethereum blockchain
  - [typechain](https://github.com/dethcrypto/TypeChain) - Generate TypeScript interfaces from built Solidity contracts
  - [@typechain/ethers-v5](https://github.com/dethcrypto/TypeChain/tree/master/packages/target-ethers-v5#typechain-target-ethers-v5) - Helper package for Typechain to generate TypeScript interfaces for Ethers.js v5
  - [wagmi](https://github.com/tmm/wagmi) - React Hooks library for Ethereum, built on Ethers.js

### Installing your own Dependencies

You may wish to install your own dependencies for usage in your frontend or your smart contracts.

#### Frontend Dependencies

The node ecosystem provides many packages for frontend development. The repository uses [Yarn](https://yarnpkg.com/) for managing dependencies due to its ease of use and speed over the native [npm](https://nodejs.org/api/npm.html) command.

You can install any Node dependencies you need by running:

```bash
yarn add --cwd app <package> # same as `cd app && yarn add <package>`
```

The Node package will be installed in the `app/node_modules` directory and recorded to `app/package.json`

#### Smart Contract Dependencies

You may need to import a smart contract to avoid having to copy and paste code. These imports generally take on the form of other Github repositories. Installing them as Git submodules allows you to pull in any updates. [DappTools](https://github.com/dapphub/dapptools) or [Foundry](https://github.com/gakonst/foundry) will help you with this.

To install with [DappTools](https://github.com/dapphub/dapptools):

```
dapp install [user]/[repo]
```

To install with [Foundry](https://github.com/gakonst/foundry):

```
forge install [user]/[repo]
```

The Git submodule will be installed under `lib`.

## Configuration

`🚧 TODO: Write 🚧`

## Commands

`🚧 TODO: Write 🚧`

## Folder Structure

`🚧 TODO: Write 🚧`

## Resources

Below are several resources that may be helpful for getting started with this boilerplate and extending it for your use cases.

#### Frontend

- [adrianmcli/web3-vs-ethers: Web3.js vs Ethers.js](https://github.com/adrianmcli/web3-vs-ethers)

#### Testing

- [The Solcurity Standard](https://github.com/Rari-Capital/solcurity)
- [Examples using ds-test to write smart contract tests in Solidity](https://github.com/dapphub/ds-test/blob/master/demo/demo.sol)
- [Fuzzing smart contract tests with Foundry](https://github.com/gakonst/foundry/tree/master/forge#fuzzing-go-beyond-unit-testing)
- [Increasing verbosity of logs from `forge test`](https://github.com/gakonst/foundry/blob/master/cli/README.md#test)
- [Static Analysis with Slither](https://github.com/crytic/slither)

#### Miscellaneous

- [Utilising pre- and post- npm hooks](https://docs.npmjs.com/cli/v8/using-npm/scripts)
- [Installing Dependencies using DappTools](https://github.com/dapphub/dapptools/tree/master/src/dapp#dapp-install)
- [Installing Dependencies using Foundry and Forge](https://github.com/gakonst/foundry/blob/master/cli/README.md#forge)
- [libevm/forge-example: Using custom deploy scripts](https://github.com/libevm/forge-example)
- [paulrberg/solidity-template: Developer Tooling for Solidity](https://github.com/paulrberg/solidity-template)
