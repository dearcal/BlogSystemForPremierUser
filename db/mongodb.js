const CONFIG = require('../app.config')
const mongoose = require('mongoose')

mongoose.connect(CONFIG.MONGODB.uri);

const db = mongoose.connection;

// remove DeprecationWarning
mongoose.set('useFindAndModify', false)

