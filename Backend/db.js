
const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/familyHotel";

const connectToMongoose = () =>{
    mongoose.connect(mongoURL, () =>{
        console.log("connecte");
    })
}

module.exports = connectToMongoose;