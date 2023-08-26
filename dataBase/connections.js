const mongoose = require('mongoose');

mongoose.connect(process.env.baseUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("..Mongodb Atlas Connected..");
}).catch(() => {
    console.log("...MongoDB connection error...");
})
//catch is used for catching the rejected / failed response
