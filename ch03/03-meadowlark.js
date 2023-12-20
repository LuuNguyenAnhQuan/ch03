const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const app = express()
// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
defaultLayout: 'main',
} ))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000
app.get('/', (req, res) => res.render('home'))
const fortunes = [

"Conquer your fears or they will conquer you.",

"Rivers need springs.",

"Do not fear what you don't know.",

"You will have a pleasant surprise.",

"Whenever possible, keep it simple.",
]
app.get ('/about', (req,res)=> {
    const ramdomFortune =fortunes[Math.floor(Math.random()*fortunes.length)]
    req.render('about',{fortunes: ramdomFortune})
})
app.use((req, res) =>{
    res.status(404)
    res.render('404')
})

// custom 500 page
app.use((err, req, res,next)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Expree started on http://loclhost:${port}; `+
    `press Ctrl-C to terminate.`))