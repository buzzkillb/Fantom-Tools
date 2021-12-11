## Grab SpookySwap wFTM-USDC LP Smart Contract and Calculate wFTM USDC price to stick into InfluxDB 2.0 and Read from Grafana Docker.  

Git Clone, adjust **index.js** to your InfluxDB 2.0 token  
Replace in **index.js**:  
```
const token = '<token>'  
```
hint to get token: InfluxDB 2.0 -> Data -> JavaScript/Node.js -> Initialize the Client  
I manually build Dockerfile and then run docker-compose  
```
docker build -t fantomapp . 
```
run docker-compose in docker-compose.yml directory  
```
docker-compose up -d  
```
**From Web Browser**  
Grafana 127.0.0.1:3000   
InfluxDB 127.0.0.1:8086  
