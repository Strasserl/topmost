const router = require('express').Router();
const { StudentAnswer, Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const answers = await StudentAnswer.findAll({
      include: [{ model: Student }],
    });
    res.json(answers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const answer = await StudentAnswer.find({
      where: { id: req.params.id },
    });
    res.json(answer);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { mood, comment } = req.body;
    res.status(201);
    res.json(
      await StudentAnswer.create({
        mood,
        comment,
      })
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
