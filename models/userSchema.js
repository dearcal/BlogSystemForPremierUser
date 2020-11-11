const crypto = require('crypto');
const {mongoose} = require('../db/mongoose');
const autoIncrement = require('mongoose-auto-increment');

const userSchema = new mongoose.Schema({
    
    username:{
        type: String,
        required: true,
        default: ''
    },

    password:{
        type: String,
        required: true,
        default: crypto.createHash('md5').update('1qaz2wsx#EDC').digest('hex')
    },

    create_time:{
        type: Date,
        default: Date.now
    }

})


//autoIncrement
userSchema.plugin(autoIncrement.plugin,{
    model:'User',
    field:'id',
    startAt:1,
    incrementBy:1
});

module.exports = mongoose.model('User', userSchema);
