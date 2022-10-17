const hre = require("hardhat");

async function main() {
    const vGUI = await hre.ethers.getContractFactory("vGUI");
    const _vGUI = await vGUI.deploy("0xf2edF1c091f683E3fb452497d9a98A49cBA84666", "SPuGAR", "SG");
    await _vGUI.deployed();

    console.log("Vault GUI deployed to:", _vGUI.address);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


