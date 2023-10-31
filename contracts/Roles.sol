// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import {IRoles, MANAGER_ROLE} from "./interfaces/IRoles.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Roles is AccessControl {
    modifier OnlyManager() {
        if (!isManager(msg.sender)) {
            revert IRoles.Roles_NotRoleManager();
        }
        _;
    }

    constructor() {
        _setManagerRole(msg.sender);
    }

    function _setManagerRole(address _address) internal {
        _grantRole(MANAGER_ROLE, _address);
    }

    function isManager(address _address) public view returns (bool) {
        return hasRole(MANAGER_ROLE, _address);
    }
}
