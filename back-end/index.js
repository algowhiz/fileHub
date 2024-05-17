const express = require('express');
const router = require('./routes/routes')
const cors = require('cors')
const {connectingDB} = require('./connection')
const app= express();
const PORT = 4000;

app.use(cors());
app.use('/',router);

connectingDB();

app.listen(PORT,() => console.log("server started"));