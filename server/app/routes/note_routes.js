const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    app.post('/transaction', (req, res) => {
        const data = { type: req.body.type, sum: req.body.sum, date: req.body.date, isDeleted: 0 };
        db.collection('transactions').insert(data, (err, result) => {
            if (err) {
                res.json({ 'Error': 'An error has occurred' });
            } else {
                res.json(req.body);
            }
        });
    });

    app.get('/transactions', (req, res) => {
        db.collection('transactions').find({ isDeleted: 0 }).toArray(function (err, items) {
            res.json(items);
        });
    });

    app.delete('/transaction/:id', (req, res) => {
        const id = req.params.id,
            details = { '_id': new ObjectID(id) };
        db.collection('transactions').update(
            { _id: id }, { $set: {isDeleted: 1} }
        );
            
        // db.collection('transactions').remove(details, (err, result) => {
        //     if (err) {
        //         res.send({ 'error': 'An error has occurred' });
        //     } else {
        //         res.send('Transaction ' + id + ' deleted!');
        //     }
        // });
    });

    app.post('/budget', (req, res) => {
        const data = { budget: req.body.budget };
        db.collection('configure').update(
            { _id: 1 }, { $set: data }
        );
    });

    app.get('/budget', (req, res) => {
        db.collection('configure').find().toArray((err, settings) => {
            if (err) {
                res.json({ 'error': 'An error has occurred' });
            } else {
                res.json(settings[0].budget);
            }
        });
    });


};