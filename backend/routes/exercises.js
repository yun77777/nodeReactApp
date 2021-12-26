const router = require('express').Router();
let Exercise = require('../models/exercise');

router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('err: ', err));
});

router.route('/add').post((req, res) => {
    const userName = req.body.userName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    console.log(req.body);
    const newExercise = new Exercise({
        userName,
        description,
        duration,
        date,
    });

    newExercise.save()
    .then(() => res.json('Exercise is added'))
    .catch(err => res.status(400).json('error: ', err));
});

module.exports = router;