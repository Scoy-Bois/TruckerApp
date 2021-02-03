const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.use(express.static('public'));
app.get('/prices', (req, res) => {
  const bpi = 'bpi';

  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(response => res.send(response.data[bpi]))
    .catch(error => console.log(error))
})
app.listen(port, () => console.log(`listening on port ${port}!`));