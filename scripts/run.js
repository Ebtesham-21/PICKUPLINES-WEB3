// The main function to run contract locally for an instance
const main = async () => {
    // Helper function to get the contract `PickupLines`
    const contracts = await hre.ethers.getContractFactory("PickupLines");

    // Deploying the contract for an 'instance'
    const contract = await contracts.deploy();
    await contract.deployed();

    // address of the deployed contract
    console.log("Contract deployed to:", contract.address);
};

// A try-catch block for our main function
const runMain = async () => {
    try {
        await main();
        process.exit(0); //exit Node process without error

    } catch (error) {
        console.log(error);
        process.exit(1); //exit Node process while indication 'Uncaught Fatal Exception' error

    }
};

// Running the `runMain` function
runMain();