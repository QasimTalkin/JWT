const serviceRequest = require('../../../models/ServiceRequest');
const router = require('express').Router();


router.post('/', async (req, res) => {
  if (req.session.loggedIn) {
    const {title, description} = req.body;
    const create_request = await serviceRequest.create({ title, description, user_id: req.session.user_id });
    res.json(create_request);
    return;
  }
  res.redirect('/login');
});


module.exports = router;