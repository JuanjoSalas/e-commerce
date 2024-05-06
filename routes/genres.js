const express = require('express');
const router = express.Router();
const GenreController = require('../controllers/GenreController')

router.post('/',GenreController.create);
router.put('/id/:id',GenreController.update);
router.delete('/id/:id',GenreController.delete);
router.get('/',GenreController.getAll);
router.get('/id/:id',GenreController.getById);
router.get('/name/:name',GenreController.getByName);

module.exports = router;