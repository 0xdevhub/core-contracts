import { getChainRPCById } from '@/lib/utils/network'
import { merge, reduce } from 'lodash'
import { evmAccounts } from './accounts'
import { avalancheFuji } from './chains'
import { Chain } from './types'

export const avalancheFujiChain: Chain = merge(avalancheFuji, {
  accounts: evmAccounts,
  rpcUrls: {
    protocol: getChainRPCById(avalancheFuji.id)
  }
})

export const allowedChains = [avalancheFujiChain]

export const allowedChainsConfig = reduce(
  allowedChains,
  (acc, chain: Chain) => {
    acc[chain.id] = chain

    return acc
  },
  {} as { [key: number]: Chain }
)
