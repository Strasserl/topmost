const router = require('express').Router();
const { Student, Teacher, TeacherMessage } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const teacher = await Teacher.find({
      where: { id: req.params.id },
      include: [{ model: Student, TeacherMessage }],
    });
    res.json(teacher);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl } = req.body;
    res.status(201);
    res.json(
      await Teacher.create({
        firstName,
        lastName,
        email,
        imageUrl,
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

    Teacher.update({ ...updatedFields }, { where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const teacher = await Teacher.findByPk(+req.params.id);
    if (!teacher) return res.sendStatus(404);
    await teacher.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
