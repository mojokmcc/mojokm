const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 设置静态文件夹
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/locales', express.static(path.join(__dirname, 'locales')));

// 路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

app.get('/items', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'items.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
