# Media Queries

```CSS
@media (max-width: 100px){
    /*Stuff till 100px breakpoint; This is equivalent to <=*/
}

@media (min-width: 100px){
    /*Stuff from 100px breakpoint; This is equivalent to >=*/
}
```

## Images

```CSS
img {
  max-width: 100%;
  height: auto;
}
```

This assumes our images are in a container with a size we want to maintain.
That keeps the ratio for the image to be able to fill the container as long as it's ratio permits

### Retina displays

Pixel density is an aspect that could be different on one device from others and this density is known as Pixel Per Inch(PPI) or Dots Per Inch(DPI). The most famous such display is the one known as a "Retina Display" on the latest Apple MacBook Pro notebooks, and recently iMac computers. Due to the difference in pixel density between a "Retina" and "Non-Retina" displays, some images that have not been made with a High-Resolution Display in mind could look "pixelated" when rendered on a High-Resolution display.

**The simplest way to make your images properly appear on High-Resolution Displays, such as the MacBook Pros "retina display" is to define their width and height values as only half of what the original file is.**

## Viewport units for text. **Learn in every layout**

1. `vw` (viewport width): `10vw` would be 10% of the viewport's width.
2. `vh` (viewport height): `3vh` would be 3% of the viewport's height.
3. `vmin` (viewport minimum): `70vmin` would be 70% of the viewport's smaller dimension (height or width).
4. `vmax` (viewport maximum): `100vmax` would be 100% of the viewport's bigger dimension (height or width).

Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.
