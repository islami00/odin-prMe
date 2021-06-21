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
