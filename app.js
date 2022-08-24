var http = require('http');
var fs = require('fs');
var index = fs.readFileSync( 'index.html');

var SerialPort = require('serialport');
const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort('your_arduino_port_here',{ 
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// used variables to handle each event and listened using socket.io and then write to serial port of Arduino
var io1 = require('socket.io').listen(app);

io1.on('connection', function(socket) {
    
    socket.on('lights',function(data){
        
        console.log( data ); // just to check on our side
        port.write( data.status );
    
    });
    
});

var io2=require('socket.io').listen(app);

io2.on('connection',function(socket){
    socket.on('shadetime',function(data){
        console.log(data);
        port.write(data.time_interval);
    });
});

var io3=require('socket.io').listen(app);

io3.on('connection',function(socket){
    socket.on('shade1',function(data){
        console.log(data);
        port.write(data.rgb_value1);
    });
});

var io4=require('socket.io').listen(app);

io4.on('connection',function(socket){
    socket.on('timer',function(data){
        console.log(data);
        port.write(data.time_red);
    });
});

var io5=require('socket.io').listen(app);

io5.on('connection',function(socket){
    socket.on('shade2',function(data){
        console.log(data);
        port.write(data.rgb_value2);
    })
});

var io6=require('socket.io').listen(app);

io6.on('connection',function(socket){
    socket.on('timeg',function(data){
        console.log(data);
        port.write(data.time_green);
    });
});

var io7=require('socket.io').listen(app);

io7.on('connection',function(socket){
    socket.on('shade3',function(data){
        console.log(data);
        port.write(data.rgb_value3);
    });
});

var io8=require('socket.io').listen(app);

io8.on('connection',function(socket){
    socket.on('timeb',function(data){
        console.log(data);
        port.write(data.time_blue);
    });
});
app.listen(port_number);