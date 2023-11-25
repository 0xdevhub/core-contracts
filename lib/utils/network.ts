export type ChainRpcUrls = {
  http: string[]
}

export const getChainRPCById = (network: number) => {
  const HTTP_RPC = `PUBLIC_NETWORK_${network}_HTTP_RPC`

  const config: ChainRpcUrls = {
    http: [process.env[HTTP_RPC]!]
  }

  return config
}
