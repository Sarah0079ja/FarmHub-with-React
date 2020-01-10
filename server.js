const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const config = require("config")
// const path = require('path');


const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = config.get("mongoURI");

//connect to mongo
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true })
    .then(() => console.log('MongoDb Connected...'))
    .catch(err => console.log(err));

//use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5001;
 app.listen(port, () => console.log(`Server started on port ${port}`));