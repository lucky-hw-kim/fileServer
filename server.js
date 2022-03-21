var net = require('net');
var fs = require('fs');
var buffer = require('buffer');
let SaveFile = "./received.txt"

var server = net.createServer(function(conn) {
    console.log('server connected');

});

var HOST = '127.0.0.1';
var PORT = '9001';

server.listen(PORT, HOST, function() {
    //listening
    console.log('server bound to ' + PORT + '\n');

    server.on('connection', function(conn) {
        console.log('connection made...\n')
        conn.on('data', function(data) {
            console.log('data received');
            if(data.length < 40){
              console.log('Client says: \n' + data);
            }
            if(data.length >= 40){
              console.log (`Data is saved as ${SaveFile}`)
            }
            fs.writeFileSync(SaveFile, data, function(err) {
              if(err) {
                  return console.log(err);
              }
              console.log("The file was saved!");
          }); 
        });
    })
});



