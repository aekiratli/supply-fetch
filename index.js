const express = require('express');
const app = express();
const Web3 = require('web3')
let web3 = new Web3(
    new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/5abfb0d0480e43049a0fce761328a78f")
  );

const address = "0x091822f59d65a35bcdeb015135af37a7a8f1b3cd"
const abi = require('./abi.json')
const port = 5000
app.get('/', async (req, res) => {
    
    const instance = new web3.eth.Contract(abi, address);
    const test = await instance.methods.totalSupply().call()
    console.log(test)
    res.send(test);
});

app.listen(process.env.PORT() => {
   console.log(`Server is up`);
});
