// connect to database

const mongoose = require('mongoose')
mongoose.Promise = Promise


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('SUCCESS: DB Connection ');
    }).catch((err) => {
        console.log('ERROR: DB Connection');
        console.log('err ', err);
    })