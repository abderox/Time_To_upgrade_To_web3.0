require("@nomiclabs/hardhat-waffle");
//https://eth-ropsten.alchemyapi.io/v2/zabF_NnkBWqBJxUdoGloIdmXKa8XNNgG


// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/zabF_NnkBWqBJxUdoGloIdmXKa8XNNgG',
      accounts:['4bf2f825b504f0e7890e6074ea3aa00548dde41d4f2d4536ffd19bf6f3bf1489']
    }
  }
};
