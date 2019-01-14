pragma solidity ^0.4.19;

contract Wallet {
	address public participantA;
	address public participantB;
	
	function Wallet(address _a, address _b) public {
		participantA = _a;
		participantB = _b;
	}
}

