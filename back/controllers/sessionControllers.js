require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.userLogin = async (req, res) => {

    console.log(req.body)

    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    if (!user) {
        return res.status(401).json({ msg: 'invalid user or password' })
    }

    if (user.password !== password) {
        return res.status(401).json({ msg: 'invalid user or password' })
    }

    const payload = {
        id: user._id,
        email: user.email,
        name: user.name,
        last_name: user.last_name
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '60m' })
    return res.status(202).json({ token: token, user: user })
}