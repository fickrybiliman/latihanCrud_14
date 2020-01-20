const express = require('express');
const app = express();
const router = require('./routes/router');

const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(port, function() {
   console.log(`Server running on http://localhost:${port}`);
})

module.exports = app;