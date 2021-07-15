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

### Me
The two main superpowers in animation are animations and transforms
animations are temporary (i.e you apply the animation and the element remains as it was after the duration, so you can be creative)
Transforms are basically ways of introducing changes but they can be covered later.
## Animation props

3. `animation-fill-mode` : define what happens after animation
   1. `forwards`: keep the final state
4. `animation-iteration-count` : how many times to run animation
   1. takes number, and `infinite`
   2. the keyframe at which our changes occur can also be used to change animation rates, 
   3. This is all time and rate, rate is length over time. The keyframes denoted length, while time is denoted by duration.
      1. `animation-duration` : change how long the animation will last
5. Then we have even more orthodox methods of specifying speed using timing functions and keywords:

In CSS animations, the `animation-timing-function` property controls how quickly an animated element changes over the duration of the animation. If the animation is a car moving from point A to point B in a given time (your `animation-duration`), the `animation-timing-function` says how the car accelerates and decelerates over the course of the drive.

There are a number of predefined keywords available for popular options. For example, the default value is `ease`, which starts slow, speeds up in the middle, and then slows down again in the end. Other options include `ease-out`, which is quick in the beginning then slows down, `ease-in`, which is slow in the beginning, then speeds up at the end, or `linear`, which applies a constant animation speed throughout.
6. The ultimate animation speed ability: bezier curves, editable on devtools

In CSS animations, Bezier curves are used with the `cubic-bezier` function. The shape of the curve represents how the animation plays out. The curve lives on a 1 by 1 coordinate system. The X-axis of this coordinate system is the duration of the animation (think of it as a time scale), and the Y-axis is the change in the animation.

The cubic-bezier function consists of four main points that sit on this 1 by 1 grid: `p0, p1, p2`,and `p3`. `p0` and `p3` are set for you - they are the beginning and end points which are always located respectively at the origin (0, 0) and (1, 1). You set the x and y values for the other two points, and where you place them in the grid dictates the shape of the curve for the animation to follow. This is done in CSS by declaring the x and y values of the `p1` and `p2` "anchor" points in the form: `(x1, y1, x2, y2)`

when any two points are equal, it produces the same effect as the linear timing function keyword

7. Still on beziers

Beziers generally always end at 1,1 and always start at 0,0
Since the x-axis is how long it takes and the y our distance, we can specify a long distance over a short time for sped up animations e.g

```CSS
animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
```

Here, we generally no change at first as our final and initial for 0 - 1st point is same, then we rev up distance covered over little time in p2 with y2 jumping to 1 and x2 only increasing to 0.58, this is reversed as x2 tends to 1 while y2 stays still (neutral start - this is there because we need to specify x1 to get to x2, fast move-in (the new start) , slow end)


*From codecamp:*

Remember that all cubic-bezier functions start with p0 at (0, 0) and end with p3 at (1, 1). In this example, the curve moves faster through the Y-axis (starts at 0, goes to p1 y value of 0, then goes to p2 y value of 1) than it moves through the X-axis (0 to start, then 0 for p1, up to 0.58 for p2). As a result, the change in the animated element progresses faster than the time of the animation for that segment. Towards the end of the curve, the relationship between the change in x and y values reverses - the y value moves from 1 to 1 (no change), and the x values move from 0.58 to 1, making the animation changes progress slower compared to the animation duration.

Note: cubic beziers can extend more than the 1,1 limit which is useful for delays. HAIL DEVTOOLS
### Sick pick
1. **Moving animations** One can make an object move using the offset properties of top right and bottom and left to positioned elements. Just make sure to reset it manually afterwards by reversing your total offset using the negative sign at 100% for smoothness


