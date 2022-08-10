const express = require('express');
const path = require('path');
const app = express();
const routes = require('./controllers');
const port = process.env.PORT || 3001;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})
const sequelize  = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

const sess = {
  secret: process.env.SESSION_SECRET,
  cookies: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize })
}

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);


async function initializeServer() {
  try {
    const dbConnect = await sequelize.sync({
      force: false
    })
    app.listen(port, () => { console.log(`Server is running on port ${port}`); });
  }
  catch (e){
    throw e.message
  }
}


app.use(function(req, res, next) {
  console.log('Request URL:', req.url);
  next();
});

app.get('/session', (req, res)=> {
  req.session.viewsCount = req.session.viewsCount || 0;
  req.session.viewsCount++;
  res.send(`You visited this page ${req.session.viewsCount} times`);
  
})

initializeServer();