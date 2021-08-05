const BonusToken = artifacts.require('BonusToken.sol');
const LiquidityMigrator = artifacts.require('LiquidityMigrator.sol');

module.exports = async function (deployer, network, accounts) {
    const [admin, _] = accounts;
    if (network === 'bscTestnet' || network === 'develop') {
        await deployer.deploy(BonusToken);
        const bonusToken = await BonusToken.deployed();
        await deployer.deploy(
            LiquidityMigrator,
            admin,
            admin,
            admin,
            admin,
            bonusToken.address
        );
        const liquidityMigrator = await LiquidityMigrator.deployed();
        await bonusToken.setLiquidator(liquidityMigrator.address);
    }

};
