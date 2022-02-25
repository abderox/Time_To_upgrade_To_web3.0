// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.4.17;
   

contract WorkingWithvariables {

    uint256 public _vari;   

    function setanyval(uint256 _val) public {
        _vari = _val;

    }

    function getval() public view returns (uint256) {
        return _vari;
    }

    function incrementcount() public {
        _vari++;
    }

    function decrementcount() public {
        _vari--;
    }
    
    address public myaddress;

    function setaddresss(address _adr) public {
        myaddress = _adr;
    }

    function getbalanceOfAddress() public view returns(uint) {
        return myaddress.balance;
    }

    string public str ="adelhadi";

    function setString(string memory _str) public {
        str = _str;
    }
}