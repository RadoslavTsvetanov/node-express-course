const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found')
const error = require('./middleware/error-handler')
// middleware

app.use(express.static('./public'));
app.use(express.json());
// routes

app.use('/api/v1/tasks', tasks);
app.use(notFound) //should be after the url usage
app.use(error) 
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);//await because it returns a promise
        app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
    );
    } catch (error) {
        console.log(error);
    }
};

start()