module.exports = function (app, db) {
    app.post('/transaction', (req, res) => {
        const note = { type: req.body.type, sum: req.body.sum, date: req.body.date };
        db.collection('transactions').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Success');
            }
        });
    });

    app.get('/test', (req, res) => {
        res.json('Test completed!');
    });

    app.get('/transactions', (req, res) => {
        const transactions = db.collection('transactions').find();
        console.log(transactions);
    });

    // app.get('/notes/:id', (req, res) => {
    //     const id = req.params.id;
    //     const details = { '_id': new ObjectID(id) };
    //     db.collection('notes').findOne(details, (err, item) => {
    //         if (err) {
    //             res.send({ 'error': 'An error has occurred' });
    //         } else {
    //             res.send(item);
    //         }
    //     });
    // });
};