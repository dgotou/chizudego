
/*
 * GET home page.
 */

var items = [
    { "text": "1st Post." }
    , { "text": "2nd Post." }
];
var model = require('../model');
var Post = model.Post;

exports.index = function(req, res){
  res.render('index', { title: 'Express', items:items });
};

exports.form = function(req, res){
    res.render('form', { title: 'Form Entry' })
};

exports.create = function(req, res){
    var newPost = new Post(req.body);
    newPost.save(function(err){
        if (err) {
            console.log(err);
            res.redirect('back');
        } else {
            res.redirect('/');
        }
    });
};
