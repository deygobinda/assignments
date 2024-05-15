const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:6kgDxpgMvuoQURke@cluster0.cxtmwbd.mongodb.net/businessCard")

const cardSchema = new mongoose.Schema({
    name : String,
    description : String,
    socialLink : [{
        platform : String,
        link : String
    }]
})

const User = mongoose.model("User",cardSchema);

module.exports = {
    User
}