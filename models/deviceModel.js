const mongoose = require('mongoose');

const device = mongoose.Schema({
    nameOfDevice: {
        type: String,
        unique: true
    },
    currentStatus: {
        type: Boolean,
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Device', device)