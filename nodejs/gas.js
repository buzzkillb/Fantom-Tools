const Web3 = require('web3');
var web3 = new Web3('https://rpc.ftm.tools');
web3.eth.getGasPrice(function(error, result) {
    console.log(result.toString(10));
    var gasPriceInGwei = web3.utils.fromWei(result, 'gwei');
    console.log(parseInt(gasPriceInGwei) + " gwei");
});
