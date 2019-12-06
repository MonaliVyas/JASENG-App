const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/jas_dev')
.then(() => console.log('Connect to mongodb..'))
.catch(err => console.error('Could not connect to mongodb..', err));


//schema item
const itemSchema = new mongoose.Schema({
    ItemNo: Number,
    Name: String,
    DrawingNo: String,
    PartCode: String,
    Material: String,
    Price: Number
});

//class Item
const Item = mongoose.Schema('Item', itemSchema);
