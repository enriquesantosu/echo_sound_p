const express = require('express');
const router = express.Router();
const concertControllers = require('../controllers/concertControllers');
const userControllers = require('../controllers/userControllers');
const sessionControllers = require('../controllers/sessionControllers');

router.post('/post_concert', concertControllers.createConcert);
router.get('/get_concerts', concertControllers.getConcerts);
router.get('/get_concert/:id', concertControllers.getConcert);
router.get('/get_next_concerts', concertControllers.getNextConcerts);
router.put('/update_concert/:id', concertControllers.updateConcert);
router.delete('/delete_concert/:id', concertControllers.deleteConcert);


router.post('/create_user', userControllers.createUser);
router.get('/get_users', userControllers.getUsers);
router.get('/get_user/:id', userControllers.getUser);
router.put('/update_user/:id', userControllers.updateUser);
router.delete('/delete_user/:id', userControllers.deleteUser);


router.post('/user_login', sessionControllers.userLogin);

module.exports = router;