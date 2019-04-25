const router = require('express').Router();
const { Student, Teacher } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.find({
      where: { id: req.params.id },
      include: [{ model: Teacher }],
    });
    res.json(student);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, readingLevel } = req.body;
    res.status(201);
    res.json(
      await Student.create({
        firstName,
        lastName,
        email,
        imageUrl,
        readingLevel,
      })
    );
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const { updatedFields } = req.body;

    Student.update({ ...updatedFields }, { where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(+req.params.id);
    if (!student) return res.sendStatus(404);
    await student.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
