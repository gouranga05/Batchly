const mongoose = require('mongoose');

const studentBatchSchema = new mongoose.Schema({
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },

    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },

    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch',
        required: true
    },

    joinedAt: {
        type: Date,
        default: Date.now
    },

    leftAt: {
        type: Date
    },

    monthlyFee: {
        type: Number,
        required: true
    },

    discount: {
        type: Number,
        default: 0
    },

    remarks: {
        type: String,
        default: ''
    },

    status: {
        type: String,
        enum: ['active', 'left'],
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('StudentBatch', studentBatchSchema);