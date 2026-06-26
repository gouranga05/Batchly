const mongoose = require('mongoose');

const communicationSchema = new mongoose.Schema({
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        required: true,
        index: true
    },

    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch',
        default: null
    },

    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        default: null
    },

    title: {
        type: String,
        required: true,
        trim: true
    },

    message: {
        type: String,
        required: true,
        trim: true
    },

    type: {
        type: String,
        enum: [
            'announcement',
            'fee_reminder',
            'attendance_alert',
            'exam_notice',
            'holiday_notice',
            'general'
        ],
        required: true
    },

    recipientType: {
        type: String,
        enum: [
            'student',
            'parent',
            'both'
        ],
        default: 'both'
    },
    deliveryChannel: {
        type: String,
        enum: [
            'in_app',
            'whatsapp',
            'sms',
            'email'
        ],
        default: 'in_app'
    },

    priority: {
        type: String,
        enum: [
            'low',
            'medium',
            'high'
        ],
        default: 'medium'
    },

    attachments: [{
        type: String
    }],

    scheduledFor: {
        type: Date,
        default: null
    },

    sentAt: {
        type: Date,
        default: Date.now
    },

    isArchived: {
        type: Boolean,
        default: false
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Communication', communicationSchema);