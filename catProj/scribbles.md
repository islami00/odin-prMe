Note:

1. Margin and padding can cause css elements to resize
2. Margin acts weird when two child-elements with padding are given single margin value for the four-value margin property  
   2a. It sets the margin for everywhere except the region above one and below the other (where they stack)

Answer: this is simple, it is because the margin isn't an additive property, simply a condition that must be fulfilled.  
When two elements overlap in their margin area, so long as both of them have their margin requirements fulfilled, there will be no change.  
tldr; the margin shown is the larger value in the region of overlap

3.  Margin can cause elements with padding to resize in their parent if given a positive value (esp in the case above) making them fatter or taller
4.  Negative margin expands elements in the parent

3 and 4 are due to not setting specific widths for elements. Resizing due to margin is possible as the margin is relative to the border itself, Removing padding and overflowing content.  
tldr: Margin controls the space between an element's border and surrounding elements  
Also, parents with padding could see such behaviour

Learned not qn:

1. Margin only applies relative to other children in the same stacking context.

   I.e In a div with two children , any margin applied will not be relative to space from the parent in other words; if there is no other child at the very bottom of the parent, the margin will not cause a resize in the case of a parent whose length isn't specified

tldr; any extra margin beyond the limits of a parent will not cause resize in a direction (such as down) as long as no other children exist there.

I.e to make the margin work like that, always add some content: padding for parent.

2. Negative margin causes the opposite of that, in resizing, the parent starts to ignore the other children even allowing them to overflow, i.e Fulfilling the condition for the negative margin (bring me closer to him!)  

##CSS INHERITANCE

Children inherit CSS rules like color and font-family from their parents;
Could go from root element to children too.

##Special selectors  

there is an attribute selector: [attr="Value"]

##Length units

1. in isn't consistent over screens as it renders differently.
2. Em is relative to element font size, unless font-size itself is em then it is relative to parent
3. Rem is relative to root element (could be parent)

##CSS precedence
before these specific declaration types, note that inlines > internal styles > external, and when in conflict browser reads them top to bottom
1. Class selectors attributes override inherited attributes from parents
2. class selectors override each other by declaration, last takes highest precedence
3. Id > class
Lastly, !important overrides all other styles syntax: 
```CSS
declaration !important;
```

##Colors
Hex shorthand: RRGGBB - RGB

##CSS VARIABLES
Declare and use:
```CSS 
selector{
--var-Name: value;
width: var(--var-name)
}

```
###Fallback values
These are variable values that are used in case the variable cannot be found (just for that reason, it doesn't increase browser compatibility)

```CSS 
selector{
--var-Name: value;
width: var(--var-name, fallbackvalue)
}

```

##Browser fallbacks
These are used for browser compatibility  
After using something not so widely supported like a css variable as value, make sure to put a declaration before it with css that is widely supported for older browsers to fallbackto instead of mess things up with default styles (I'm looking at you IE) and let newer browsers take up the new style later in the cascade

e.g: note how root was used to set variables, this links to variable inheritance

```CSS
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
```
##Variable inheritance
Variables are inherited like regular properties, (parent to descendent), hence why they are set on root for "global-like" behavior. Root is usually html tag. i.e root element of document

Due to this, we can set new, specific values for our globals like blockscoping without changing the actual global variable. Nice.

Variables also simplify media  queries to avoid extra code in the place, just change the value of the variable. e.g:

```CSS
  :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

  @media (max-width: 350px) {
    :root {
    --penguin-size: 200px;
    --penguin-skin: black;
    }
  }


```