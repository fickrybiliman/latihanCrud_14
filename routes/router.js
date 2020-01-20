const router = require('express').Router();
const user = require('./user');

router.get('/', function(request, response) {
   response.send('My Webserver is Alive!!');
})

router.use('/users', user);

module.exports = router;
