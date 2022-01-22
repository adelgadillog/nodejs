const mongoose = require('mongoose');

const UserSchema = new  mongoose.Schema(
    {
        name: {
            type: String
        },
        avatar: {
            type: String,
            default: 'http://image.com'
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('user', UserSchema);