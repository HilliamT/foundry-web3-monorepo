// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

// Credits to https://github.com/adrianmcli/web3-vs-ethers
contract Counter {
    uint count = 0;

    function increment() public {
        count = count + 1;
    }

    function getCount() public view returns (uint) {
        return count;
    }
}