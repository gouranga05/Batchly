const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },

    batchCode: {
        type: String,
        unique: true,
        trim: true
    },

    batchName: {
        type: String,
        required: true,
        trim: true
    },

    subject: {
        type: String,
        default: ''
    },

    description: {
        type: String,
        default: ''
    },

    batchFee: {
        type: Number,
        required: true
    },

    capacity: {
        type: Number,
        default: 0
    },

    schedule: [{
        day: {
            type: String,
            required: true
        },

        startTime: {
            type: String,
            required: true
        },

        endTime: {
            type: String,
            required: true
        }
    }],

    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('Batch', batchSchema);