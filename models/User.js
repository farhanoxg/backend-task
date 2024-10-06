const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    experience_level: {
        type: String,
        required: true
    },
    preferences: {
        desired_roles: {
            type: [String],
            required: true
        },
        locations: {
            type: [String],
            required: true
        },
        job_type: {
            type: String,
            required: true
        },
    }
});

module.exports = mongoose.model('User', userSchema);
