const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/data', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(["Hello", "World"])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
