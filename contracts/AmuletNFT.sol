// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AmuletNFT is ERC721URIStorage, Ownable {
    uint256 public tokenIdCounter;

    constructor() ERC721("AmuletNFT", "AMT") {}

    function mint(address to, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 newId = tokenIdCounter + 1;
        tokenIdCounter = newId;
        _safeMint(to, newId);
        _setTokenURI(newId, tokenURI);
        return newId;
    }
}
