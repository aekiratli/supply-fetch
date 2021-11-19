const express = require('express');
const app = express();
const Web3 = require('web3')
const PORT = process.env.PORT || 3000;
let web3 = new Web3(
    new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/5abfb0d0480e43049a0fce761328a78f")
  );

const address = "0xBC07221C901ab3890493d8E82Ef4fa37993A8A65"
const abi = require('./abi.json')
app.get('/', async (req, res) => {
    
    const instance = new web3.eth.Contract(abi, address);
    const supply = await instance.methods.totalSupply().call()
    res.send(supply);
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
