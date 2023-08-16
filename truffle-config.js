const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "5acf8f5d12164dfc8a6bae26f6470508";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const PROJECT_ID = infuraKey;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${PROJECT_ID}`),
      network_id: "11155111",
      gas: 4465030,
      confirmations: 2,
      timeoutBlocks: 200
    },
  }
};
