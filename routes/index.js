var express = require('express');
var router = express.Router();

let items = [{
  user:"asif azad",
  age:"21",
  place:"malapuram"
},
{
  user:"fayis",
  age:"22",
  place:"calicut"
},{
  user:"abinav",
  age:"21",
  place:"kannur"
}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { items });
});

module.exports = router;
