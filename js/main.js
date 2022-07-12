// Cotação real coingecko API, cards HOME
let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let usdt = document.getElementById("tether");
// Acessando as div's
let marketData = document.querySelectorAll(".market-data")[0];
let marketData1 = document.querySelectorAll(".market-data")[1];
let marketData2 = document.querySelectorAll(".market-data")[2];
// Pegando os dados da API
const mktPrice = {
  async: true,
  crossDomain: true,
  url: "https://coingecko.p.rapidapi.com/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=brl&include_last_updated_at=true&include_market_cap=true&include_24hr_change=true&include_24hr_vol=false",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9043aec9e4msh6d578c5423f11a5p156307jsn08cc7ae4e58b",
    "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  },
};

$.ajax(mktPrice).done(function (response) {
  btc.innerHTML = response.bitcoin.brl;
  eth.innerHTML = response.ethereum.brl;
  usdt.innerHTML = response.tether.brl;

  // Convertendo o resultados da API em varáveis

  var btcChange24h, ethChange24h, usdtChange24h;
  btcChange24h = parseFloat(response.bitcoin.brl_24h_change).toFixed(1);
  ethChange24h = parseFloat(response.ethereum.brl_24h_change).toFixed(1);
  usdtChange24h = parseFloat(response.tether.brl_24h_change).toFixed(1);
  console.log(btcChange24h, ethChange24h, usdtChange24h);

  // Mudar a cor dos percentuais de acordo com os percentuias

  var colorChangeBtc24h,
    colorChangeEth24h,
    colorChangeUsdt24h,
    iconUp,
    iconDown;
  iconUp = '<i class="fas fa-light fa-arrow-trend-up"></i>';
  iconDown = '<i class="fas fa-light fa-arrow-trend-down"></i>';
  if (btcChange24h < 0) {
    colorChangeBtc24h = "down-color";
    btcChange24h =
      iconDown + '<span class="mkt-up">' + btcChange24h + "%" + "</span>";
  } else if (btcChange24h >= 0) {
    colorChangeBtc24h = "up-color";
    btcChange24h =
      iconUp + '<span class="mkt-up">' + btcChange24h + "%" + "</span>";
  }
  console.log(colorChangeBtc24h);

  if (ethChange24h < 0) {
    colorChangeEth24h = "down-color";
    ethChange24h =
      iconDown + '<span class="mkt-up">' + ethChange24h + "%" + "</span>";
  } else if (ethChange24h >= 0) {
    colorChangeEth24h = "up-color";
    ethChange24h =
      iconUp + '<span class="mkt-up">' + ethChange24h + "%" + "</span>";
  }
  console.log(colorChangeEth24h);

  if (usdtChange24h < 0) {
    colorChangeUsdt24h = "down-color";
    usdtChange24h =
      iconDown + '<span class="mkt-up">' + usdtChange24h + "%" + "</span>";
  } else if (usdtChange24h >= 0) {
    colorChangeUsdt24h = "up-color";
    usdtChange24h =
      iconUp + '<span class="mkt-up">' + usdtChange24h + "%" + "</span>";
  }
  console.log(colorChangeUsdt24h);

  // Testando 1 2 3

  marketData.innerHTML =
    '<div class="market-data d-flex" data-market-color="' +
    colorChangeBtc24h +
    '" name="market-theme">' +
    btcChange24h +
    "</div>";
  console.log(marketData.innerHTML);

  marketData1.innerHTML =
    '<div class="market-data d-flex" data-market-color="' +
    colorChangeEth24h +
    '" name="market-theme">' +
    ethChange24h +
    "</div>";
  marketData2.innerHTML =
    '<div class="market-data d-flex" data-market-color="' +
    colorChangeUsdt24h +
    '" name="market-theme">' +
    usdtChange24h +
    "</div>";
});
