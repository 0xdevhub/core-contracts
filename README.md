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

- AccessManagement: 0x483E5D5a59EeB5dB9c2AAC502Da40fab173b8DF2 (✅verified)
- Hub: 0x27aAd1692fD0F11C39c69c5412E52cCEf15045BD (✅verified)

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
