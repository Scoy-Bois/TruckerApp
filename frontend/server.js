const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.use(express.static('public'));
app.get('/username', (req, res) => {
  res.send('varora')
})
app.get('/password', (req, res) => {
    res.send('12345')
  })
app.listen(port, () => console.log(`listening on port ${port}!`));