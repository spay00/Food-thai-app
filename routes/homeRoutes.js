// routes/homeRoutes.js - ก ำหนดเส้นทำงส ำหรับหน้ำหลัก
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')
router.get('/', homeController.getHomePage)
module.exports = router;