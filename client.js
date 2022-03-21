var net = require('net');
var fs = require('fs');


var PORT = '9001';
var HOST = '127.0.0.1';
var FILEPATH = './hello.html';

var client = new net.Socket()

//connect to the server
client.connect(PORT,HOST,function() {
    'Client Connected to server'
    client.write('Hello from client!');
    fs.readFile(FILEPATH , (err, data) =>{
      if(!err){
        console.log(data.length);
        client.write(data);
      }
      else {
        console.log('readfile hello.html err');
      }
    });
   

});

client.on('data', (data) => {
  console.log('Server says: ', data);

})


client.on('error', function(err) {
    console.log(err);
});