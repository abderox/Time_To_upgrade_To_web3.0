
const hre = require("hardhat");

const main = async()=>{
  
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("transactions deployed to: ", transactions.address);
}


const runIT = async() =>{
  try {
    await main();
     process.exit(0);
  } catch (error) {
    console.log(error)
     process.exit(1);
  }
}

runIT();

