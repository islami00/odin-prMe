# Starting point

```CSS
.selector{
    display: flex;
}
```

## Flex direction

Adding `display: flex` to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the `flex-direction` property to the parent item and setting it to row or column. Creating a row will align the children horizontally, and creating a column will align the children vertically.

Other options for `flex-direction` are `row-reverse` and `column-reverse`.

Note: The default value for the `flex-direction` property is `row`.

_IslamNote_: Row-reverse is useful. Esp for components. Say...I know they are all rendered based on name, I can just apply one such style to reverse the order of the elements to sort in descending order alphabetically.

## Alignment/Justification - the crux

Below is the default orientation for the flex. Or specifically: `flex-direction: row`
![flex-direction-terms](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

_Lmao, remember to add a ! for images_

For column, simply rotate by 90deg.

### Their explanation

Before diving in:
**NOTE: this is dealing with justify-content**
**tldr**: `flex-start` and `flex-end` are variable and reference the beginning and end of the `main-axis`.
"half" and "full space" reference the space between the elements as decided by the justification.
So, in space-around: If each item should have 10px between them, as calculated, then the first and last item respectively will have a 5px space to the start and end of the container respectively.

_Freecodecamp:_

Recall that setting a flex container as a row places the flex items side-by-side from left-to-right. A flex container set as a column places the flex items in a vertical stack from top-to-bottom. For each, the direction the flex items are arranged is called the main axis. For a row, this is a horizontal line that cuts through each item. And for a column, the main axis is a vertical line through the items.

There are several options for how to space the flex items along the line that is the main axis. One of the most commonly used is `justify-content: center;`, which aligns all the flex items to the center inside the flex container. Other options include:

- `flex-start`: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container. This is the default alignment if no `justify-content` is specified.
- `flex-end`: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.
- `space-between`: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the remaining space is distributed _evenly_ among the other items.
- `space-around`: similar to `space-between` but the first and last items are not locked to the edges of the container, the space is distributed around all the items with a half space on either end of the flex container.
- `space-evenly`: Distributes space evenly between the flex items with a full space at either end of the flex container

**Note: either of flex start or end still preserves the order of the elements in the document. Only reverse actually changes order**

**Bonus**:

- row-reverse or other reverse flex directions also flip the location of flex-start and flex-end. This implies that you are literally reversing our flex container
- Also, `center` does not padd elements. It literally mushes them to the center. Bring your own spacing

### align-items

This is sort of like justify-items, it's specials instead of the space-x s , it has `stretch` (default),and `baseline`

- `Stretch`: stretches items to fit the entire cross axis of the flex container
- `baseline`: aligns the items along the line on which text sits in each, essentially, imagine a straight line shot from the text on one element all through the next and so on.

Flex start and flex end and center also exist for this.

_Freecodecamp_:

The different values available for align-items include:

`flex-start`: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.
`flex-end`: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.
`center`: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).
`stretch`: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom. This is the default value if no align-items value is specified.
`baseline`: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.

## Wrapping

`flex-wrap`: `nowrap` (default) | `wrap` | `wrap-reverse`

This states how flexbox splits rows into multiple rows, spilling from left to right , or columns spilling from top to bottom.

Of course, reverse means the wrap ends in the opposite place or builds up to the opposite place.

## Shrinking

Tells flex items how to resize as their parent gets smaller than what they need to occupy.
This one says by how much an item should seem to shrink relative to others.
It takes a number.
_Freecodecamp_

So far, all the properties in the challenges apply to the flex container (the parent of the flex items). However, there are several useful properties for the flex items.

The first is the `flex-shrink` property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

The `flex-shrink` property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. For example, if one item has a `flex-shrink` value of 1 and the other has a flex-shrink value of 3, the one with the value of 3 will shrink three times as much as the other.

## Growing

this is as the container expands, we specify with this how much items expand relative to each other.

Imagine a base, unitless value that is a fraction of the container width relative to how it was initially.
this property takes a number that scales the dimensions of said items by that value in n-multiples.

_Freecodecamp_
The opposite of `flex-shrink` is the `flex-grow` property. Recall that `flex-shrink` controls the size of the items when the container shrinks. The `flex-grow` property controls the size of items when the parent container expands.

Using a similar example from the last challenge, if one item has a `flex-grow` value of 1 and the other has a `flex-grow` value of 3, the one with the value of 3 will grow three times as much as the other.

## Base case- flex-basis

This states the size or dimensions of an item before it is transformed

_Freecode_
The `flex-basis` property specifies the initial size of the item before CSS makes adjustments with `flex-shrink` or `flex-grow`.

The units used by the flex-basis property are the same as other size properties (`px`, `em`, `%`, etc.). The value auto sizes items based on the content.

## Shorthand

`flex`: `flex-grow` | `flex-shrink` | `flex-basis`

Default
flex: 0 1 auto;

## Ordering

State order of rendering across your main axis. The default is 0 - HTML order

Can declare -ves and such

The order property is used to tell CSS the order of how flex items appear in the flex container. By default, items will appear in the same order they come in the source HTML. The property takes numbers as values, and negative numbers can be used.

## The scalpel : align-self

Same as align-items, but on a per-item basis.

`align-self` accepts the same values as `align-items` and will override any value set by the `align-items` property.
