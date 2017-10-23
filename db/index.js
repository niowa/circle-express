
var uuid = require('uuid');
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://niowa:leska7480311@aa1ean2qhfxfrwd.cxghg3astuwi.us-west-2.rds.amazonaws.com:5432/ebdb');

function getAllUsers(req, res, next) {
	db.any('select * from users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createUser(req, res, next) {
	console.log(req.query.name);
	console.log(req.query.email);
	const user = {
		name: req.query.name,
		email: req.query.email
	};
	console.log(user.name);
	console.log(user.email);
	db.one(`INSERT INTO users(id, name, email) VALUES($1, $2, $3) RETURNING id`, [uuid.v4(), user.name, user.email], event => event.id)
	    .then(data => {
	        console.log(data);
	        res.send(data) // print new user id;
	    })
	    .catch(error => {
	        console.log('ERROR:', error); // print error;
	    });
}

module.exports = {
	getAllUsers,
	createUser
}
