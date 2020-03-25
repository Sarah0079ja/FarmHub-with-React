const express = require("express");
const mongoose = require("mongoose");
const config = require("config")
const path = require('path');


const app = express();

//bodyparser middleware
app.use(express.json());

//DB config
const db = config.get('mongoURI');

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
app.use("/api/form", require("./routes/api/form"));

///serve static assets
// if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static(path.join(__dirname, 'farmhub/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+ "/farmhub/build", "index.html"));
    });
// }k

const port = process.env.PORT || 5001;
 app.listen(port, () => console.log(`Server started on port ${port}`));