var User = require('../models/user');

module.exports = function(app){
  app.get('/api/setupUsers', function(req,res){
    //seed the database
    var starterUsers = [
      {
        firstName:'Ryan',
        lastName:'Giordano',
        email: 'rgiorda1@gmail.com',
        password: 'test123'
      }
    ];
    User.create(starterUsers, function(err,results){
      res.send(results);
    })
  });
}
