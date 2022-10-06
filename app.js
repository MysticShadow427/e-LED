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

// used variables to handle each event emmited when we enter value in our forms and listened using socket.io and then write to serial port of Arduino
var io1 = require('socket.io').listen(app);

io1.on('connection', function(socket) {
    
    socket.on('lights',function(data){
        
        console.log( data ); // just to check on our side
        port.write( data.status );
    
    });
    
    socket.on('shadetime',function(data){
        console.log(data);
        port.write(data.time_interval);
    });
    
    socket.on('shade1',function(data){
        console.log(data);
        port.write(data.rgb_value1);
    });
    
    socket.on('timer',function(data){
        console.log(data);
        port.write(data.time_red);
    });
    
    socket.on('shade2',function(data){
        console.log(data);
        port.write(data.rgb_value2);
    });
    
    socket.on('timeg',function(data){
        console.log(data);
        port.write(data.time_green);
    });
    
    socket.on('shade3',function(data){
        console.log(data);
        port.write(data.rgb_value3);
    });
    
    socket.on('timeb',function(data){
        console.log(data);
        port.write(data.time_blue);
    });
    
});

app.listen(port_number);
