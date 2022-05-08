/* The `main` function to deploy contract locally */
const main = async () => {
    /* Getting deployer's address.*/
    const [deployer] = await hre.ethers.getSigners();

    /* Getting deployer's ETH balance*/
    const accountBalance = await deployer.getBalance();

    /*Logging the Deployer's address and the balance.*/
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    /*Deploying the contract.*/
    const contracts = await hre.ethers.getContractFactory("PickupLines");
    const contract = await contracts.deploy();
    await contract.deployed();

    /*Logging the address of the deployed contract.*/
    console.log("PickupLines address: ", contract.address);
};

/* A try-catch block for our `main` function*/
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

};

/* Running the `runMain` function.*/
runMain();