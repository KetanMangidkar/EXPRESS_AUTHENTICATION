

const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://ketan:ketan123@cluster0.pvb7r.mongodb.net/auoth-auothrise?retryWrites=true&w=majority");
}


module.exports = connect;