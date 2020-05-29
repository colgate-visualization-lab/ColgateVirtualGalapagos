const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/virtual-galapagos-api', {
    useUnifiedTopology: true, 
    useCreateIndex: true
}) 