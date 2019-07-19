const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json());

let data = []
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', function (req, res) {
  data = req.body;
  console.log(data);
  res.send('Got a POST request')
})

app.put('/', function (req, res) {
  res.send('Got a PUT request at /user')
});

app.delete('/', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))