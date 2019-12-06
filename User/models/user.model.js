const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/jas_dev')
.then(() => console.log('Connect to mongodb..'))
.catch(err => console.error('Could not connect to mongodb..', err));

//schema user
const userSchema = new mongoose.Schema({
    UserId: Number,
    FirstName: String,
    LastName: String,
    Username: String
});

//class User
const User = mongoose.model('User',userSchema);