const Web3 = require('web3');
var web3 = new Web3('https://rpc.ftm.tools');
//var web3 = new Web3('https://rpc.ankr.com/fantom');
//var web3 = new Web3('https://ftm.rpcgator.com/');

//Turn Tarot Card - USDC Borrowable Contracts
const tarotSpookyUSDCBOO = "0xFEA97187C7d46A1E29D4f35E7314d37859902A2c"
const tarotSpookyUSDCTarot = "0xc81b902d10a6de1bf150c9261ba931e734ae7bb5"
const tarotSpookyV2USDCDEI = "0x893beb893baf18d18050ec2de71ad4d70f9998f4"
const tarotSpookyUSDCWFTM = "0xb7fa3710a69487f37ae91d74be55578d1353f9df"

var USDCNames = ["tarotSpookyUSDCBOO",
                "tarotSpookyUSDCTarot",
                "tarotSpookyV2USDCDEI",
                "tarotSpookyUSDCWFTM",
                "tarotTombUSDCMAI",
                "tarotSpiritUSDCFTM",
                "tarotTombUSDCFTM",
                "tarotTombUSDCfUSDT",
                "tarotTombUSDCTshare",
                "tarotSpookyUSDCMAI",
                "tarotSpookyUSDCfUSDT",
                "tarotSpookyUSDCTUSD",
                "tarotSpiritUSDCMIM",
                "tarotTombUSDCFUSD",
                "tarotUSDCFRAX",
                "tarotSpiritUSDCfUSDT",
                "tarotSpookyUSDCDAI",
                "tarotSpiritUSDCDAI",
                "tarotTombUSDCTOMB",
                "tarotTombUSDCMIM",
                "tarotSpiritUSDCFTM"
];

var USDC = ["0xFEA97187C7d46A1E29D4f35E7314d37859902A2c", //tarotSpookyUSDCBOO
            "0xc81b902d10a6de1bf150c9261ba931e734ae7bb5", //tarotSpookyUSDCTarot
            "0x893beb893baf18d18050ec2de71ad4d70f9998f4", //tarotSpookyV2USDCDEI
            "0xb7fa3710a69487f37ae91d74be55578d1353f9df", //tarotSpookyUSDCWFTM
            "0xdb1afbc52eaacde3b5d4964fe344a6a5b9ce1338", //tarotTombUSDCMAI
            "0x710675a9c8509d3df254792c548555d3d0a69494", //tarotSpiritUSDCFTM
            "0x3ca8e0675a4436acc6a29b9f28ed2fbe94cab5ce", //tarotTombUSDCFTM
            "0xa04e4bb66b686afc4750fc0e0ce4db3b9664e3b2", //tarotTombUSDCfUSDT
            "0x0acb77118cd570a95068f7dea9c9ce59d88bbc25", //tarotTombUSDCTshare
            "0xd8339e66eeb1762e699b3f0ef694269658e2421f", //tarotSpookyUSDCMAI
            "0x7623abcb2a3da6bb14bbb713b58c9b11fc9713b1", //tarotSpookyUSDCfUSDT
            "0x3536f53757679c8f31aa2dfb2534fbcc51650e25", //tarotSpookyUSDCTUSD
            "0x93d3701ffa4dcb5d30bcaf5cf897b08e0deca6dd", //tarotSpiritUSDCMIM
            "0x44b79e8483db8699400f3849725ba9c0f9ae3bd7", //tarotTombUSDCFUSD
            "0xafee6d51c75704bc38e40778ae99e546d5562881", //tarotUSDCFRAX
            "0x7623abcb2a3da6bb14bbb713b58c9b11fc9713b1", //tarotSpiritUSDCfUSDT
            "0x07642848c3564e8e1566f8e55317b43375a66382", //tarotSpookyUSDCDAI
            "0xb564899ba911c4f6a25a7aecc4b8808a487dc8c2", //tarotSpiritUSDCDAI
            "0xd5e0c06535c3a698278e7736c3d4179dbf631b44", //tarotTombUSDCTOMB
            "0x18d40342042aa36eb4a2c03744d7c9114ec2a281", //tarotTombUSDCMIM
            "0xb91e78e239ddf33de24e32424decffa036e770e4" //tarotSpiritUSDCFTM

];

//TOMB
var TOMBNames = ["Tomb-TOMBBASED",
                "Tomb-FTMTOMB",
                "Tomb-TOMBMAI",
                "Based-TOMBBASED",
                "Tomb-FTMTOMB",
                "Tomb-USDCTOMB"
];

