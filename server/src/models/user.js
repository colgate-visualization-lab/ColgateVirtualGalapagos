const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        trim: true, 
        unique: true 
    }, 
    password: {
        type: String, 
        required: true, 
        minlength: 7, 
        trim: true, 
    }, 
    tokens: [{
        token: {
            type: String, 
            required: true
        }
    }], 
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'virtualgalapagos')

    user.tokens = user.tokens.concat({token})
    await user.save()
    return token 
}

userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({username})

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})
const User = mongoose.model('User', userSchema)

module.exports = User