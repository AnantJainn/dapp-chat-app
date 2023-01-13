require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  localhost: {
    chainId: 31337, // Chain ID should match the hardhat network's chainid
    accounts: [`${0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d}`, `${0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a}`],
  }
};