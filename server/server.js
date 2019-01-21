const express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    bodyParser = require('body-parser'),
    db = require('./config/db'),
    cors = require('cors'),
    app = express(),
    port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);

    app.listen(port, () => {
        console.log('We are alive on ' + port);
    });
})