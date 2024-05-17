const express = require('express');
const {uploadData ,downloadImg} =require('../controller/fileUploader.js');
const upload = require('../utils/uploads.js');
const router = express.Router();

router.post('/upload',upload.single('file'),uploadData);
router.get('/file/:id',downloadImg)
module.exports=router;