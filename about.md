# About e-LED a 'Web Arduino',a webpage controlled Arduino 

This page is about a tutorial like guide for this IoT Project.A user needs to know some basic info about the software,hardware and setup of this assembly.

## Node.js server

This is our main web interface provider.It provides us woth the web sockets to which it can listen and hadle requests.
Before we setup the Node.js server we need to know the name of the serialport your Arduino is attached to. You can find the name of your serialport, it will look something like `/dev/tty.wchusbserialfa1410`.
We need to install some dependencies like Serialsocket package.

> Note: Make sure to change the name of the serialport.

## Arduino

We can also write and also run our code on online editor using [Arduino Create](https://create.arduino.cc/editor).
Here we also need to download and install libraries like Neopixel library.

 On a Mac using the Terminal and entering the following command:

```
ls /dev/{tty,cu}.*
```

On a PC you can use the command line and the following command:

```
chgport
```

Or you can find the name in [Arduino Create](https://create.arduino.cc/editor) in the drop down menu used to select your Arduino.

The communication between our web socket interface and Arduino port happens through Serial Communication Protocol through transfer of strings.


## Launching Application 

1.Upload sketch on Arduino board.

2.Using the Terminal start your Node.js app using `node app.js`.

3.Open up a browser and enter the URL `http://localhost:3000/`.

4.The interface and the buttons are self explainatory.

5.The values must be strings or the alerts will force you to write in proper format.

6.Check connections properly and the time limits are max 5 mins for a color.

7.For connections you can refer to the Tinckercad Circuit Diagram and for software code understanding you can always serach and understand the functions but the function names are self explainatory.

## Some useful links
* [Arduino Create](https://create.arduino.cc/editor) 
* [SerialPort NPM](https://www.npmjs.com/package/serialport)
* [Socket.io](https://socket.io/)
These links can help you to understand majority part of the code written.

<i>I am working on styling of this website and also some backend part to make it more eye catchy and responsive :) </i>

