const mongoose = require('mongoose')

mongoose.connect('mongodb://root:example@localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Mongo connected..."))