const mongoose = require('mongoose');

const ConcertSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img_url: {
        type: Array,
        required: true
    },
    tiers: {
        type: Array,
        required: true
    },
    clients: {
        type: Array,
        required: true
    },
    active: {
        type: Boolean,
        required: true
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




module.exports = mongoose.model('Concert', ConcertSchema);