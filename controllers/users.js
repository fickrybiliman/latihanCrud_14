const model = require('../models');
const { Op } = require("sequelize");

function createUsers(request, response) {
   model.User.create({
      user: request.body.user,
      age: request.body.age,
      active: request.body.active
   })
   .then( function(result) {
      response.json(result);
   })
   .catch( function(error) {
      response.json({error: error});
   })
}

function readUsers(request, response) {
   let query = request.query;

   if (query.q === undefined) {
      model.User.findAll()
      .then( function(result) {
         // console.log(query)
         response.json(result);
      })
      .catch( function(error) {
         response.json({error: error});
      })
   } else {
      model.User.findAll({
         where: {
            user: {
               [Op.like]: '%' + query.q + '%'
            }
         }
      })
      .then( function(result) {
         // console.log(typeof(query.q))
         response.json(result);
      })
      .catch( function(error) {
         response.json({error: error});
      })
   }
}

function updateUsers(request, response) {
   model.User.update({
      user: request.body.user,
      age: request.body.age,
      active: request.body.active
   }, {
      where: {
         id: request.params.id
      }
   })
   .then( function(result) {
      response.json(result);
   })
   .catch( function(error) {
      response.json({error: error});
   })
}

function deleteUsers(request, response) {
   model.User.destroy({
      where: {
         id: request.params.id
      }
   })
   .then( function(result) {
      response.json(result);
   })
   .catch( function(error) {
      response.json({error: error});
   })
}

module.exports = {
   createUsers,
   readUsers,
   updateUsers,
   deleteUsers
};