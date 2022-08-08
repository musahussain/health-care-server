const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ruf9amr.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// main apis 
async function run() {
    try{
        await client.connect();
        console.log('database connected');
    }
    finally{
        console.log('app running');
    }
}


run().catch(console.dir)

// demo api 
app.get('/', (req, res) => {
  res.send('Hello World!')
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});