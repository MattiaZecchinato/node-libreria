const express = require('express');

const router = express.Router();

//controllers
const controllers = require('../controllers/bookController.js');

//middleware
const validator = require('../middlewares/validator.js');

//index
router.get('/', controllers.index);

//show
router.get('/:id', controllers.show);

//store
router.post('/', validator, controllers.store);

//update
router.put('/:id', validator, controllers.update);

//destroy
router.delete('/:id', controllers.destroy);


module.exports = router;