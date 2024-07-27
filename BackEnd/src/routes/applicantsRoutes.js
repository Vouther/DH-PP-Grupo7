const express = require('express');
const router = express.Router();
const applicantsController = require('../controllers/applicantsController');

//API aspirantes
router.get('/',applicantsController.renderList);
router.get('/:id',applicantsController.renderDetail);
router.post('/register',applicantsController.renderRegister);

module.exports = router;
