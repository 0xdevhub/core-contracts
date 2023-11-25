import dotenv from 'dotenv'
dotenv.config()

import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-solhint'
import 'tsconfig-paths/register'

import { allowedChainsConfig } from '@/config/networks'

const config: HardhatUserConfig = {
  networks:
    process.env.NODE_ENV !== 'development'
      ? {
          avalancheFuji: {
            url: allowedChainsConfig['43113'].rpcUrls.default.http[0],
            accounts: allowedChainsConfig['43113'].accounts
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
  }
}

export default config
