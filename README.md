# 0xdevhub - core contracts

[![Run Tests](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml/badge.svg)](https://github.com/0xdevhub/core-contracts/actions/workflows/tests.yml)

Please, read [extra guides here](guides-examples.md).

## Networks

- Avalanche Fuji (43113)
- Mumbai (80001)

## Contracts

### Avalanche fuji

- [AccessManagement](https://testnet.snowtrace.dev/address/0xA77Bb3B4aC78198208922A6c919921b274be0F9c)
- [Hub](https://testnet.snowtrace.dev/address/0x68000Cd65cCCd59F5DB32e74115Ead44C391A391)

### Mumbai

- [AccessManagement](https://mumbai.polygonscan.com/address/0x52Ef16e646A21150b6f8D7A41F0D6A9483EC2196)
- [Hub](https://mumbai.polygonscan.com/address/0xf327D8cEEf6A89DF6081d046697842C7153e1B2c)

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
