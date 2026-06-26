const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema({
    instituteCode: {
        type: String,
        unique: true,
        trim: true
    },

    instituteName: {
        type: String,
        required: true,
        trim: true
    },

    ownerName: {
        type: String,
        required: true,
        trim: true
    },

    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    address: {
        type: String,
        default: ''
    },

    logo: {
        type: String,
        default: ''
    },

    subscriptionPlan: {
        type: String,
        enum: ['free', 'basic', 'premium'],
        default: 'free'
    },

    maxStudents: {
        type: Number,
        default: 100
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('Institute', instituteSchema);