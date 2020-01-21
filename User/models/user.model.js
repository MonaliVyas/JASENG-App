const mongoose = require('mongoose');

//schema user
const userSchema = new mongoose.Schema({
    UserId: Number,
    FirstName: String,
    LastName: String,
    Username: String,
    ValidTo: Date,
    ValidFrom: Date,
    CreatedBy: Int16Array,
    CreatedOn: Date
});

//class User
module.exports = mongoose.model('User',userSchema);