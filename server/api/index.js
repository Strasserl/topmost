const router = require('express').Router();

router.use('/students', require('./students'));
router.use('/teachers', require('./teachers'));
router.use('/teacherMessages', require('./teacherMessages'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
