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

Or you can user the local accounts and import they on Metamask:
- start ganache: `ganache`
- check the door and set on app.js(line 44)
- connect Metamask on local network
    - [video](https://www.google.com/search?q=ganache+on+metamask&rlz=1C1GCEU_enPL1041__1041&oq=ganache+on+metamask&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHtIBCDkwODJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#kpvalbx=_uOrcZIzbKpGrwPAP26au0As_33)
- start the server: `npm run dev`