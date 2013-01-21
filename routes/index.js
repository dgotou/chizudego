
/*
 * GET home page.
 */

<<<<<<< HEAD
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
=======
var model = require('../model');
var Post = model.Post;

exports.index = function(req, res){
    Post.find({}, function(err, items){
        res.render('index', { title: 'Entry List', items: items })
    });
};

exports.form = function(req, res){
    res.render('form', { title: 'New Entry' })
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
>>>>>>> a06d9ff6e29c264654745ebfa7157564ae232e4c
