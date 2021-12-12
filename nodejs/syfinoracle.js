//Gets Chainlink FTM USDC Price and SpookySwap LP FTM USDC Price
const Web3 = require('web3');
var web3 = new Web3('https://rpc.ftm.tools');

const syfinPriceOracleContract = "0x8fBE84d284D1614eaDc50EE69120Ec4f7f98cEd8"
const ftmUSDCSpookyLP = "0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c"

syfinPriceOracleABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getLatestFTMPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pairAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getLatestTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

async function syfinOracle() {
	var contract = new web3.eth.Contract(syfinPriceOracleABI, syfinPriceOracleContract);
	const linkOracleUSDC = await contract.methods.getLatestFTMPrice().call();
	console.log("Oracle: $" + linkOracleUSDC / 1e8);
	const linkSpookyFTMUSDC = await contract.methods.getLatestTokenPrice(ftmUSDCSpookyLP, 1).call();
	console.log("Spooky LP: $" + linkSpookyFTMUSDC / 1e6);
};

syfinOracle();
