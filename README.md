<h1 align="center">
  Another Foundry Boilerplate <sub><sup><sub><sup>but this time, as a web3 monorepo</sup></sub></sup></sub>
</h1>

This monorepo draws inspiration from [Scaffold-Eth](https://github.com/scaffold-eth/scaffold-eth) to jump into experimenting with smart contract and Web3 development.

Though this repository will encompass code for both the frontend and smart contract backend for you to develop quickly on the fly, you should opt to split the work into two separate repositories for larger projects.

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
  - `🚧 TODO: Write 🚧`

### Installing your own Dependencies

You may wish to install your own dependencies for usage in your frontend or your smart contracts.

#### Frontend Dependencies

`🚧 TODO: Write 🚧`

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

The Git submodule will be installed under `/lib`.

## Configuration

`🚧 TODO: Write 🚧`

## Folder Structure

`🚧 TODO: Write 🚧`

## Commands

`🚧 TODO: Write 🚧`

## Resources

Below are several resources that may be helpful for getting started with this boilerplate and extending it for your use cases.

- [Examples using ds-test to write smart contract tests in Solidity](https://github.com/dapphub/ds-test/blob/master/demo/demo.sol)
- [Installing Dependencies using DappTools](https://github.com/dapphub/dapptools/tree/master/src/dapp#dapp-install)
- [Installing Dependencies using Foundry and Forge](https://github.com/gakonst/foundry/blob/master/cli/README.md#forge)
