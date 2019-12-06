const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/jas_dev')
.then(() => console.log('Connect to mongodb..'))
.catch(err => console.error('Could not connect to mongodb..', err));

//schema challan
const challanSchema = new mongoose.Schema({
    ChallanNo: Number,
    CompanyCode: String,
    Date: Date,
    Item: String,
    Qty: Number
});

//class Challan
const Challan = mongoose.model('Challan',challanSchema);
