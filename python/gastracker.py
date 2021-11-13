# gastracker.py
# Fantom Gas Tracker Bot for Discord
# pip3 install python-dotenv discord.py
# edit file .env and place token line below
#
# .env
# DISCORD_TOKEN_FTMGAS=<YOURTOKEN>

import os

import discord
from dotenv import load_dotenv

from web3 import Web3
import json

import time

rpc_url = "https://rpc.ftm.tools/"
web3 = Web3(Web3.HTTPProvider(rpc_url))

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN_FTMGAS')

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')
    while True:
    	for guild in client.guilds:       
        #while True:
            gasPrice = web3.eth.gas_price
            convertedGas = str(gasPrice/1000000000)
            #gasPriceWei = web3.fromWei((gasPrice), 'ether')
            #print(gasPriceWei)
            
            #Name of Bot
            gasTrackerBotName = "GasTrackerFTM" 

            #Place Name of Bot into Name
            await guild.me.edit(nick=gasTrackerBotName)
            #Place Gas Price into watching 
            await client.change_presence(activity=discord.Activity(type=discord.ActivityType.watching, name="⚡ " + convertedGas))
            time.sleep(10)

client.run(TOKEN)
