import { task } from 'hardhat/config'
import { Spinner } from '../scripts/spinner'
import cliSpinner from 'cli-spinners'

const spinner: Spinner = new Spinner(cliSpinner.triangle)

export type SetFunctionRole = {
  accessManagementAddress: string
  targetAddress: string
  role: number
}

task('grant-role', 'Set function role to target')
  .addParam(
    'accessManagementAddress',
    'The address of the access management contract'
  )
  .addParam('targetAddress', 'The address of the target contract')
  .addParam('role', 'The role to set')
  .setAction(
    async (
      { accessManagementAddress, targetAddress, role }: SetFunctionRole,
      hre
    ) => {
      spinner.start()

      console.log(`ℹ️ Granting role ${role} to ${targetAddress}`)
      const accessManagementContract = await hre.ethers.getContractAt(
        'AccessManagement',
        accessManagementAddress
      )

      await accessManagementContract.grantRole(role, targetAddress, 0)
      spinner.stop()
      console.log(`✅ Role ${role} granted to ${targetAddress}`)
    }
  )
