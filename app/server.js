const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Welcome to this page")
  console.log("Working")
})


app.listen(PORT, () => 
    console.log(`Server run on port ${PORT}`));
