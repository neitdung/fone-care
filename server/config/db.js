const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

exports.connectToDb = () => {
    mongoose
    .connect("mongodb+srv://dungnt:DungNT123@cluster0.cpxco.mongodb.net/fone-care?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo Connection successful"))
    .catch(err => console.log(err));
}