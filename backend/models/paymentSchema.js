const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
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

    amount: {
        type: Number,
        required: true
    },

    paymentDate: {
        type: Date,
        default: Date.now
    },

    month: {
        type: Number,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        enum: ['cash', 'upi', 'bank'],
        default: 'cash'
    },

    transactionId: {
        type: String,
        default: ''
    },

    remarks: {
        type: String,
        default: ''
    },

    collectedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);