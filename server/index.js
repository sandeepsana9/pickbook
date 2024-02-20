const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3002;
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(morgan('dev')); 

mongoose.connect('mongodb://localhost:27017/picbook', {
})
    .then(() => {
        console.log(`Database connection established`);
    })
    .catch(error => {
        console.error('Could not establish mongoose connection:', error);
    });
app.use("/api", require('./routes'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});