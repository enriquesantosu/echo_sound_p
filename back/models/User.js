const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    },
    active: {
        type: String,
        required: false
    },
    date_created: {
        type: Date,
        default: Date.now()
    }

},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('User', UserSchema)