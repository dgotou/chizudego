<<<<<<< HEAD

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
=======
/*
 * GET home page.
 */
/*
var items = [
    { "text": "1st Post." }
    , { "text": "2nd Post." }
];

var model = require('../model');
var Post = model.Post;
*/
exports.index = function(req, res){
    res.render('index', { title: 'Entry List', items: items })
};

exports.form = function(req, res){
    res.render('form', { title: 'New Entry' })
};

exports.create = function(req, res){
    console.log(req.body.text);
    res.redirect('/');
};
>>>>>>> ca455b6a5364b1b14759a8ef40b3a081e230b01d
