// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {BaseTest} from "./base/BaseTest.sol";
import {Counter} from "../Counter.sol";

contract CounterTest is BaseTest {
    function setUp() public {}

    function testIncrementCounter() public {
        Counter counter = new Counter();
        require(counter.getCount() == 0, "Counter should be 0");
        counter.increment();
        require(counter.getCount() == 1, "Counter should be 1");
    }
}
