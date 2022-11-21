const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Isi nama ygy'],
        unique: true
    },
    email:{
        type:String,
        required: true,
        uniwque: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, ' Isi email kalian yang valid ygy ']
    }
})

module.exports = mongoose.model('User', UserSchema) 