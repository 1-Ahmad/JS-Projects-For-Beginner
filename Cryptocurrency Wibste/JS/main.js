let btc = document.querySelector("#btc");
let eth = document.querySelector("#eth");
let doge = document.querySelector("#doge");
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-TrStQSp6LzMBo91oV1rfZ9gs",
  },
};

fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  options
)
  .then((res) => res.json())
  .then((res) => {
    btc.innerHTML = res.bitcoin.usd;
    eth.innerHTML = res.ethereum.usd;
    doge.innerHTML = res.dogecoin.usd;
  });