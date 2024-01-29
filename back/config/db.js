const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });


//async function for DB connection

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = dbConnection