const express = require('express')
// const expressHanlebars = require('express-handlebars')
const expressHandlebars = require('express- handlebars'). engine;
const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))


app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000
app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))
//app.get('/about', (req, res) => res.render('about1'))

// custom 404 page
app.use((req, res) =>{
    res.status(404)
    res.render('404')
})

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
})

app.listen(port, () => console.log(
    `Express started on http://locahost:${port}; ` +
    `press Ctrl-C to terminate.`
))