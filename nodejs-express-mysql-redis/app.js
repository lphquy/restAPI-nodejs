const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3001;

//database
const db = require('./config/databases');

//body-parser enable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//test db
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error ' + err))

//routes
app.get('/', (req, res) => {
    res.send('Welcome to homepage');
})
app.use('/gigs', require('./routes/gig'));


//start server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
