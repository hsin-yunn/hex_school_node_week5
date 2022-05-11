var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController');
const handleErrorAsync = require('../service/handleErrorAsync');

//index
router.get('/', handleErrorAsync(controller.index));
//store
router.post('/', handleErrorAsync(controller.store));
//show
router.post('/:id', handleErrorAsync(controller.show));

module.exports = router;
