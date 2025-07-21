const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Cấu hình Express để phục vụ các file tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});