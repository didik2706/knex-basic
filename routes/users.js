const express = require('express');
const router = express.Router();

const users = require('../controller/userController')
/* GET users listing. */
router.post('/', users.addUser);
router.get('/', users.getAll);
router.get('/:id', users.getDetails);

module.exports = router;
