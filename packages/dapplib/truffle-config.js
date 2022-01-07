require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note soap company harvest loan fortune general'; 
let testAccounts = [
"0x1ecbc0294436cdc25edbf7cc9501a5328caebb3ff2579c961070ca438b133388",
"0x7ea4443f72d62a435ee85bbfd2c0475e37c01fd30ff61893e48895a696f361f2",
"0xbaa56dd739cff406dea54be561738773c8addc1f44998aa33d04cda395bb1e02",
"0x89af627ca941f7fd2e9883516a8662435a9260a97de60400a6f1f1bc3616fb0b",
"0x6a6239a744f849c7d9eb47430effc303eb583ab57d7f3a1f9b1473aba1c983d7",
"0x54b0f9f860cabf2e9b143d1163e44f09d0f117cc51a72af15ed0978c50593055",
"0x62ae1890a5461f17d4746035401f12d11cd46c3ac8e0dd93258b4dfba903544e",
"0xcecefcd26cf1ff21d3fbcc8114d229819dddc3d8ec2fa3acf7ae08ef78439cb0",
"0xc6548e807e824dc2d0e7057ecc61b07dfdf536ffc7166ad44b3b04620655e617",
"0x0871743b033f9b6522c14f776f4e2ae44536f3e1f13c9c58bd8a873ef3fc6ad9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


