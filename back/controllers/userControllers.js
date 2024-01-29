const User = require('../models/User')

exports.createUser = async (req, res) => {

    let userFilter = { email: req.body.email }

    try {
        let userMatch = await User.findOne(userFilter)

        if (userMatch == null) {
            let newUser
            newUser = new User(req.body)
            await newUser.save()
            res.send(newUser)
        } else {
            res.status(400).send('the user is already registered')
        }

    } catch (error) {
        console.log(error)
        res.status(502).json({ msg: 'an error has occurred' })
    }

}


exports.getUsers = async (req, res) => {

    try {
        let users = await User.find()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'an error has occurred' })
    }
}


// exports.getUser = async (req, res) => {

//     try {

//         let regxmon = /^[0-9a-f]{24}$/

//         if (regxmon.test(req.body.id)) {

//             const user = await User.findById(req.body.id)

//             if (user == null) {
//                 console.log('user does not exist')
//                 res.status(404).json({ msg: 'user does not exist' })
//             } else {
//                 console.log('user found')
//                 res.send(user)
//             }

//         } else {
//             res.status(404).send('the id is not correct')
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ msg: 'an error has occurred' })
//     }
// }

exports.getUser = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ msg: 'Missing ID' });
        }

        const regxmon = /^[0-9a-f]{24}$/;
        if (!regxmon.test(req.params.id)) {
            return res.status(400).json({ msg: 'Invalid ID format' });
        }

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'An error occurred' });
    }
};



exports.updateUser = async (req, res) => {

    try {

        let regxmon = /^[0-9a-f]{24}$/

        if (regxmon.test(req.params.id)) {

            const user = await User.findById(req.params.id)

            if (user == null) {
                console.log('user does not exist')
                res.status(404).json({ msg: 'user does not exist' })
            } else {
                let updatedUser = await User.findByIdAndUpdate({ _id: req.params.id }, req.body)
                res.send(updatedUser)
                console.log('user updated')
            }

        } else {
            res.status(404).send('the id is not correct')
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'an error has occurred' })
    }

}


exports.deleteUser = async (req, res) => {

    try {
        let regxmon = /^[0-9a-f]{24}$/

        if (regxmon.test(req.params.id)) {

            const user = await User.findById(req.params.id)

            if (user == null) {
                console.log('user does not exist')
                res.status(404).json({ msg: 'user does not exist' })
            } else {
                let deletedUser = await User.findByIdAndDelete(req.params.id)
                res.send(deletedUser)
            }

        } else {
            res.status(404).send('the id is not correct')
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'an error has occurred' })
    }
}