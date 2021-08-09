const router = require('express').Router();
const driveRoutes = require('./drive-routes');
const userRoutes = require('./user-routes');

router.use('/drive-routes', driveRoutes);
router.use('/user-routes', userRoutes);

module.exports = router;
