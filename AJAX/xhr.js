// Accessing API endpoint with old method of XML
// XML HTTP Requests or XHR's
// Promises not supported


const req = new XMLHttpRequest();

req.onload = function () {
   console.log("All request done")
   const data = JSON.parse(this.responseText)
   console.log(data.ticker.price);
}

req.onerror = function () {
   console.log("Error!!!!");
   console.log(this.status);
}

req.open('GET', 'https://api.cryptonator.com/api/full/btc-usd')
req.send();

