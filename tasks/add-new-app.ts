import { task, types } from 'hardhat/config'
import { Spinner } from '../scripts/spinner'
import cliSpinner from 'cli-spinners'
import { allowedChainsConfig } from '@/config/config'

const spinner: Spinner = new Spinner(cliSpinner.triangle)

export type AddNewAppTask = {
  hubAddress: string
  appAddress: string
  name: string
  description: string
  accountIndex: number
}

task('add-new-app', 'Add new app to the hub')
  .addParam('hubAddress', 'The address of the hub')
  .addParam('appAddress', 'The address of the app')
  .addParam('name', 'The name of the app')
  .addParam('description', 'The description of the app')
  .addOptionalParam(
    'accountIndex',
    'Account index to use for deployment',
    0,
    types.int
  )
  .setAction(
    async (
      {
        hubAddress,
        appAddress,
        name,
        description,
        accountIndex
      }: AddNewAppTask,
      hre
    ) => {
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

        const hubContract = await hre.ethers.getContractAt(
          'Hub',
          hubAddress,
          deployer
        )

        const payload = {
          address: appAddress,
          name,
          description
        } as {
          address: string
          name: string
          description: string
        }

        console.log(`ℹ️  Adding app to hub...`)

        await hubContract.addApp(
          payload.address,
          payload.name,
          payload.description
        )

        spinner.stop()
        console.log(`✅ App ${name} added to hub ${hubAddress}`)
      } catch (error) {
        spinner.stop()
        console.log(error)
        console.log(`❌ Add new app failed`)
      }
    }
  )
