import { types, task } from 'hardhat/config'
import { Spinner } from '../scripts/spinner'
import cliSpinner from 'cli-spinners'
import { allowedChainsConfig } from '@/config/config'

const spinner: Spinner = new Spinner(cliSpinner.triangle)

export type SetFunctionRole = {
  accessManagementAddress: string
  targetAddress: string
  role: number
  accountIndex: number
}

task('grant-role', 'Set function role to target')
  .addParam(
    'accessManagementAddress',
    'The address of the access management contract'
  )
  .addParam('targetAddress', 'The address of the target contract')
  .addParam('role', 'The role to set')
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
        accountIndex,
        targetAddress,
        role
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

        console.log(`ℹ️ Granting role ${role} to ${targetAddress}`)
        const accessManagementContract = await hre.ethers.getContractAt(
          'AccessManagement',
          accessManagementAddress,
          deployer
        )

        await accessManagementContract.grantRole(role, targetAddress, 0)
        spinner.stop()
        console.log(`✅ Role ${role} granted to ${targetAddress}`)
      } catch (error) {
        spinner.stop()
        console.log(error)
        console.log(`❌ Grant role failed`)
      }
    }
  )
