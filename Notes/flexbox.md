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
