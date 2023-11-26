import { getContractAt } from '@/scripts/utils'
import { task } from 'hardhat/config'
import { Spinner } from '../scripts/spinner'
import cliSpinner from 'cli-spinners'

const spinner: Spinner = new Spinner(cliSpinner.triangle)

task('add-new-app', 'Add new app to the hub')
  .addParam('hubAddress', 'The address of the hub')
  .addParam('appAddress', 'The address of the app')
  .addParam('name', 'The name of the app')
  .addParam('description', 'The description of the app')
  .setAction(async ({ hubAddress, appAddress, name, description }, hre) => {
    spinner.start()

    /// get hub contract
    const hubContract = await hre.ethers.getContractAt('Hub', hubAddress)

    // /// create payload
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

    /// call addApp with app
    await hubContract.addApp(payload.address, payload.name, payload.description)

    console.log(`✅ App ${name} added to hub ${hubAddress}`)
    spinner.stop()
  })
