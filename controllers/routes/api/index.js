const router = require('express').Router();
const userRouter = require('./users');
const serviceRequestRouter = require('./serviceRequest');
router.use('/users', userRouter);
router.use('/serviceRequests', serviceRequestRouter);

module.exports = router;