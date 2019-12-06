const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/jas_dev')
.then(() => console.log('Connect to mongodb..'))
.catch(err => console.err('Could not connect to mongodb..',err));

//class schema
const companySchema = new mongoose.Schema({
    name: String,
    code: String,
    email: String,
    phone: Number,
    address: String,
    GSTNo: String
});

//class Company
const Company = mongoose.model('Company',companySchema);

