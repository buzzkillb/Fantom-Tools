from web3 import Web3
import json

# Grab Prices from Syfin Price Oracle Contract
# https://syfinance.gitbook.io/sy-finance/syf-price-oracle
# Public RPC's
# https://rpcapi.fantom.network
# https://rpc.ftm.tools/

rpc_url = "https://rpc.ftm.tools/"
web3 = Web3(Web3.HTTPProvider(rpc_url))

syfinPriceOracleContract = "0x8fBE84d284D1614eaDc50EE69120Ec4f7f98cEd8"
syfinPriceOracleABI = json.loads('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getLatestFTMPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pairAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getLatestTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')

# Returns FTM Price in USD formatted for / 1e8
syfinPriceOracle = web3.eth.contract(address=syfinPriceOracleContract, abi=syfinPriceOracleABI)
latestFTMPrice = syfinPriceOracle.functions.getLatestFTMPrice().call()
print(latestFTMPrice/100000000)

# Returns token 0 current amount vs token 1 from the Liquidity Pool address and amount of coin, recommended 1.
# Any LP pair address that is based off Uniswap V2 can be queried from this function.
# USDC-FTM 0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c
# Must be Checksummed address!!!
amountOfCoin = 1
pairContract = "0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c"
latestPairPrice = syfinPriceOracle.functions.getLatestTokenPrice(pairContract, amountOfCoin).call()
print(web3.fromWei(latestPairPrice, 'mwei'))
