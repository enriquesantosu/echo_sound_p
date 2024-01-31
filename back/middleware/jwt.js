const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'config.env' })

exports.verifytoken = (req, res, next) => {

    console.log(req.headers.authorization);

    let token = req.headers.authorization;

    if (!token) {
        return res.status(400).json({ msg: 'The token was not found' });
    }

    token = token.split(' ');

    jwt.verify(token[1], process.env.SECRET_KEY_JWT, (error, decoded) => {

        if (error) {
            return res.status(403).json({ msg: 'The token was not authorized' });
        }

        req.userData = decoded
        next();
    });
};

