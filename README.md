# 0xdevhub - core contracts

[![Run Tests](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml/badge.svg)](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml)

Please, read [extra guides here](guides-examples.md).

## Networks

- Avalanche Fuji (43113)
- Optimism Goerli (420)

## Contracts

### Avalanche Fuji (43113)

- AccessManagement: 0x091BEbE42637D6c283f88ceF478Cab8581293f73 (✅ verified)
- Hub: 0xA5fBbb4B142A8062b37A2f2CbeBe8c67F65C9978 (✅ verified)

### Optimism Goerli (420)

- AccessManagement: 0xd9b59f89A8FEF69d2Dbc028C9f00087432589F72 (✅verified)
- Hub: 0x78a321E00Be5bf8Df399FCE76D92fd5C900638c9 (✅verified)

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
