/*Use a license depending on your project.*/
//SPDX=License-Identifier: UNLICENSED

// code is written for Solidity version 0.4.16, or a newer version
pragma solidity ^0.8.0;

// Built in Hardhat interactive Javascript console
import "hardhat/console.sol";

// Main solidity contract
contract PickupLines {
    // Solidity event that fires when a new line is submitted
    event NewPickUpLine(address indexed from, uint256 timestamp, string line);

    // Data members
    uint256 private seed; //seed data
    uint256 totalLines; //total lines data
    mapping(address => bool) hasWrote; //Map of all addresses with a line submitted

    //A composite data member for a pick up line
    struct PickupLine {
        address writer;
        string line;
        uint256 timestamp;
    }
    // Array of all pick up lines submitted
    PickupLine[] pickuplines;

    constructor() payable {
        console.log("I am the Cheesy PickUp Lines' smart contract!");
    }

    //Function for adding a new line to the contract
    function newLine(string memory _line) public {
        // Adding a new pickup line to our blockchain
        totalLines += 1;
        pickuplines.push(PickupLine(msg.sender, _line, block.timestamp));
        hasWrote[msg.sender] = true;
        emit NewPickUpLine(msg.sender, block.timestamp, _line);
    }
}
