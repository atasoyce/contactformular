const express = require('express');
const session = require('express-session');
const mysqlStore = require('express-mysql-session');
const databaseManager = require('./databaseManager');
const router = require('./router');

let sessionStore = new mysqlStore({}, databaseManager.connectionParameters);


let app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
//app.use(express.json);


app.use(session({
        secret: 'High$Priority&Password**',
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
        cookie: {
            maxAge: 24*60*60*1000
        }
    }
));


app.get('/', router.start);
app.post('/contactdata', router.getContactdata);

app.listen(80, () => {
    console.log('Server started on port 80')
});