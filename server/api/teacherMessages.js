const router = require('express').Router();
const { TeacherMessage } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const messages = await TeacherMessage.findAll();
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const message = await TeacherMessage.find({
      where: { id: req.params.id },
    });
    res.json(message);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { greeting, agenda } = req.body;
    res.status(201);
    res.json(
      await TeacherMessage.create({
        greeting,
        agenda,
      })
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
