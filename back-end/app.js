const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.get('/', (req, res) => {
    res.send('We are live')
})

mongoose.connect('mongodb+srv://testUser:<password>@testdb-ipr1b.mongodb.net/test?retryWrites=true&w=majority')

app.listen(3000);
