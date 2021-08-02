# Semantic markup

1. Alt text is mandatory and even where optional if the image is pre-explained, should be empty string
2. Headers should describe outline - Only one main h1
3. Only one main tag describing main content
4. Articles are for grouping independent, self-contained content
5. Sections group related content, could be nested under articles.
6. Divs separate unrelated content by grouping.
7. `<div>` - groups content `<section>` - groups related content `<article>` - groups independent, self-contained content
8. `<header>` shares the embedded landmark feature you saw with `<main>`, allowing assistive technologies to quickly navigate to content that is usually repeated up top.
9. The `<nav>` element is another HTML5 item with the embedded landmark feature for easy screen reader navigation. This tag is meant to wrap around the main navigation links in your page.

If there are repeated site links at the bottom of the page, it isn't necessary to markup those with a `nav` tag as well. Using a `footer` is sufficient.

Remember: Landmarks like #8 and #9 can be jumped to by screenreaders

## Adding audio

Generally, one would use the audio tag with source that defines where the audio is from. `control` attribute makes it possible to do play, pause and the like. It essentially shows the browser default media player for the media type.

Template for audio:

```HTML
<audio control>
<source src="audioSource.mpeg.example.com" type="audio/mpeg">

</audio>
```

By default you should only have one source tag, as if there are multiple they will be played one after the other. SO...yeah. You could implement that if you want a podcast-like streaming option where you have all your sources and then you can simply start at one point or have things loop through
This multiple read through format is useful for fallbacks like in css

## Graphs and accessibility

`figure` and `figcaption` group the caption of a chart or figure image as thought of by html together.
Allowing visually impaired users to still benefit from the major conclusions.

One can even port the entire table of data of a graph off screen using css for the screen reader to grab

It's image > wrappedin figure> has figcaption inside

## Labels and input fields

Tells you of the different form controls.

Can be explicit by making `for` attribute of `label` the same as the `id` attribute of the `input`
Or implicitly by nesting them, or even both if you want to not be nervous

## Fieldset and legend

A wide grouping of input elements of same type or so that are not so clearly related like: choose one of the following - but the following are many.

The fieldset has a legend tag inside and the related input element and essentially serves as a description for all of them.

The `<fieldset>` element provides a container (literal box) for related form controls, and the `<legend>` element acts as a heading (subtly placed at the top left in the border) to identify the group.

## Datepickers

sometimes input with the type `date` may not spring a date picker in a browser and defaults to text.
Adding the expected format in the `label` or as a `placeholder` value is useful there.

### with time

Continuing with the date theme, HTML5 also introduced the `time` element along with a datetime attribute to standardize times. The `time` element is an inline element that can wrap a date or time on a page. A `datetime` attribute holds a valid format of that date. This is the value accessed by assistive devices. It helps avoid confusion by stating a standardized version of a time, even if it's informally or colloquially written in the text.

#### More on it

The HTML5 date input specification refers to the RFC 3339 specification, which specifies a full-date format equal to: yyyy-mm-dd . See section 5.6 of the RFC 3339 specification for more details. This format is used by the value HTML attribute and DOM property and is the one used when doing an ordinary form submission.

## Screen-reader only things

Some things like additional readable table data are for screen readers only, so we use css to literally move it to another dimension. Note the 1px values so we use the least possible space

```CSS
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

Note: The following CSS approaches will NOT do the same thing:

`display: none;` or `visibility: hidden;` hides content for everyone, including screen reader users
Zero values for pixel sizes, such as `width: 0px;` `height: 0px;` removes that element from the flow of your document, meaning screen readers will ignore it

## On contrast

The Web Content Accessibility Guidelines **(WCAG) recommend at least a 4.5 to 1 contrast ratio for normal text**. The ratio is calculated by comparing the relative luminance values of two colors. This ranges from 1:1 for the same color, or no contrast, to 21:1 for white against black, the most substantial contrast. There are many contrast checking tools available online that calculate this ratio for you.

### The accessibility issues, achieving contrast

Color is a large part of visual design, but its use introduces two accessibility issues. **First**, color alone should not be used as the only way to convey important information because screen reader users won't see it. **Second**, foreground and background colors need sufficient contrast so colorblind users can distinguish them.

Previous challenges covered having text alternatives to address the first issue. The last challenge introduced contrast checking tools to help with the second. The WCAG-recommended contrast ratio of 4.5:1 applies for color use as well as gray-scale combinations.

Colorblind users have trouble distinguishing some colors from others - usually in hue but sometimes lightness as well. You may recall the contrast ratio is calculated using the relative luminance (or lightness) values of the foreground and background colors.

In practice, the 4.5:1 contrast ratio can be reached by shading (adding black to) the darker color and tinting (adding white to) the lighter color. Darker shades on the color wheel are considered to be shades of blues, violets, magentas, and reds, whereas lighter tinted colors are oranges, yellows, greens, and blue-greens.

### ColorBlindedness

There are various forms of colorblindness. These can range from a reduced sensitivity to a certain wavelength of light to the inability to see color at all. The most common form is a reduced sensitivity to detect greens.

For example, if two similar green colors are the foreground and background color of your content, a colorblind user may not be able to distinguish them. Close colors can be thought of as neighbors on the color wheel, and those combinations should be avoided when conveying important information.

Note: Some online color picking tools include visual simulations of how colors appear for different types of colorblindness. These are great resources in addition to online contrast checking calculators.

## ScreenReaders and links

They could ask for a pagesummary which may only include links
*Use descriptive link text*
## AccessKey for shortcuts 

`accesskey` attribute can be applied to any html element to bind it to a keyboard function. (Thinking what I'm thinking?)


## Keyboard focus

`tabindex` attribute is used to specify whether or not or even how an element can be focused on with the keyboard by tabbing.

negative: can be focused on but not reached by keyboard: This method is generally used to bring focus to content programmatically (like when a div used for a pop-up window is activated)
0: means it can be reached in the same order it's specified in markup (default bind for links and the like).

NB: using this property enables the use of the `:focus` property on said element . e.g: p.

positive index: this allows for custom order of focus by tabbing. e.g when you hit tab then start at the bottom of the page.
The keyboard executes it like this: (positiveTabs(in ascending order from 1) then default 0)

A good example of this is with search bars.