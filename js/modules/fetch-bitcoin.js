export default function initFetchBitcoin() {
  const url = "https://blockchain.info/ticker";

  async function fetchBitcoin(url) {
    try {
      const btcPreco = document.querySelector(".btc-preco");
      const response = await fetch(url);
      const bitcoinJSON = await response.json();

      btcPreco.innerText = `BTC ${(1000 / bitcoinJSON.BRL.buy).toFixed(4)}`;
    } catch (error) {
      console.log(Error(error));
    }
  }
  fetchBitcoin(url);
}
