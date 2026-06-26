const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },

    studentCode: {
        type: String,
        unique: true,
        trim: true
    },

    fullName: {
        type: String,
        required: true,
        trim: true
    },

    phoneNumber: {
        type: String,
        default: ''
    },

    guardianName: {
        type: String,
        default: ''
    },

    guardianPhone: {
        type: String,
        required: true
    },

    address: {
        type: String,
        default: ''
    },

    schoolName: {
        type: String,
        default: ''
    },

    className: {
        type: String,
        default: ''
    },

    dateOfBirth: {
        type: Date
    },

    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },

    joinDate: {
        type: Date,
        default: Date.now
    },

    profilePicture: {
        type: String,
        default: ''
    },

    remarks: {
        type: String,
        default: ''
    },

    status: {
        type: String,
        enum: ['active', 'inactive', 'left'],
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);