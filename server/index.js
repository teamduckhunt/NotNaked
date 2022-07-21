require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  res.send();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log(`Server listening at http://localhost:${PORT}`);
