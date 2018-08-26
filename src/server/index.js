const express = require('express');
const os = require('os');
const axios = require('axios');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());
app.post('/api/evalText', function (req, res) {

  axios.post("http://localhost:8086/ner/drug.json", 
    {text: req.body.text,
     annotate: true
    },
    {headers: {'Content-Type': 'application/json'}})
  .then(response => res.send(response.data))
  .catch(error => console.log(error));

});
app.listen(8090, () => console.log('Listening on port 8080!'));
