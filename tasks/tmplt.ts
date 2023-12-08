import { types, task } from 'hardhat/config'
import { Spinner } from '../scripts/spinner'
import cliSpinner from 'cli-spinners'
import { allowedChainsConfig } from '@/config/config'

const spinner: Spinner = new Spinner(cliSpinner.triangle)

export type AnyPropDetails = {
  accountIndex: number
}

task('my-task-name', 'task desc')
  .addParam('xAdd', 'param desc')
  .addOptionalParam(
    'accountIndex',
    'Account index to use for deployment',
    0,
    types.int
  )
  .setAction(async ({ accountIndex }: AnyPropDetails, hre) => {
    spinner.start()

    try {
      const chainConfig = allowedChainsConfig[+hre.network.name]
      if (!chainConfig) {
        spinner.stop()
        throw new Error('Chain config not found')
      }

      const provider = new hre.ethers.JsonRpcProvider(
        chainConfig.rpcUrls.default.http[0],
        chainConfig.id
      )

      const deployer = new hre.ethers.Wallet(
        chainConfig.accounts[accountIndex],
        provider
      )

      console.log(`ℹ️ Running`)
      spinner.stop()
      console.log(`✅ Success`)
    } catch (error) {
      spinner.stop()
      console.log(error)
      console.log(`❌ Failed`)
    }
  })
