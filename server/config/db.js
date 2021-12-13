const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

exports.connectToDb = () => {
    mongoose
    .connect(MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo Connection successful"))
    .catch(err => console.log(err));
}