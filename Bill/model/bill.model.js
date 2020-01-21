const mongoose = require('mongoose');

//schema bill
const billSchema = new mongoose.Schema({
    billno: Number,
    challanNo: Number,
    Price: Number,
    CreatedBy: Int16Array,
    CreatedOn: Date
});

//class Bill
module.exports  = mongoose.model('Bill',billSchema);