export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
export const CONTRACT_ABI = [
  "function mint(address to, string tokenURI) public returns (uint256)",
  "function tokenIdCounter() view returns (uint256)",
];
