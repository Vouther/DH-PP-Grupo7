const express = require('express');
const router = express.Router();
const applicantsController = require('../controllers/applicantsController');

const multer = require('multer');
const upload = multer({ dest: 'public/img/' }); 

//API aspirantes
router.get('/',applicantsController.renderList);
router.get('/:id',applicantsController.renderDetail);
router.post('/register', upload.single('Imagen'),applicantsController.renderRegister);
router.post('/login',applicantsController.renderLogin);

module.exports = router;
