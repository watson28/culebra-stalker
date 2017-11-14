const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars', exphbs());
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// assets routes
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// template route
app.get('*', (req, res) => {
    res.render("template");
});

app.listen(3000, () => {
    console.log('server started on port 3000');
});