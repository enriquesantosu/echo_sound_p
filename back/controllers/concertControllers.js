const Concert = require('../models/Concert');


exports.createConcert = async (req, res) => {

    console.log(req.body);

    let filterConcert = { name: req.body.name, date: req.body.date }
    console.log(filterConcert)

    try {
        let concertMatch = await Concert.findOne(filterConcert)
        console.log(concertMatch)

        if (concertMatch == null) {
            let newConcert
            newConcert = new Concert(req.body)
            await newConcert.save()
            res.send(newConcert)
        } else {
            res.status(400).send(`the concert is already registered: ${req.body.name}`)
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'an error has occurred' });
    }

}


exports.getConcert = async (req, res) => {
    try {
        let regxmon = /^[0-9a-f]{24}$/

        if (regxmon.test(req.params.id)) {
            const concertMatch = await Concert.findById(req.params.id)

            if (!concertMatch) {
                res.status(404).send('the concert does not exist')
            } else {
                res.json(concertMatch)
            }

        } else {
            res.status(404).send('the id is not correct')
        }

    } catch (error) {
        console.log(error)
        res.status(502).json({ msg: 'an error has occurred' })
    }
}


exports.getNextConcerts = async (req, res) => {
    try {
        let nextConcerts = await Concert.find({ date: { $gte: new Date() } }).sort({ date: 1 }).limit(3)
        res.json(nextConcerts)
    } catch (error) {
        console.log(error)
        res.status(502).json({ msg: 'an error has occurred' })
    }
}


exports.getConcerts = async (req, res) => {
    try {
        let concerts;
        concerts = await Concert.find().sort({ date: 1 });
        res.json(concerts);
    } catch (error) {
        console.log(error);
        res.status(500).send('an error has occurred');
    }
}


exports.updateConcert = async (req, res) => {
    try {
        let regxmon = /^[0-9a-f]{24}$/

        if (regxmon.test(req.params.id)) {
            let concertMatch = await Concert.findById(req.params.id)

            if (!concertMatch) {
                res.status(404).send('the concert does not exist')
            } else {
                let updatedConcert = await Concert.findByIdAndUpdate({ _id: req.params.id }, req.body)
                res.json(updatedConcert)
            }

        } else {
            res.status(404).send('the id is not correct')
        }
    } catch (error) {
        console.log(error)
        res.status(502).json({ msg: 'an error has occurred' })
    }
}

exports.deleteConcert = async (req, res) => {
    try {
        let regxmon = /^[0-9a-f]{24}$/

        if (regxmon.test(req.params.id)) {
            let deletedConcert = await Concert.findByIdAndDelete(req.params.id)

            if (!deletedConcert) {
                res.status(404).json({ msg: 'the concert does not exist' })
            } else {
                res.json(deletedConcert)
            }

        } else {
            res.status(404).json({ msg: 'the id is not correct' })
        }

    } catch (error) {
        res.status(500).json({ msg: 'an error has occurred' })
    }
}