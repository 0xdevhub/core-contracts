# 0xdevhub - core contracts

[![Run Tests](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml/badge.svg)](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml)

## Networks

- Avalanche Fuji (43113)
- Optimism Goerli (420)

## Contracts

#### AccessManagement

- Avalanche Fuji: 0x6815547453B8731A39eB420C11E45D6c685a677C
- Optimism Goerli: 0x0077124A6913476D37405E46fb41F1AA7ce255D7

#### Hub

- Avalanche Fuji: 0xd3975F5c825DDb608d32DDdF89d072c524470414
- Optimism Goerli: 0x747bC054Da9C824eC9f10D5DCEe0D8FA3BecDc38

## Getting Started

```shell
pnpm compile
pnpm typechain
pnpm node
pnpm release
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

## Deploying contracts

it will deploy both contracts, hub and access management

```shell
pnpm release --network 43113
```

## Verifing contracts

```shell
pnpm verify:hub --network [networkid] [hubAddress] ["AccessManagementAddress"]
```

## Adding new app

```shell
/// eg:
pnpm hardhat add-new-app --hub-address [hubAddress] --app-address [appAddress] --name ["appName"] --description ["appDescription"] --network [networkId]
```
