const express = require('express');
const router = express.Router();
const GenreController = require('../controllers/GenreController')

router.post('/',GenreController.create);
router.put('/id/:id',GenreController.update);
router.delete('/id/:id',GenreController.delete);
router.get('/',GenreController.getAll);

module.exports = router;