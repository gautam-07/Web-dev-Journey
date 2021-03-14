// Axios is a library for making HTTP requests

// It returns a promise
// Data will already come with parsed JSON so that we don't have to parse it manually

axios.get('https://api.cryptonator.com/api/full/btc-usd')
   .then((res) => {
      console.log(res.data.ticker.price);
   })
   .catch((err) => {
      console.log('Error....', err);
   })

// Same thing with async function

const fetchBitcoinPrice = async () => {
   try {
      const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
      console.log(res.data.ticker.price);
   } catch (e) {
      console.log('Error!!!!', e);
   }
}

