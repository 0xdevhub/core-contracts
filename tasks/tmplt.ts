import { task } from 'hardhat/config'
import { Spinner } from '../scripts/spinner'
import cliSpinner from 'cli-spinners'

const spinner: Spinner = new Spinner(cliSpinner.triangle)

export type AnyPropDetails = {}

task('my-task-name', 'task desc')
  .addParam('xAdd', 'param desc')
  .setAction(async ({}: AnyPropDetails, hre) => {
    spinner.start()

    console.log(`ℹ️ `)
    spinner.stop()
    console.log(`✅ }`)
  })