var TOMB = ["0x62fad47ed7cf0d88806c4985863b706584350e05", //Tomb-TOMBBASED
            "0xbdea9419f069001907c13808b4f68282e013e118", //Tomb-FTMTOMB
            "0xba36f108d499804d0d434a2f302aec4b0ab6f40b", //Tomb-TOMBMAI
            "0x445f69a4a1e6a5f15980a560bf9deb444ee51ac1", //Based-TOMBBASED
            "0xdbd846a0fc27e1f7749140f945fe7b28b9ac6a48", //Tomb-FTMTOMB
            "0x6f266ead5389a2f2febde3e6fac95abd3da4e65d" //Tomb-USDCTOMB

];

var bTarotABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrowsPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"BorrowApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"borrowRate","type":"uint256"}],"name":"CalculateBorrowRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"kinkRate","type":"uint256"}],"name":"CalculateKink","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"kinkBorrowRate","type":"uint256"}],"name":"CalculateKinkBorrowRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":true,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrowsPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Liquidate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newAdjustSpeed","type":"uint256"}],"name":"NewAdjustSpeed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newBorrowTracker","type":"address"}],"name":"NewBorrowTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newKinkUtilizationRate","type":"uint256"}],"name":"NewKinkUtilizationRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newReserveFactor","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalBalance","type":"uint256"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"ADJUST_SPEED_MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ADJUST_SPEED_MIN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BORROW_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BORROW_PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KINK_BORROW_RATE_MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KINK_BORROW_RATE_MIN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KINK_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KINK_UR_MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KINK_UR_MIN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"RESERVE_FACTOR_MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"address","name":"_collateral","type":"address"}],"name":"_initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newAdjustSpeed","type":"uint256"}],"name":"_setAdjustSpeed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newBorrowTracker","type":"address"}],"name":"_setBorrowTracker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"_setFactory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newKinkUtilizationRate","type":"uint256"}],"name":"_setKinkUtilizationRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactor","type":"uint256"}],"name":"_setReserveFactor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accrualTimestamp","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"adjustSpeed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"borrow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"borrowAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"borrowApprove","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"borrowBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint112","name":"","type":"uint112"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"borrowPermit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"borrowRate","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowTracker","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collateral","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBlockTimestamp","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kinkBorrowRate","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kinkUtilizationRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"address","name":"liquidator","type":"address"}],"name":"liquidate","outputs":[{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"mintTokens","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rateUpdateTimestamp","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"redeemer","type":"address"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint112","name":"","type":"uint112"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"trackBorrow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]

//generic Tarot bTarot Smart Contract
//Tarot Discord with Formula
//https://discord.com/channels/844684118080225301/846436599997661185/896130769955733505
async function getTarotAPR(bTarotContract) {
    var contract = new web3.eth.Contract(bTarotABI, bTarotContract);
    const totalBalance = await contract.methods.totalBalance().call();
    const totalBorrows = await contract.methods.totalBorrows().call();
    var Supply = Number(totalBalance) + Number(totalBorrows);
    var utilizationRate = totalBorrows / Supply;
    //console.log('UtilizationRate: ' + utilizationRate);
    const borrowRate = await contract.methods.borrowRate().call();
    const reserveFactor = await contract.methods.reserveFactor().call();
    var reserveFactorPercent = reserveFactor / 1e18;
    var supplyRate = borrowRate * utilizationRate * (1 - reserveFactorPercent);
    var supplyAPR = supplyRate * 365 * 24 * 3600;
    var supplyAPRPercent = supplyAPR / 1e18;
    //console.log('APR: ' + supplyAPRPercent);
    return { utilizationRate, supplyAPR, supplyAPRPercent};
};

async function getUSDCAPR() {
    for (var i = 0; i < USDC.length; i++) {
        console.log(USDCNames[i]);
        console.log(USDC[i]);
        const supplyAPR = await getTarotAPR(USDC[i]);
        var APR = supplyAPR.supplyAPRPercent * 100;
        console.log(APR)
    }
}

getUSDCAPR()

async function getTOMBAPR() {
    for (var i = 0; i < TOMB.length; i++) {
        var contractName = TOMBNames[i];
        console.log(contractName);
        var contractTarot = TOMB[i];
        console.log(contractTarot);
        const supplyAPR = await getTarotAPR(TOMB[i]);
        var APR = supplyAPR.supplyAPRPercent * 100;
        console.log(APR)
    }
}

getTOMBAPR()
