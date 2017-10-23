
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://niowa:leska7480311@mypingvinchikinstance.cxghg3astuwi.us-west-2.rds.amazonaws.com:5432/pingvinchik')

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

module.exports = {
	getAllUsers
}
