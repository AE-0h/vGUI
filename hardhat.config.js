require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.1",
  networks:{
    goerli:{
      url: process.env.GOERLI_RPC,
      accounts: [process.env.PRIV_KEY],
    }

  }, 
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }

};
