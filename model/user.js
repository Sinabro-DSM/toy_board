const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id:{
        type: String,
        unique: true
    },
    pw: {
        type: String
    },
    name:{
        type: String
    }
});

module.exports = mongoose.model('users',userSchema);