// Fetch API

// The newer way of making request using JS
// Support Promises
// Not supported in internet explorer

fetch('https://api.cryptonator.com/api/full/btc-usd')
   .then((res) => {
      console.log('Response, Waiting to parse', res)
      
      // not same as parse.json method
      // It also returns a promise
      return res.json();
   })

   .then((data) => {
      console.log('Data Parsed');
      console.log(data.ticker.price);
   })

   .catch(() => {
      console.log('Oh...no..ERROR!!!!');
   })


// Another way of fetching using async functions

const fetchBitcoinPrice = async () => {
   try {
      const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')
      const data = await res.json();
      console.log(data.ticker.price);
   } catch (e) {
      console.log('Something went wrong....', e);
   }
}

