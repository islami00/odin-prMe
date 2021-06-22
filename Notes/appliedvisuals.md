#Visual balance

Text is often a large part of web content. CSS has several options for how to align it with the text-align property.

text-align: justify; causes all lines of text except the last line to meet the left and right edges of the line box.

```CSS
text-align: center;
```

centers the text

```CSS
text-align: center;
```

right-aligns the text

And

```CSS
text-align: left;
```

(the default) left-aligns the text.

#Semantic HTML

1. `<strong>`To make text bold, you can use the strong tag. This is often used to draw attention to text and symbolize that it is important. With the strong tag, the browser applies the CSS of ```font-weight: bold;``` to the element.

2. `<u>` To underline text, you can use the u tag. This is often used to signify that a section of text is important, or something to remember. With the u tag, the browser applies the CSS of ```text-decoration: underline;``` to the element
3. `<em>`To emphasize text, you can use the em tag. This displays text as italicized, as the browser applies the CSS of ```font-style: italic;``` to the element.
4. `<s>`To strikethrough text, which is when a horizontal line cuts across the characters, you can use the ```s``` tag. It shows that a section of text is no longer valid. With the s tag, the browser applies the CSS of ```text-decoration: line-through;``` to the element.
5. `hr` You can use the `hr` tag to add a horizontal line across the width of its containing element. This can be used to define a change in topic or to visually separate groups of content.
6. The font size of header tags (`h1` through `h6`) should generally be larger than the font size of paragraph tags. This makes it easier for the user to visually understand the layout and level of importance of everything on the page. You use the `font-size` property to adjust the size of the text in an element.
7. `box-shadow` : The `box-shadow` property applies one or more shadows to an element.

The `box-shadow` property takes values for

`offset-x` (how far to push the shadow horizontally from the element),
`offset-y` (how far to push the shadow vertically from the element),
`blur-radius`,
`spread-radius` and
`color`, in that order.
The `blur-radius` and `spread-radius` values are optional.

Multiple box-shadows can be created by using commas to separate properties of each box-shadow element.

Note: Offset x goes from left to right (count positive like canvas), and offset y goes from top to bottom (positive count here, same as canvas)
  
At this point, I am starting the card proj. Merging cat .

