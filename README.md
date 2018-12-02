# Star Notary dApp
Star Notary Decentralized Application using Ethereum Smart Contract | Project @ Udacity's Blockchain Developer Nanodegree


## Deploy to Rinkeby Public Test Network

Deploy smart contract with  Infura and Truffle.

`$ truffle deploy --network rinkeby`

```
truffle migrate --network rinkeby --reset --compile-all
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/StarNotary.sol...
Compiling openzeppelin-solidity/contracts/introspection/ERC165.sol...
Compiling openzeppelin-solidity/contracts/introspection/IERC165.sol...
Compiling openzeppelin-solidity/contracts/math/SafeMath.sol...
Compiling openzeppelin-solidity/contracts/token/ERC721/ERC721.sol...
Compiling openzeppelin-solidity/contracts/token/ERC721/IERC721.sol...
Compiling openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol...
Compiling openzeppelin-solidity/contracts/utils/Address.sol...
Writing artifacts to ./build/contracts
Using network 'rinkeby'.
Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0x5a0634b3aceea7da04265ab034211ac7936de0e34d1e7c8863d4fb3fd7f76134
  Migrations: 0xbbc292eb4344cb1299954b3ed901694dc88704ca
Saving successful migration to network...
  ... 0xda73ad3669328b5b950182b1dc146ce2eb195cd73afbc601190cda247a95a9bd
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Replacing StarNotary...
  ... 0xe0c4810151ead569cdd3c9cade64e16563a715b72ccbd1689ac9870e55ad36a8
  StarNotary: 0x2881e6588367cad0f203c6b9c465dc89132ef2fa
Saving successful migration to network...
  ... 0x310427424995fb755a4ec3b021bf1adb3cbffa115201373b1d52db86083ac61c
Saving artifacts...
```

## Smart Contract

Contract Hash: 0xe0c4810151ead569cdd3c9cade64e16563a715b72ccbd1689ac9870e55ad36a8
https://rinkeby.etherscan.io/tx/0xe0c4810151ead569cdd3c9cade64e16563a715b72ccbd1689ac9870e55ad36a8

Contract Address: 0x2881e6588367cad0f203c6b9c465dc89132ef2fa
https://rinkeby.etherscan.io/address/0x2881e6588367cad0f203c6b9c465dc89132ef2fa


## Execute createStar() function

`$ truffle console --network rinkeby`

`truffle(rinkeby)> StarNotary.at("0x2881e6588367cad0f203c6b9c465dc89132ef2fa").createStar("Hello Kitty", "Meow Meow", "1", "2", "3", 1, {from: "0xa7d2f3b62e8efb7b97f48da19d44f80998833b1f"})`

```
{ tx:
   '0x1070ce54835ec76c1caa1192e779d94d194777d9cd3c15ddcc71282a54d1f02d',
  receipt:
   { blockHash:
      '0x512fd8fd6d2cc96d3e111197b960a1298b692625aebea217d73fe77270573139',
     blockNumber: 3434862,
     contractAddress: null,
     cumulativeGasUsed: 224601,
     from: '0xa7d2f3b62e8efb7b97f48da19d44f80998833b1f',
     gasUsed: 200168,
     logs: [ [Object], [Object] ],
     logsBloom:
      '0x00000000000000000000000000000008000000040000000000000000000000000000000000000000000000000000000000000000000000000080000000040000000000000000000000000008000000080000000000040000000000000000000000000000020000000000000000000800000000000000000000100010000000000000080000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000080000000000000000000000000000002000000000000000000000000000000000000000000000000000060000001000000000000000000000000000000000000000000000000000000000000',
     status: '0x1',
     to: '0x2881e6588367cad0f203c6b9c465dc89132ef2fa',
     transactionHash:
      '0x1070ce54835ec76c1caa1192e779d94d194777d9cd3c15ddcc71282a54d1f02d',
     transactionIndex: 1 },
  logs:
   [ { address: '0x2881e6588367cad0f203c6b9c465dc89132ef2fa',
       blockHash:
        '0x512fd8fd6d2cc96d3e111197b960a1298b692625aebea217d73fe77270573139',
       blockNumber: 3434862,
       logIndex: 0,
       removed: false,
       transactionHash:
        '0x1070ce54835ec76c1caa1192e779d94d194777d9cd3c15ddcc71282a54d1f02d',
       transactionIndex: 1,
       event: 'Transfer',
       args: [Object] },
     { address: '0x2881e6588367cad0f203c6b9c465dc89132ef2fa',
       blockHash:
        '0x512fd8fd6d2cc96d3e111197b960a1298b692625aebea217d73fe77270573139',
       blockNumber: 3434862,
       logIndex: 1,
       removed: false,
       transactionHash:
        '0x1070ce54835ec76c1caa1192e779d94d194777d9cd3c15ddcc71282a54d1f02d',
       transactionIndex: 1,
       event: 'OwnStar',
       args: [Object] } ] }
```

## Execute putStarUpForSale() function

`$ truffle console --network rinkeby`

`truffle(rinkeby)> StarNotary.at("0x2881e6588367cad0f203c6b9c465dc89132ef2fa").putStarUpForSale(1, web3.toWei(.01, "ether"), {from: "0xa7d2f3b62e8efb7b97f48da19d44f80998833b1f"})`

```
{ tx:
   '0x9cd2897b95a257cef4279e5fc9354b8625ecc5d2b0ed76975e209731c2c31a79',
  receipt:
   { blockHash:
      '0x8479662650e3a8c792decee55ad277333894b2419459d31dafb799291b830955',
     blockNumber: 3434966,
     contractAddress: null,
     cumulativeGasUsed: 657568,
     from: '0xa7d2f3b62e8efb7b97f48da19d44f80998833b1f',
     gasUsed: 46246,
     logs: [ [Object] ],
     logsBloom:
      '0x00000000000000000000000000000008000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000001000000000000000000000000000000000000000000000000000000000',
     status: '0x1',
     to: '0x2881e6588367cad0f203c6b9c465dc89132ef2fa',
     transactionHash:
      '0x9cd2897b95a257cef4279e5fc9354b8625ecc5d2b0ed76975e209731c2c31a79',
     transactionIndex: 6 },
  logs:
   [ { address: '0x2881e6588367cad0f203c6b9c465dc89132ef2fa',
       blockHash:
        '0x8479662650e3a8c792decee55ad277333894b2419459d31dafb799291b830955',
       blockNumber: 3434966,
       logIndex: 10,
       removed: false,
       transactionHash:
        '0x9cd2897b95a257cef4279e5fc9354b8625ecc5d2b0ed76975e209731c2c31a79',
       transactionIndex: 6,
       event: 'StarOnSale',
       args: [Object] } ] }
```


## Update the front-end web app to interact with smart contract

Utilize MetaMask on Rinkeby Test Network

<img width="1204" alt="screen shot 2018-12-02 at 1 39 03 am" src="https://user-images.githubusercontent.com/4667129/49338313-5bfd5100-f5d4-11e8-9e61-e706b8b8c405.png">
