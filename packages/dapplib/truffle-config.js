require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth pulse color good argue surge strong'; 
let testAccounts = [
"0x556902a790e4c017f3188fa6da381bb78dd417bb99d3762cdc71dd839033a448",
"0xa6906916c387830324c61442628d387b793ac7532bebf4172df5c4fe3a1cb3fa",
"0x6b8ec0d53684edb4b99489aa05473f2c3396ed308d8649cbaa426744b5636c43",
"0xd5872fe7575ada72fb6d8681c54c1520632185641af805fc38f49951eafab9b4",
"0x45e4f7caea0c8fb7c66f5df127d69daa30f9db352a9d9add80fbf27c91e22c42",
"0xf4074595940b2ef00866154bc601b38a5f1153b582cf915223a69274ea59597e",
"0x4fee62971c9d2f53ba891641cfa67f3946763dd686f5a64ad6bb4f95d67331df",
"0x5b90e654589c8f3a9663049e426c5c7fd14849554f3cbc7e518e27bda9bc22b5",
"0xd65f07913a510d459eb9e6baa8a9395fdb2ec3ddaaad72f0bc001250d95765f5",
"0x55a9f0dd8d2483588fcb31c01cd84d97928e4a53c6b7788db3b7d2b47df4a9a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

