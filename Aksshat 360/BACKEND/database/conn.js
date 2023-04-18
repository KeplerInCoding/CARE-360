const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/care',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Connected to Database 📥');
})
.catch(()=>{
    console.log('Disconnected 📤');
})