const mongoose = require('mongoose');

//class schema
const companySchema = new mongoose.Schema({
    name: String,
    code: String,
    email: String,
    phone: Number,
    address: String,
    GSTNo: String,
    ValidTo: Date,
    ValidFrom: Date,
    CreatedBy: Int16Array,
    CreatedOn: Date
});

//class Company
module.exports = mongoose.model('Company',companySchema);

