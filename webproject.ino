#include <Adafruit_NeoPixel.h> // the library for controlling NeoPixel LEDs
#define PIN_NEO_PIXEL 3 // din pin of the neostrip connected to this digital pin of arduino 
#define NUM_OF_LEDS 8 // this is the number of leds present on the neostrip it may vary and changed accordingly 

//   NEO_GRB     Pixels are wired for GRB bitstream
//   NEO_KHZ800  800 KHz bitstream
Adafruit_Neopixel strip=Adafruit_Neopixel(NUM_OF_LEDS,PIN_NEO_PIXEL,NEO_GRB + NEO_KHZ800); //making an object named "strip" 

void setup() {
  Serial.begin(115200); // setting up serial communicattion 
  strip.begin(); 
  strip.clear(); // to set default the led strip off

}

void loop() { 
    /*we will  search for serial data available for arduino transferred by our web socket and then perform all our needed actions */
    if (Serial.available() > 0) {
    
    String receivedString = "";
    
    while (Serial.available() > 0) {
      receivedString += char(Serial.read ());
    }
    if(receivedString == "1"){
      for (int pixel = 0; pixel < NUM_OF_LEDS; pixel++) { // for each pixel
    strip.setPixelColor(pixel, strip.Color(0, 255, 0)); //turn on the strip and show the color green it only takes effect if pixels.show() is called
  }
  strip.show()  
    }
    else{
      strip.clear();
      strip.show();
    }

    if(receivedString.startsWith("tt")){
    int t=((int)receivedString.substring(2))*1000;
    }
    // here onwards we will put our code for led strip in a infinite loop going on till the time our user has entered or pressed Turn Off button
    unsigned long time_here=millis();
    while(true){
      
      if(receivedString=="0"){
        strip.clear();
        strip.show();
        break;
      }

      if(receivedString.startsWith("tr")){
        int tr=((int)receivedString.substring(2))*1000;
      }
      if(receivedString.startsWith("r")){
      int redc=(int)receivedString.substring(1);
      for (int pixel = 0; pixel < NUM_OF_LEDS; pixel++) { // for each pixel
    strip.setPixelColor(pixel, strip.Color(redc, 0, 0)); // it only takes effect if pixels.show() is called
  }
  strip.show(); // send the updated pixel colors to the NeoPixel hardware.
  delay(tr); 

    }
     if(receivedString.startsWith("tg")){
        int tr=((int)receivedString.substring(2))*1000;
      }
      if(receivedString.startsWith("g")){
      int greenc=(int)receivedString.substring(1);
      for (int pixel = 0; pixel < NUM_OF_LEDS; pixel++) { // for each pixel
    strip.setPixelColor(pixel, strip.Color(0, greenc, 0)); // it only takes effect if pixels.show() is called
  }
  strip.show(); // send the updated pixel colors to the NeoPixel hardware.
  delay(tg); 


    }

     if(receivedString.startsWith("tb")){
        int tb=((int)receivedString.substring(2))*1000;
      }
      if(receivedString.startsWith("b")){
      int bluec=(int)receivedString.substring(1);
      for (int pixel = 0; pixel < NUM_OF_LEDS; pixel++) { // for each pixel
    strip.setPixelColor(pixel, strip.Color(0, 0, bluec)); // it only takes effect if pixels.show() is called
  }
  strip.show(); // send the updated pixel colors to the NeoPixel hardware.
  delay(tb); 
  }
  unsigned long time_now=millis();
  if(time_now-time_here==t){
    strip.clear();
    strip.show();
    break;
  }

}
    }
}
