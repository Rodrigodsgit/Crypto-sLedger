// Cotação real coingecko API, cards HOME
let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let usdt = document.getElementById("tether");

let mktPrice = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=brl",

  method: "GET",
  headers: {},
};

$.ajax(mktPrice).done(function (response) {
  btc.innerHTML = response.bitcoin.brl;
  eth.innerHTML = response.ethereum.brl;
  usdt.innerHTML = response.tether.brl;
});
