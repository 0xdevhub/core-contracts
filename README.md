# 0xdevhub - core contracts

[![Run Tests](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml/badge.svg)](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml)

Please, read [extra guides here](guides-examples.md).

## Networks

- Avalanche Fuji (43113)
- Optimism Goerli (420)

## Contracts

### Avalanche Fuji (43113)

- AccessManagement: 0x7953C478A5F5d53C263Bd1251BfC4c418d8C5568 (✅ verified)
- Hub: 0xE69cEa099bde1f729a13C4D9eD41E0E6C5b8873b (✅ verified)

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
