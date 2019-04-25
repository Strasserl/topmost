const router = require('express').Router();

router.use('/students', require('../api/students'));
router.use('/teachers', require('../api/teachers'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
