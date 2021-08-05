pragma solidity ^0.8.0;
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract BonusToken is ERC20{
    address public admin;
    address public liquidator;
    constructor() ERC20('Bonus Token', 'BTK') public {
        admin = msg.sender;
    }

    function setLiquidator(address _liquidator) external {
        require(msg.sender == admin, 'ONLY ADMIN');
        liquidator = _liquidator;
    }

    function mint(address to, uint amount) public {
        require(msg.sender == liquidator, 'ONLY LIQUIDATOR');
        _mint(to, amount);
    }
}
