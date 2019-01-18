// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (request, response) => {
    response.render('home', {
        name: 'Tony'
    })
})
app.get('/buy', (request, response) => {
    response.render('buy', {
        name: 'Tony'
    })
})
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.post('/test-page', function(req, res) {
    var name = req.body.name,
        color = req.body.color;
    // ...
});
app.listen(3001)