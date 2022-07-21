const express = require('express');

const app = express();

//publicフォルダ内のファイルを読み込む
app.use(express.static('public'));
app.use(express.static('image'));

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.listen(3000);