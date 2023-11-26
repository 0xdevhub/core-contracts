import dotenv from 'dotenv'
dotenv.config()

import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-verify'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-solhint'
import 'tsconfig-paths/register'
import './tasks'

import { allowedChainsConfig, avalancheFujiChain } from '@/config/networks'

const config: HardhatUserConfig = {
  networks:
    process.env.NODE_ENV !== 'development'
      ? {
          [avalancheFujiChain.id]: {
            url: allowedChainsConfig[avalancheFujiChain.id].rpcUrls.default
              .http[0],
            accounts: allowedChainsConfig[avalancheFujiChain.id].accounts
          }
        }
      : {
          localhost: {
            url: 'http://127.0.0.1:8545'
          },
          hardhat: {
            // See its defaults
          }
        },
  solidity: {
    version: '0.8.21',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800
      }
    }
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v6'
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY!,
      /// eg: pnpm hardhat verify --contract contracts/Hub.sol:Hub --network 43113 0x53E13Dd84Dc418095c31655573504F9A588F9159 "0x1987F5A465c27dD03d25a029d66a3eD800228EC9"
      avalancheFujiTestnet: process.env.AVALANCHE_FUJI_API_KEY!
    }
  }
}

export default config
