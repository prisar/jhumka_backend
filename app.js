const express = require('express');
const cors = require('cors');

var app = express();
var port = process.env.PORT || 8000;

app.use(cors());

app.use(express.static('public'));

app.use('/api/products', require('./routes/product'));

app.listen(port, function() {
    console.log(`Express server started on port: ${port}`);
});
