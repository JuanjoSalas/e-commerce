const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const {authentication} = require('../middleware/authentication')

router.post('/',UserController.create);
router.post('/login',UserController.login);
router.delete('/logout',authentication,UserController.logout)
router.get('/',UserController.getAll);

module.exports = router;