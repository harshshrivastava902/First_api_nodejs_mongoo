const express = require('express');
const bodyParser = require('body-parser')
const student = require('./Api/Routes/student')
const mongoose = require('mongoose')

const app = express();


//connection with mongoo db---------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>
mongoose.connect('mongodb+srv://First_node_proj:1234@cluster0.gdyak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connection.on('error', err => {
    console.log("Error-->", err);
})

mongoose.connection.on('connected', connected => {
    console.log("Connected with mongo db");
})

//uses for taking data from front end
app.use(bodyParser.urlencoded({ extended: false }));
//taking data as json
app.use(bodyParser.json());

//diff routes
app.use('/student', student)


//default route
app.use((req, res, next) => {
    res.status(404).json(
        {
            message: "Error 404 Not found"
        }
    )
})


module.exports = app;