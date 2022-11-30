const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/');


app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
