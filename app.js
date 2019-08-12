const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const jwt = require('jsonwebtoken');
const cors = require('cors');

var app = express();
var port = process.env.PORT || 8000;

app.use(cors())

app.listen(port, function() {
    console.log(`Express server started on port: ${port}`);
});
