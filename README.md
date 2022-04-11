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
  - [siwe](https://github.com/spruceid/siwe) - Helpers to conform to EIP-4361 (SIWE) authentication standard
  - [iron-session](https://github.com/vvo/iron-session) - Session management for authentication using encrypted cookies

### Installing your own Dependencies

You may wish to install your own dependencies for usage in your frontend or your smart contracts.

#### Frontend Dependencies

The node ecosystem provides many packages for frontend development. The repository uses [Yarn](https://yarnpkg.com/) for managing dependencies due to its ease of use and speed over the native [npm](https://nodejs.org/api/npm.html) command.

You can install any Node dependencies you need by running:

```bash
yarn add --cwd app <package> # same as `cd app && yarn add <package>`
```

The Node package will be installed in the `app/node_modules` directory and recorded in `app/package.json`.

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

To configure the project, you will need to set a few environment variables. These are found in `app/.env.sample`.

Make a copy of `.env.sample` and rename it to `.env`. Then, edit the file to set the values you need.

Note: The `.env` file is hidden from Git via `.gitignore` as to ensure that you don't accidentally commit it.

## Commands

`🚧 TODO: Write 🚧`

## Folder Structure

To help with understanding the structure of this repository, here is a diagram of the folder structure:

<details>
  <summary><code>.github/workflows</code> - Workflows for <a href="https://github.com/features/actions">Github Actions</a></summary>
  <ul>
    <li><code>contracts.yml</code> - Automated CI/CD for your smart contracts</li>
    <li><code>webapp.yml</code> - Automated CI/CD for your frontend</li>
  </ul>
</details>

<details>
  <summary><code>.husky</code> - Bash scripts to run on Git hooks with <a href="https://github.com/typicode/husky">Husky</a></summary>
</details>

<details>
  <summary><code>.vscode</code> - Configuration for use in VSCode IDE</summary>
</details>

<details>
  <summary><code>app</code> - Your frontend code</summary>
  <ul>
    <li><code>package.json</code> - Your frontend dependencies</li>
    <li><code>components</code> - Any shared React components</li>
    <li><code>hooks</code> - React Hooks</li>
    <li><code>pages</code> - <a href="https://blitzjs.com/docs/pages">React pages</a> for your app go here</li>
    <li><code>public</code> - Any static files go here</li>
    <li><code>test</code> - Any app tests go here e.g React Component testing, E2E testing etc.</li>
    <li><code>.eslintrc.js</code> - <a href="https://eslint.org/">ESLint</a> configuration</li>
    <li><code>.gitignore</code> - Ignore any files you don't want to push to Git</li>
    <li><code>.prettierrc</code> - <a href="https://prettier.io/">Prettier</a> configuration</li>
    <li><code>blitz.config.ts</code> - <a href="https://blitzjs.com/docs/config">Blitz configuration</a></li>
    <li><code>jest.config.ts</code> - <a href="https://jestjs.io/docs/en/configuration">Jest configuration</a></li>
    <li><code>tsconfig.json</code> - <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html">TypeScript configuration</a></li>
    <li><code>types</code> - TypeScript types used around your app</li>
    <li><code>yarn.lock</code> - <a href="https://yarnpkg.com/lang/en/docs/install/">Yarn</a> lock file</li>
  </ul>
</details>

<details>
  <summary><code>contracts</code> - Your smart contracts</summary>
  <ul>
    <li><code>*.sol</code> - Your smart contracts</li>
    <li><code>test/*.t.sol</code> - Tests for smart contracts</li>
    <li><code>test/base</code> - BaseTest contract to inherit for utils</li>
    <li><code>test/utils</code> - Test utils</li>
  </ul>
</details>

<details>
  <summary><code>lib</code> - Your smart contract dependencies, see preinstalled ones <a href="#installation">here</a>.</summary>
</details>

<details>
  <summary><code>.</code> -Top level files e.g the <code> Makefile</code></summary>
  <ul>
    <li>
      <summary><code>.gitignore</code> - Ignore any files you don't want to push to Git</summary>
    </li>
    <li>
      <summary><code>.gitmodules</code> - Git submodules configuration</summary>
    </li>
    <li>
      <summary><code>.lintstagedrc</code> - Configuration for lint-staged in Husky scripts</summary>
    </li>
    <li>
      <summary><code>.solhint.json</code> - <a href="https://github.com/protofire/solhint">Solhint</a> configuration</summary>
    </li>
    <li>
      <summary><code>.solhintignore</code> - Ignore any files you don't want Solhint to lint</summary>
    </li>
    <li>
      <summary><code>foundry.toml</code> - <a href="https://book.getfoundry.sh/reference/config.html">Foundry configuration</a></summary>
    </li>
    <li>
      <summary><code>Makefile</code> - Various commands, see <a href="#commands">here</a>.</summary>
    </li>
    <li>
      <summary><code>README.md</code> - This file!</summary>
    </li>
    <li>
      <summary><code>remappings.txt</code> - <a href="https://book.getfoundry.sh/projects/dependencies.html#remapping-dependencies">Configure import paths</a> for Solidity dependencies for Forge</summary>
    </li>
  </ul>

</details>

## Resources

Below are several resources that may be helpful for getting started with this boilerplate and extending it for your use cases.

#### Frontend

- [adrianmcli/web3-vs-ethers: Web3.js vs Ethers.js](https://github.com/adrianmcli/web3-vs-ethers)
- [Standardising login UX with web3modal](https://github.com/Web3Modal/web3modal)
- [spruceid/siwe: a sign-in authentication protocol (EIP-4361) for Web3](https://github.com/spruceid/siwe)
- [The original EIP-4361: Sign-In with Ethereum proposal](https://eips.ethereum.org/EIPS/eip-4361)
- [bytesbay/web3-token: authenticate users without JWTs](https://github.com/bytesbay/web3-token)
- [Impersonate as any wallet address into a Dapp](https://github.com/apoorvlathey/impersonator)

#### Smart Contract Testing

- [The Solcurity Standard](https://github.com/Rari-Capital/solcurity)
- [Utilities provided in ds-test](https://book.getfoundry.sh/reference/ds-test.html)
- [Examples using ds-test to write smart contract tests in Solidity](https://github.com/dapphub/ds-test/blob/master/demo/demo.sol)
- [Fuzzing smart contract tests with Foundry](https://github.com/gakonst/foundry/tree/master/forge#fuzzing-go-beyond-unit-testing)
- [Increasing verbosity of logs from `forge test`](https://github.com/gakonst/foundry/blob/master/cli/README.md#test)
- [Static Analysis with Slither](https://github.com/crytic/slither)
- [Symbolic Execution with Manticore](https://github.com/trailofbits/manticore)
- [Contract-level Property-based Testing with Echidna](https://github.com/crytic/echidna)
- [Function-level Property-based Testing with Scribble](https://github.com/ConsenSys/scribble)
- [crytic/building-secure-contracts: Guide to using Slither, Echidna, and Manticore for testing](https://github.com/crytic/building-secure-contracts)

#### Miscellaneous

- [Utilising pre- and post- npm hooks](https://docs.npmjs.com/cli/v8/using-npm/scripts)
- [Installing Dependencies using DappTools](https://github.com/dapphub/dapptools/tree/master/src/dapp#dapp-install)
- [Installing Dependencies using Foundry and Forge](https://github.com/gakonst/foundry/blob/master/cli/README.md#forge)
- [libevm/forge-example: Using custom deploy scripts](https://github.com/libevm/forge-example)
- [paulrberg/solidity-template: Developer Tooling for Solidity](https://github.com/paulrberg/solidity-template)
