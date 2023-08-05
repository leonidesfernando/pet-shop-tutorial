# PET-SHOP Tutorial
This is a simple project created using [this guide](https://trufflesuite.com/guides/pet-shop/) to learn a have some practice with smart contracts.


## Compile and check
To compile and run the tests on this project you have to:
- compile: `truffle compile`
- startup Ganache: `ganache-cli` or if you have the UI version start this one
- `truffle test`

## Execute

To execute, you must migrate and start the server

<sub>This project is linked with a specifc MetaMask account. If you want to change go to the _`truffle-config.js`_ put your configuartion.</sub>

- migration: `truffle migrate --network sepolia`
- start server: `npm run dev`