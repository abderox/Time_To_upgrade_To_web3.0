//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transactions {

    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp,  string account, string keyword);
  
    struct TransferInfo{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string account;
        string keyword;
    }

    TransferInfo[] transactions;

    function transfer(address payable _adr_to, uint amount, string memory message, string memory account, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferInfo(msg.sender,_adr_to,amount,message,block.timestamp,account,keyword));
        emit Transfer(msg.sender,_adr_to,amount,message,block.timestamp,account,keyword);
    }

    function getAllTransactions() public view returns (TransferInfo[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

}
