const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true
    },
    realname: {
        type: String,
        required: true
    },
    joindate: {
        type: Date,
        default: Date.now,
        // No space?
    },
    following: {
        type: Number,
        // ?,
        // No space?
    },
    followers: {
        type: Number,
        // ?,
        // No space?
    },
    replies: {
        type: String,
        date: Date,
        // ?
    },
    location: {
        type: String,
        // ?
    },
    link: {
        type: String,
        link: true
    },
})

userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({username})
    if (user && await bcrypt.compare(password, user.password)) {
        return user
    } else {
        throw new Error()
    }
}

const User = mongoose.model("user", userSchema)

module.exports = User