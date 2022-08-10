const express = require('express');
const router = express.Router();
router.use('/', require('./routes/home-routes.js'));
router.use('/api', require('./routes/api'));
module.exports = router;