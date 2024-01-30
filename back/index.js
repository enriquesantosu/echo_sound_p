console.log('nodemon test')


//Server creation and DB connection

const express = require('express');
const cors = require('cors')
const dbConnect = require('./config/db')

const app = express();
dbConnect();

app.use(cors());
app.use(express.json())
app.use('/sep/v1', require('./routes/routes'))



//Running the server

app.listen(5555, () => {
    console.log('server is up')
})


