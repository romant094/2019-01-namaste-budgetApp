module.exports = function (app, db) {
    app.post('/transaction', (req, res) => {
        const data = { type: req.body.type, sum: req.body.sum, date: req.body.date };
        db.collection('transactions').insert(data, (err, result) => {
            if (err) {
                res.json({ 'Error': 'An error has occurred' });
            } else {
                res.json(req.body);
            }
        });
    });

    app.get('/transactions', (req, res) => {
        db.collection('transactions').find().toArray(function (err, items) {
            res.json(items);
        });
    });

    app.post('/budget', (req, res) => {
        const data = { budget: req.body.budget };
        db.collection('configure').insert(data, (err, result) => {
            if (err) {
                res.json({ 'Error': 'An error has occurred' });
            } else {
                res.json(req.body);
            }
        });
    });

    app.delete('/budget', (req, res) => {
        db.collection('configure').remove({}, (err, result) => {
            if (err) {
                res.json({ 'error': 'An error has occurred' });
            } else {
                res.json('Budget cleared!');
            }
        });
    });

    app.get('/budget', (req, res) => {
        const budget = db.collection('configure').find();
        // console.log(res);
        res.send(res.data);
    });


};