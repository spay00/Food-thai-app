const express = require('express');
const path = require('path');
const app = express();

const homeRoutes = require('./routes/homeRoutes');
const foodRoutes = require('./routes/foodRoutes'); // เพิ่มเข้ามา
const typeRoutes = require('./routes/typeRoutes');
// กำหนด middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// กำหนด routes
app.use('/', homeRoutes);
app.use('/food', foodRoutes); // เส้นทางสำหรับหน้าอาหาร
app.use('/type', typeRoutes); // เส้นทางสำหรับหน้าอาหาร
// เปิดเซิร์ฟเวอร์ที่ port 3000
app.listen(3000, () => console.log("Server running at http://localhost:3000"))