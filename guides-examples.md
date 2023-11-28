## Examples to setting contract roles

### 420 (goerli)

#### grant role (receive message)

```shell
pnpm hardhat grant-role --network 420 --access-management-address 0xd9b59f89A8FEF69d2Dbc028C9f00087432589F72 --target-address 0xeb52e9ae4a9fb37172978642d4c141ef53876f26 --role 3

pnpm hardhat grant-role --network 420 --access-management-address 0xd9b59f89A8FEF69d2Dbc028C9f00087432589F72 --target-address 0xfCc1fd12f71a23782Eef2AbbbCaC50c121c9b4Df --role 2

pnpm hardhat grant-role --network 420 --access-management-address 0xd9b59f89A8FEF69d2Dbc028C9f00087432589F72 --target-address 0xA5fBbb4B142A8062b37A2f2CbeBe8c67F65C9978 --role 1

```

#### grant function role (receive message)

```shell
pnpm hardhat set-function-role --network 420 --access-management-address 0xd9b59f89A8FEF69d2Dbc028C9f00087432589F72 --target-address 0xfCc1fd12f71a23782Eef2AbbbCaC50c121c9b4Df --role 3 --bytes4-selector 0x85572ffb

pnpm hardhat set-function-role --network 420 --access-management-address 0xd9b59f89A8FEF69d2Dbc028C9f00087432589F72 --target-address 0xA5fBbb4B142A8062b37A2f2CbeBe8c67F65C9978 --role 2 --bytes4-selector 0x31b85566
```

### grant function role (send message)

```shell
pnpm hardhat set-function-role --network 420 --access-management-address 0xd9b59f89A8FEF69d2Dbc028C9f00087432589F72 --target-address 0xfCc1fd12f71a23782Eef2AbbbCaC50c121c9b4Df --role 1 --bytes4-selector 0xa1d3f732
```

=======================================================================================

### 43113 (fuji)

#### grant role (receive message)

```shell
pnpm hardhat grant-role --network 43113 --access-management-address 0x091BEbE42637D6c283f88ceF478Cab8581293f73 --target-address 0x554472a2720e5e7d5d3c817529aba05eed5f82d8 --role 3

pnpm hardhat grant-role --network 43113 --access-management-address 0x091BEbE42637D6c283f88ceF478Cab8581293f73 --target-address 0x99d73bDEB878197F3BeA347E86fD69541BeB14E4 --role 2

pnpm hardhat grant-role --network 43113 --access-management-address 0x091BEbE42637D6c283f88ceF478Cab8581293f73 --target-address 0xF793d3D4372935C236422DFA9cd958ec14C80F55 --role 1
```

#### grant function role (receive message)

```shell
pnpm hardhat set-function-role --network 43113 --access-management-address 0x091BEbE42637D6c283f88ceF478Cab8581293f73 --target-address 0x99d73bDEB878197F3BeA347E86fD69541BeB14E4 --role 3 --bytes4-selector 0x85572ffb

pnpm hardhat set-function-role --network 43113 --access-management-address 0x091BEbE42637D6c283f88ceF478Cab8581293f73 --target-address 0xF793d3D4372935C236422DFA9cd958ec14C80F55 --role 2 --bytes4-selector 0x31b85566
```

### grant function role (send message)

```shell
pnpm hardhat set-function-role --network 43113 --access-management-address 0x091BEbE42637D6c283f88ceF478Cab8581293f73 --target-address 0x99d73bDEB878197F3BeA347E86fD69541BeB14E4 --role 1 --bytes4-selector 0xa1d3f732
```

=======================================================================================
