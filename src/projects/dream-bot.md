<!-- 2021-08-18- -->

# Python Dream Bot

Intentionally Bad Image Manipulation

`Python Dream Bot` is almost complete. What is the dream bot? I'm glad you asked!

[![original1](/assets/images/dream-bot/original1.jpg)](https://www.pexels.com/photo/selective-focus-photo-of-brown-monkey-2213575/)[![dream1](/assets/images/dream-bot/dream1.png)](/assets/images/dream-bot/dream1.png)

The `Python Dream Bot` (patent not pending), is an intentionally bad guessing algorithm based off of the logic used for my jekyll post generator (See the costs bot post).

In short it works like this:

1. It resizes the original picture to user specification.
1. It stares at a picture and remember what pixels are near other pixels.
   [![original3](/assets/images/dream-bot/original3.jpg)](https://www.pexels.com/photo/cute-corgi-in-front-of-a-laptop-5122188/)
1. It creates a copy of the original picture, but removes large sections of the picture.
   [![original3](/assets/images/dream-bot/intermediate3.png)](/assets/images/dream-bot/intermediate3.png)
1. It looks at whatever pixels exist on the copy and fill in the missing pixels.

[![original3](/assets/images/dream-bot/original3.jpg)](https://www.pexels.com/photo/cute-corgi-in-front-of-a-laptop-5122188/)[![dream3](/assets/images/dream-bot/dream3.png)](/assets/images/dream-bot/dream3.png)

The previous image was exaggerated to better show the process:

[![original2](/assets/images/dream-bot/original2.jpg)](https://www.pexels.com/photo/silhouette-photo-of-person-holding-door-knob-792032/)[![dream2](/assets/images/dream-bot/dream2.png)](/assets/images/dream-bot/dream2.png)
