const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/jas_dev')
.then(() => console.log('Connect to mongodb..'))
.catch(err => console.error('Could not connect to mongodb..', err));


//schema bill
const billSchema = new mongoose.Schema({
    billno: Number,
    challanNo: Number,
    Price: Number
});

//class Bill
const Bill = mongoose.model('Bill',billSchema);
