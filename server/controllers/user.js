const {connection}=require('../DatabasecConfig/config.js')
const crypto = require('crypto');
const middleware = require('../midelware/auth.js');
const utils=require('../midelware/utils.js')
// const session=require ('./session.js')

module.exports = {
    LoginUser: (req, res) => {
      // Validate that req.body.Password exists
      if (!req.body.password) {
        return res.status(400).send('Password is required in the request body');
      }
  
      var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex');
  
      const query = `SELECT * from User where email="${req.body.email}"`;
      connection.query(query, (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else if (results.length > 0 && results[0].password === passwordHashed) {
          var session = utils.RandomString(32);
          middleware.CreateSession(req, res, results[0].id, session);
        } else if (results.length === 0 || results[0].password !== passwordHashed) {
          res.status(200).send('Something went wrong');
        } else {
          res.status(404).send('Not found');
        }
      });
    },
  };
  