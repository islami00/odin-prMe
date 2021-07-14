# Moon crescent

Manipulate the square element in the editor to create the moon shape. First, change the `background-color` to `transparent`, then set the `border-radius` property to `50%` to make the circular shape. Finally, change the `box-shadow` property to set the `offset-x` to `25px`, the `offset-y` to `10px`, `blur-radius` to `0`, `spread-radius` to `0`, and color to `blue`.

This is really nice.
It combines a solid box-offset that is not spread out to simply create a cut out from a circle that makes it look like a crescent.
Of course, this requires shifting of the blurred crescent too.

code:

```CSS
div.center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
```

# Heart

This is basically two rectangles one on top of the other

It is two cricles and a rectangle.
The circles are postioned to fillinto the gap on the sides created when the rectangle is rotated by 45deg to the left (-45deg)

code:

```CSS
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /*Important*/
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content:"" ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

```

# Keyframes and animation

To animate an element, you need to know about the animation properties and the `@keyframes` rule. The animation properties control how the animation should behave and the `@keyframes` rule controls what happens during that animation. There are eight animation properties in total. This challenge will keep it simple and cover the two most important ones first:

`animation-name` sets the name of the animation, which is later used by `@keyframes` to tell CSS which rules go with which animations.

`animation-duration` sets the length of time for the animation.

`@keyframes` is how to specify exactly what happens within the animation over the duration. This is done by giving CSS properties for specific "frames" during the animation, with percentages ranging from 0% to 100%. If you compare this to a movie, the CSS properties for 0% is how the element displays in the opening scene. The CSS properties for 100% is how the element appears at the end, right before the credits roll. Then CSS applies the magic to transition the element over the given duration to act out the scene.
