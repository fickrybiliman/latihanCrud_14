1.  change to the directory || cd to path
2.  npm init
3.  npm install express --save
4.  create new file ,index.js || touch index.js
5.  const express = require('express');
    const app = express();
    app.get('/', function(request, response) {
       response.send('Webserver of mine');
    })
    app.listen(5000, function() {
       console.log(`Server running on http://localhost:5000`);
    })
    module.exports = app 
6.  create new folder `routes`
7.  create new file `router.js` under folder `routes`
8.  const router = require('express').Router();
9.  create new folder `controllers`
10. create new file (endpoint name, contoh : `users.js`) under folder controllers
11. npm install sequelize
12. sequelize init
13. npm install mysql2
14. change and check config.json
15. sequelize-cli model:generate --name User --attributes name:string,label:string  picture:string,email:string,phone:string,website:string,summary:string
16. sequelize-cli db:migrate
