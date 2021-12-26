const express = require('express');
const app = express();
const api = require('./routes/index.js');

app.use('/', api);
app.use('/api', api);

const port = 3000;

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});
