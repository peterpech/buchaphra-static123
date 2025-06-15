import { ethers } from "hardhat";

async function main() {
  const AmuletNFT = await ethers.getContractFactory("AmuletNFT");
  const contract = await AmuletNFT.deploy();
  await contract.deployed();
  console.log("AmuletNFT deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
