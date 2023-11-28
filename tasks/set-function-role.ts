import { task } from 'hardhat/config'
import { Spinner } from '../scripts/spinner'
import cliSpinner from 'cli-spinners'

const spinner: Spinner = new Spinner(cliSpinner.triangle)

export type SetFunctionRole = {
  accessManagementAddress: string
  targetAddress: string
  role: number
  bytes4Selector: string
}

task('set-function-role', 'Set function role to target')
  .addParam(
    'accessManagementAddress',
    'The address of the access management contract'
  )
  .addParam('targetAddress', 'The address of the target contract')
  .addParam('role', 'The role to set')
  .addParam('bytes4Selector', 'The bytes4 selector of the function')
  .setAction(
    async (
      {
        accessManagementAddress,
        targetAddress,
        role,
        bytes4Selector
      }: SetFunctionRole,
      hre
    ) => {
      spinner.start()

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
    }
  )
