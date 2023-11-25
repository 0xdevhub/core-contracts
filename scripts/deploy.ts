import {
  deployContract,
  getContractAddress,
  getContractAt,
  getNetwork,
  getSigners
} from './utils'

import { DEVELOPER_ROLE, DEVELOPER_ROLE_DELAY } from './constants'
import { Spinner } from './spinner'
import cliSpinner from 'cli-spinners'

const spinner: Spinner = new Spinner(cliSpinner.dots)

async function main() {
  console.log(`ℹ️  Deploying...`)

  spinner.start()
  const { chainId } = await getNetwork()
  console.log(`ℹ️  chainId: ${chainId}`)

  const [owner] = await getSigners()
  console.log(`ℹ️  owner: ${owner.address}`)

  /// deploy access management contract

  console.log(`ℹ️  Deploying access management...`)

  const accessManagement = await deployContract(
    'AccessManagement',
    owner.address
  )
  const accessManagementAddress = await getContractAddress(accessManagement)
  console.log(`✅ Access management deployed: ${accessManagementAddress}`)

  // grant role to developer
  console.log(`ℹ️  granting developer role...`)

  const accessManagementContract = await getContractAt(
    'AccessManagement',
    accessManagementAddress
  )

  await accessManagementContract.grantRole(
    DEVELOPER_ROLE,
    owner.address,
    DEVELOPER_ROLE_DELAY
  )

  console.log(`✅ developer role granted`)

  // deploy hub contract
  console.log(`ℹ️  Deploying hub...`)
  const hubContract = await deployContract('Hub', accessManagementAddress)
  const hubAddress = await getContractAddress(hubContract)
  console.log(`✅ Hub deployed: ${hubAddress}`)

  spinner.stop()

  // Todo: verify contracts
  // Todo: create task to publish new app
}

main().catch((error) => {
  console.error(error)
  spinner.stop()
  process.exitCode = 1
})
