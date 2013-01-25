
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path')
    , app = express()
    , server = http.createServer(app)
    , io = require('socket.io').listen(server)
;
//comment
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
//  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

io.sockets.on('connection', function (socket) {
    //クライアント側からのイベントを受け取る。
    socket.on('msg send', function (msg) {
        //イベントを実行した方に実行する
        socket.emit('msg push', msg);
        //イベントを実行した方以外に実行する
        socket.broadcast.emit('msg push', msg);
    });
    //接続が解除された時に実行する
    socket.on('disconnect', function() {
        log('disconnected');
    });
});

// server.listen(app), function(){});
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
