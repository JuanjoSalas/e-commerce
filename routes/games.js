const express = require('express');
const router = express.Router();
const GameController = require('../controllers/GameController')
const {authentication} = require('../middleware/authentication')


router.post('/',authentication,GameController.create);
router.put('/id/:id',authentication,GameController.update);
router.delete('/id/:id',authentication,GameController.delete);
router.get('/',GameController.getAll);
router.get('/id/:id',GameController.getById);
router.get('/name/:name',GameController.getByName);
router.get('/price/:price',GameController.getByPrice);
router.get('/price',GameController.orderPrice);

module.exports = router;