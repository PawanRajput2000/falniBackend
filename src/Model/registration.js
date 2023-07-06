const mongoose = require("mongoose")




const registration = new mongoose.Schema({

name :{
    type : String,
    required: true 
},
email : {
    type : String,
    required : true 
},
password :{
    type : String,
    required: true 
}

})


const registrationSchema   = mongoose.model("registration", registration)

module.exports = {registrationSchema}