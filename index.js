const express = require('express');
const app = express();
const Web3 = require('web3')
const PORT = process.env.PORT || 3000;
let web3 = new Web3(
    new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/5abfb0d0480e43049a0fce761328a78f")
  );

const address = "0x59a1a4663ffFA85f1086B7cf1a85f69b09040953"
const abi = require('./abi.json')
app.get('/', async (req, res) => {
    
    const instance = new web3.eth.Contract(abi, address);
    const test = await instance.methods.totalSupply().call()
    console.log(test)
    res.send(test);
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
