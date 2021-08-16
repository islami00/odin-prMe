# CSS Grids

## Basics

- Parent Element: the _container_
- children _items_

## Grid structure

1. Columns

Define it with `grid-template-columns`
This defines size (width) of each column you wish your grid to encapsulate, the rows

e.g
`grid-template-columns: 50px 50px;` defines two 50px wide columns that items will fill from top left to bottom right. Basic flow. Alone, elements will only take up and overflow as much as they can within the given space, adding rows as necessary.

Imagine it as the elements fill the columns left to right like a snake. Taking up the space they need,
imagine it like adding a div of that width in that place for the element to mess with

2. Rows

`grid-template-rows`
This defines the number of rows provided and their height. Just like columns.
Remember: Columns can be wide, rows can be tall.

## Special units for rows and cols

`fr` : column or row as fraction of available space
`auto` : set column or row to width or height of content automatically (useful in things like firebase's grid video) e.g for a text-only item with no specific width, if set on column prop, it'll base on text-width
`%`: adjust column or row to percent width of container (just like with margin-top, love you mdn docs)

Note:
The order of assignment for mixing is:
All non-grid calc units go first.
E.g auto, %, px, em...
Then finally the fr unit is calculated from the remaining space for the columns/rows set in fr.

_freecode_

You can use absolute and relative units like px and em in CSS Grid to define the size of rows and columns. You can use these as well:

`fr`: sets the column or row to a fraction of the available space,

`auto`: sets the column or row to the width or height of its content automatically,

`%`: adjusts the column or row to the percent width of its container.

`grid-template-columns: auto 50px 10% 2fr 1fr;`
This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.

## Spacing columns

`grid-column-gap`: space between each and every column

NB: If the columns are defined with frs, then the column will shrink to accomodate the gap.
Assuming we use regular length values like px...

## Spacing rows

`grid-row-gap`: `<length>`

## Shortcut

`grid-gap`: `row && column value` || `row | column`

e.g
`grid-gap: 20px;` (row and column)
`grid-gap: 20px 30px;` (row:20px and column: 30px)

_freecode_

If `grid-gap` has one value, it will create a gap between all rows and columns. However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.

---

## Up until this point we have discussed container props.

# Item props

the hypothetical vertical and horizontal lines that create a grid are called _lines_.

The lines are numbered from 1 and run left to right for columns increasing and top to bottom for rows, increasing.

A 3x3 grid:

<div style="position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;"><p style="left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;">column lines</p><p style="left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">1</p><p style="left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">2</p><p style="left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">3</p><p style="left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">4</p><p style="left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;">row lines</p><p style="left:-10%;top:-10%;font-size:130%;position:absolute;">1</p><p style="left:-10%;top:21%;font-size:130%;position:absolute;">2</p><p style="left:-10%;top:53%;font-size:130%;position:absolute;">3</p><p style="left:-10%;top:85%;font-size:130%;position:absolute;">4</p><div style="left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;"></div></div>

## Custom columns

Make items consume more than their default two column lines

`grid-column` defines a start and end point for an item allowing it to take space and others to recalc.

e.g
`grid-column: 1 / 3` : Start from grid column line 1 (the first) to grid column line 3 (the third), hence consuming 2 columns.

## Custom rows

Same as columns, define start and end point lines

`grid-row : start / end`

# Justification & alignment

In CSS Grid, the content of each item is located in a box which is referred to as a _cell_.

E.g say a div is consuming a grid row and grid column from the template, then the div itself is the cell in this context and whatever is in it is the content

To align said

_freecode_

You can align the content's position within its cell horizontally using the `justify-self` property on a grid item. By default, this property has a value of `stretch`, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:

(Note, with these, you may have to define the dimensions of the content if you want to retain a stretch effect.)
`start`: aligns the content at the left of the cell,

`center`: aligns the content in the center of the cell (horizontal alignment),

`end`: aligns the content at the right of the cell.

Justify is horizontal alignment always in css grid as long as we have a plain cell.

Yup. Ignore what I said earlier.

A grid item is a construct just like fr.
In the example I made, the div is the content of our cell.

This is the heirarchy:
The content is located in a box which is referred to as a cell which is essentially 4 grid lines intersecting. That is on the item level.
I.e on the item level the cell , line and content constructs are defined.
cell: The intersection of four grid lines that defines where our content can be placed
line : well, a line. Column or row line.
content: whatever is inside the grid cell or the box defined by said hypothetical lines. (even if it is a div. no more wrappers!)

The item is defined on the container level as an intersection template column and rows. Think of it as the space we have acquired.

You can think of it simply too like, items are what fit in columns and rows, if you set justify-content, it messes with the item.

### Vertical alignment

`align-self` property.

This takes same values as justify-self. It just works in the vertical direction.

Note: stretch is the value that makes your item fill the container and masks it's actual dimensions by giving it the same dimensions as your template.

end, center and start require you to set actual css dimensions for your items or use flex.

Also: css grid takes the immediate children of the grid container only as items , grandchildren simply do whatever the child tells it to (nice abstraction)

## Align all

Use `justify-items` on the grid container.
it takes all the same values as -self and it works on all.

Same with `align-items`

---

**Time for complexities**

# Dividing grids into area template

You can group cells of your grid together into an area and give the area a custom name. Do this by using `grid-template-areas` on the container like this

```CSS
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

The code above groups the cells of the grid into four areas; `header`, `advert`, `content`, and `footer`. Every word represents a cell and every pair of quotation marks represent a row.

(In complicated terms, a `track` as it is essentially two grid n lines)

caveat:
This is good for making wide-scale structures
We can define areas for our layout, then make our items subgrids.

template-areas must be assigned:

## Movability with template-areas

Essentially, take your alignments/centering with you , no more tightly bound elements

The items assigned to any grid area fill it completely.

Use:

```CSS
.item1 {
  grid-area: footer;
}
```

## Areas sans-templates

The `grid-area` property you learned in the last challenge can be used in another way. If your grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:

```CSS
item1 { grid-area: 1/1/2/4; }
```

This is using the line numbers you learned about earlier to define where the area for this item will be. The numbers in the example above represent these values:

```CSS
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

Basically defining x1/y1/x2/y2

but x and y are 2d lengths.
1: start
2: end

```CSS
grid-area: 3/1/4/4;
```

That would essentially do the same as the earlier code for footer.

### A small recap before going forward

The grid-template-col/row defines the structure of our grid . I.e cages that hold the meat

The grid-template-area defines how we fill that structure.

Continue

## No-repeat with repeat function

Let's say you want a grid with 100 rows of the same height. It isn't very practical to insert 100 values individually. Fortunately, there's a better way - by using the `repeat` function to specify the number of times you want your column or row to be repeated, followed by a comma and the value you want to repeat.

Here's an example that would create the 100 row grid, each row at 50px tall.

```CSS
grid-template-rows: repeat(100, 50px);
```

You can also repeat multiple values with the repeat function and insert the function amongst other values when defining a grid structure. Here's what that looks like:

```CSS
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

This translates to:

```CSS
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

Note: The 1fr 50px is repeated twice followed by 20px.

essentially, the repeat function works for the `grid-template-rows` or `grid-template-columns` option by repeating particular value or set of values n times.

it goes:

```CSS
grid-template-columnorrow: repeat(n,values);
```

# Sizing and responsiveness

Since grid items are created with the `grid-template-roworcolumn` then we use the following to set acceptable size range for our items: `minmax`.
It is used when defining a value for `grid-template-row` or `grid-template-column` to set minimum and maximum sizes.

_freecode_

It's used to limit the size of items when the grid container changes size. To do this you need to specify the acceptable size range for your item. Here is an example:

```CSS
grid-template-columns: 100px minmax(50px, 200px);
```

In the code above, `grid-template-columns` is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px.

Since minmax is at the value level, it can be used with repeat fx

e.g

```CSS
    grid-template-columns: repeat(3, minmax(90px,1fr));
```

this is a good way to override the default justify behaviour of stretch by defining a baseline from which overflow happens.

## Flexing - N-rowsorcolumns

`auto-fill` option is used to automatically insert as many rows as needed. No limits

_freecode_

The repeat function comes with an option called` auto-fill`. This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container. You can create flexible layouts when combining auto-fill with `minmax`, like this:

```CSS
grid-template-column: repeat(auto-fill, minmax(60px, 1fr));
```

When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one. Note: If your container can't fit all your items on one row, it will move them down to a new one.

The order goes: add a column (auto-fill), start off at 60px, keep stretching as we scale up. if(width === 1fr) then stop scaling, also check if (space left === 60px) then repeat, else, add a row and then repeat.

## The fill problem

Oh yeah, you may think auto-fill is buggy , but it isn't because it is essentially adding 60px columns where it can till it divides the space evenly and starts searching for more **space** RIGHT!. IT doesn't care if our items have been filled to the row, It's just updating the structure.

_freecode_

`auto-fit` works almost identically to `auto-fill`. The only difference is that when the container's size exceeds the size of all the items combined, `auto-fill` keeps inserting empty rows or columns and pushes your items to the side, while `auto-fit` collapses those empty rows or columns and stretches your items to fit the size of the container.

Note: If your container can't fit all your items on one row, it will move them down to a new one.

Yup. Auto-fit is usually what we want

It does a : keep objects on max after we reach max on just a row.
Instead of a : oh, only one row left? and we can add more? sure!

## Lovely end, see the site itself

NB: This gave me a spark of inspiration with moving from desktop to mobile (collapsing grid areas)

Mobile layouts can be obtained by transitioning into a grid-template-area at a device width, while desktop layouts ...well.

Mostly with regards to columns.
This is what the _freecodecamp_ said,

In the preview, when the viewport width is 300px or more, the number of columns changes from 1 to 2. The advertisement area then occupies the left column completely:

---

<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      grid-template-areas:
      /* Only change code below this line */
        "advert header"
        "advert content"
        "advert footer"; 
        /* Challenge: make footer and header completely dominate above this px range */
      /* Only change code above this line */
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>

---

## My specialty: the grid within the grid. SubGrids!

Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.

For example, by setting the `display` and `grid-template-columns` properties of the element with the `item3` class above, you create a grid within your grid.

learned this:
You can use literally any usual length value for the width of your columns.

I.e stuff like auto.

Now, how does css handle:

```CSS
  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    display: grid;
    grid-template-columns: auto 1fr;
  }

```
