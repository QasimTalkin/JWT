const router = require('express').Router();
const Users = require('../../../models/Users');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const users = await Users.scope('withoutPassword').findAll({
    
  });
  res.json(users);
});

//signup
router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const dbUserData = await Users.scope('withoutPassword').create({
      username,
      email,
      password
    });
    // res.render('userDashBoard', user);
    
    req.session.save(() => {
      req.session.user_id = dbUserData.user_id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json(dbUserData);
    });
  }
  catch(error){
    res.status(400).json(error);
  }
});
//signin
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const dbUserData = await Users.findOne({ where: { email } });
  if (dbUserData) {
    const isMatch = await bcrypt.compare(password, dbUserData.password);
    if (isMatch) {
      req.session.save(() => {
        req.session.user_id = dbUserData.user_id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        res.status(200).json({loggedIn:true}).end();
        return;
      });

    } else {
      res.status(400).json({ msg: 'Invalid credentials' });
    } 
  }
});
module.exports = router;
