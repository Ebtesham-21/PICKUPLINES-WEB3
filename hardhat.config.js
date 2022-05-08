//This is my alchemy api url that I found in alchemy dashboard.
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url:"https://eth-rinkeby.alchemyapi.io/v2/gVSrN_4v4fFDXR1r_21hPTJfPH_KSd3I",
      accounts: ["dec5da94ec995dd31428b61f7f7c4f8304c27e066241b62cbbb8556e3df3fd00"]
    },
  },
};