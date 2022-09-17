const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
        username:String,
        email:String,
        password:Number
})

const authModel = mongoose.model('auth', authSchema);


module.exports = authModel;
