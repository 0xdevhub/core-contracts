import { task, types } from 'hardhat/config'
import { Spinner } from '../scripts/spinner'
import cliSpinner from 'cli-spinners'
import { allowedChainsConfig } from '@/config/config'

const spinner: Spinner = new Spinner(cliSpinner.triangle)

export type SetFunctionRole = {
  accessManagementAddress: string
  targetAddress: string
  role: number
  bytes4Selector: string
  accountIndex: number
}

task('set-function-role', 'Set function role to target')
  .addParam(
    'accessManagementAddress',
    'The address of the access management contract'
  )
  .addParam('targetAddress', 'The address of the target contract')
  .addParam('role', 'The role to set')
  .addParam('bytes4Selector', 'The bytes4 selector of the function')
  .addOptionalParam(
    'accountIndex',
    'Account index to use for deployment',
    0,
    types.int
  )
  .setAction(
    async (
      {
        accessManagementAddress,
        targetAddress,
        role,
        accountIndex,
        bytes4Selector
      }: SetFunctionRole,
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

        console.log(
          `ℹ️ Granting function ${bytes4Selector} role ${role} to ${targetAddress}`
        )
        const accessManagementContract = await hre.ethers.getContractAt(
          'AccessManagement',
          accessManagementAddress
        )

        await accessManagementContract.setTargetFunctionRole(
          targetAddress,
          [bytes4Selector],
          role
        )
        spinner.stop()

        console.log(
          `✅Function ${bytes4Selector} role ${role} granted to ${targetAddress}`
        )
      } catch (error) {
        spinner.stop()
        console.log(error)
        console.log(`❌ Grant function role failed`)
      }
    }
  )
