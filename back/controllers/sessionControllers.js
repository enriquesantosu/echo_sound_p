const User = require('../models/User')

exports.userLogin = async (req, res) => {

    console.log(req.body)

    const { email, password } = req.body

    const usuario = await User.findOne({ email: email })

    if (!usuario) {
        return res.status(401).json({ msg: 'invalid user or password' })
    }

    if (usuario.password != password) {
        return res.status(401).json({ msg: 'invalid user or password' })
    }

    console.log(usuario)
}