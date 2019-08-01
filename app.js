const express = require('express');
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors())

let data = [
  {"firstName": "Brodie",
  "lastName": "Carlisle",
  "phoneNumber": "000000000",
  "email": "test@test.com",
  "id": 1
  }
]

app.get('/', (req, res) => res.send(data));

app.post('/', function (req, res) {
  data.push(req.body);
  // data = req.body;
  // console.log(data);
  res.send('Got a POST request')
})

app.put('/', function (req, res) {
  res.send('Got a PUT request at /user')
});

app.delete('/id', function (req, res) {
  data.splice()

  res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))