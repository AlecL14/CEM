const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        eventId: 
        {
            type: String,
            required: true,
            unique: true
        },
        name: 
        {
            type: String,
            required: true
        },
        description: 
        {
            type: String,
            required: true
        },
        date:
        {
            type: Date,
            required: true
        },
        location:
        {
            type: String,
            required: true    
        },
        price:
        {
            type: Number,
            required: true
        },
        likes:
        {
            type: Number,
            default: 0
        },
        image:
        {
            type: String,
            required: true
        }
    }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;