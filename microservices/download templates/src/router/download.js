const express = require('express');
const router = express.Router();

const templatesDownload = require("../controllers/templatesDownload");


router.get('/template/:templateType/:isExample', templatesDownload);



module.exports = router;
