const apiServices = require('./api-services');
const bodyParser = require('body-parser');
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const standardResponseMiddleware = require('./middlewares/standard-response-middleware');
const errorHandlerMiddleware = require('./middlewares/error-handler-middleware');

// setup db configuration
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.engine('handlebars', exphbs());
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(standardResponseMiddleware);

// assets routes
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// api routes
apiServices(app);

app.use(errorHandlerMiddleware);

// template route
app.get('*', (req, res) => {
    res.render("template");
});

app.listen(process.env.PORT, () => {
    // eslint-disable-next-line
    console.log('server started on port', process.env.PORT);
});