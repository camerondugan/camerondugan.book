<!-- 2021-12-02- -->

# Arduinos

Tiny Computers that You Can Program

I've been disappointed with the lack of consumer grade AR displays, and I found myself wondering how hard it could really be to make one.

Turns out, it can be very difficult to get a good image projected into your eye at a comfortable focus. With the help of a magnifying glass, tiny mirror and piece of glass, a 3d printer / glue and cardboard, Raspberry pi / Arduino / microcontroller, and a really tiny display, you can create a small pair of glasses for under ~100 USD that can display basic information. (batteries not included)

The key is pointing the display through a magnifying lens at the correct distance to get the image to be in focus. The image passes from the display to the mirror onto the glass, getting flipped horizontally or vertically twice keeping the original intended image.

Since it's an Arduino, you could get the glasses to do anything an Arduino could do. Some examples: connect to wifi/bluetooth, send radio/infrared signals, use buttons/switches and LEDs. The limitations are mainly with how much information the Arduino can process when rendering the display, the Arduino libraries allow for mainly drawing individual pixels, lines and text. Nothing too fancy, but enough to make a useful AR gadget.
