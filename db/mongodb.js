const CONFIG = require('../app.config')
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

// remove DeprecationWarning
mongoose.set('useFindAndModify', false);

exports.mongoose = mongoose

exports.connect = () => {
    //connect
    mongoose.connect(CONFIG.MONGODB.uri,{
        useCreateIndex: true,
		useNewUrlParser: true,
		promiseLibrary: global.Promise
    });

    //error handling
    mongoose.connection.on('error',function(err) {
        console.error("connect failed: " + err);
    })

    //connection success handlind
    mongoose.connection.once('open',()=>{
        console.log('connect success!');
    })

    //increment counter
    autoIncrement.initialize(mongoose.connection);

    //return connection instance
    return mongoose;

}


