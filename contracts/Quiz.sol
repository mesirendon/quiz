// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Quiz {
  address public owner;
  mapping(string => Session) public sessions;

  constructor() public {
    owner = msg.sender;
  }

  struct Session {
    string code;
  }

  function createSession(string memory _code) public {
    sessions[_code] = Session({code: _code});
  }

  function getSession(string memory _code) public view returns(string memory) {
    return sessions[_code].code;
  }
}
