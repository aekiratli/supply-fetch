const express = require('express');
const app = express();
const Web3 = require('web3')
const PORT = process.env.PORT || 3000;
 let web3 = new Web3(
     new Web3.providers.HttpProvider("https://data-seed-prebsc-2-s3.binance.org:8545/")
   );

 const address = "0xcdb319059e5e5b8c648b627bf487587e5bf16a86"
 const abi = require('./abi.json')
app.get('/', async (req, res) => {
    
     const instance = new web3.eth.Contract(abi, address);
     const supply = await instance.methods.totalSupply().call()
     
     res.send(supply);
    
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
//  app.listen(3000, () => {
//      console.log(`Our app is running on port 3000`);
//  });
