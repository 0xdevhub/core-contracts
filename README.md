# 0xdevhub - core contracts

[![Run Tests](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml/badge.svg)](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml)

## Networks

- Avalanche Fuji (43113)
- Arbitrum Rinkeby (soon)

## Contracts

#### AccessManagement

- Avalanche Fuji: 0x6815547453B8731A39eB420C11E45D6c685a677C

#### Hub

- Avalanche Fuji: 0xd3975F5c825DDb608d32DDdF89d072c524470414

#### Deploying contracts

it will deploy both contracts, hub and access management

```shell
/// eg: where 43113 is the network id
pnpm release --network 43113
```

#### Verifing contracts

```shell
/// eg:
pnpm verify:hub --network [networkid] [hubAddress] ["AccessManagementAddress"]
```

#### Adding new app

```shell
/// eg:
pnpm hardhat add-new-app --hub-address [hubAddress] --app-address [appAddress] --name ["appName"] --description ["appDescription"] --network [networkId]
```

## Getting Started

```shell
pnpm compile
pnpm typechain
pnpm node
pnpm deploy:localhost
pnpm deploy:mumbai
```

## Available scrips by `dlx hardhat`

```shell
dlx hardhat help
REPORT_GAS=true dlx hardhat test
```

## Testing

```bash
pnpm test
pnpm test:watch
pnpm test:coverage
```
