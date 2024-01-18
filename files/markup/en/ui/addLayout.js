// ------------- HEADER SECTION -------------


/** # addLayout #
 * @abbrev lay
 * @brief addLayout
 * 
 * $$ lay = ui.addLayout(parent, type, options?, width?, height?) $$ 
 * @param {str} parent main||obj-The parent layout where to add this component. Pass a string `main` for the main layout of your app.
 * @param {str} type The layout type. Values can be `Linear` `Absolute` `Frame` `Slide`
 * @param {str} [options] Layout options. Values can be \n Orientation:  `Horizontal` `Vertical` \n `Horizontal Alignment: `Left` `Center` `Right` \n `Vertical Alignment: `Top` `VCenter` `Bottom` \n `Dimensions`: `FillX` `FillY` \n `Scroll`: `ScrollX` `ScrollY` `ScrollXY` `NoScrollBar` \n `Utils`: `BackColor` to apply light or dark background rather than transparent.
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-Layout
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a layout into your app. A layout is the basic ui component of an app. It is where you add other ui components such as buttons, textfields, checkboxes, list, images and many more.

 To add a layout, simply call the <col nobox #4c4>addLayout</col> method of the <col nobox #4c4>ui</col> object.

 There are 4 types of layouts: <col nobox #4c4>Linear</col>, <col nobox #4c4>Absolute</col>, <col nobox #4c4>Frame</col>, and <col nobox #4c4>Slide</col>.

 Layouts are transparent by default but you can set a background color or a background image.

 You can add child objects to the Layout by passing the layout as parent when initializing a control.

 By default, Layouts will auto-size to wrap and fit their contents but you have 3 more options as to how layout sizes within it's parent: <col nobox #4c4>FillXY</col>, <col nobox #4c4>FillX</col>, and <col nobox #4c4>FillY</col>.

 ### Linear Layouts
 Linear layouts are probably the most common type and are used to organize controls in the <col nobox #4c4>Vertical</col> or <col nobox #4c4>Horizontal</col> orientation on the screen.

 You can also pass alignment options. For vertical alignment you can pass <col nobox #4c4>Top</col>, <col nobox #4c4>VCenter</col>, and <col nobox #4c4>Bottom</col>. For horizontal alignment you can pass <col nobox #4c4>Left</col>, <col nobox #4c4>Center</col>, and <col nobox #4c4>Right</col>. These will align your children accordingly.

 For children spacing, see <col nobox #4c4>childSpacing</col> property below.

 ### Absolute Layouts
 Absolute layouts ignore all alignment options and allow the absolute positioning of controls by calling the <col nobox #4c4>setPosition</col> method of each child control. However, you are encouraged to use linear layouts for most of your programs, unless it is absolutely necessary.

 ### Frame Layouts
 Frame layouts are used to display objects in front or behind each other. Everytime a child control is added, the new control is placed in a new layer in front of the previously added control at the top left of the frame. You can then use <col nobox #4c4>setPosition</col> method of the child control to position it relative to the frame.

 ### Slide Layouts
 Slide layouts are used to display carousels or swipeable contents. The same as the Frame layout, this will add a new layer when a new control is added with a swipeable behaviour. You can pass alignment options to align your children within the Slide layout layer. Please note that <col nobox #4c4>Vertical</col> and <col nobox #4c4>Horizontal</col> options will be the direction of the swipe.

 If your parent layout is of type <col nobox #4c4>Slide</col>, do not add <col nobox #4c4>setOnTouch</col> callback handler in order for the slide layout to work perfectly.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### absHeight
 * @prop
 * Returns the absolute height of the control in pixels.
 * @returns num_pxl
 */

                    
/** ### absLeft
 * @prop
 * Returns the absolute distance of the control from the left in pixels.
 * @returns num_pxl
 */

                    
/** ### absTop
 * @prop
 * Returns the absolute distance of the control from the top in pixels.
 * @returns num_pxl
 */

                    
/** ### absWidth
 * @prop
 * Returns the absolute width of the control in pixels.
 * @returns num_pxl
 */

                    
/** ### alignment
 * @prop
 * Sets or returns the horizontal alignment of the control in a Linear Layout. Values can be <col nobox #fb8c00>Left</col> <col nobox #fb8c00>Center</col> and <col nobox #fb8c00>Right</col>
 * @returns str
 */

                    
/** ### backColor
 * @prop
 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
 * @returns str_col
 */

                    
/** ### backImage
 * @prop
 * The path to your image file.
 * @returns str_pth
 */

                    
/** ### border
 * @prop
 * Sets or returns the border thickness in pixels.
 * @returns num
 */

                    
/** ### borderColor
 * @prop
 * Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>
 * @returns str_col
 */

                    
/** ### borderStyle
 * @prop
 * Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.
 * @returns str
 */

                    
/** ### childMargins
 * @prop
 * Sets or returns the margins of child components. The array is of the form <col nobox #fb8c00>[left, top, right, bottom]</col>.
 * @returns lst
 */

                    
/** ### childSpacing
 * @prop
 * Sets or returns the spacing of the child control in a Linear Layout. Values can be <col nobox #fb8c00>Around</col> <col nobox #fb8c00>Between</col> <col nobox #fb8c00>Even</col>
 * @returns str
 */

                    
/** ### cornerRadius
 * @prop
 * Sets or returns the corner radius in pixels.
 * @returns num
 */

                    
/** ### currentSlide
 * @prop
 * Sets or returns the index of the current slide.
 * @returns num
 */

                    
/** ### disabled
 * @prop
 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.
 * @returns bin
 */

                    
/** ### fontFile
 * @prop
 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.
 * @returns str
 */

                    
/** ### height
 * @prop
 * Sets or returns the height of the control as a fraction of the parent control.
 * @returns num
 */

                    
/** ### isVisible
 * @prop
 * Returns whether the control is visible or not.
 * @returns bin
 */

                    
/** ### left
 * @prop
 * Returns the distance of the control from the left.
 * @returns num
 */

                    
/** ### margins
 * @prop
 * Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.
 * @returns num||lst_num
 */

                    
/** ### opacity
 * @prop
 * Sets or returns the opacity of the control.
 * @returns num
 */

                    
/** ### options
 * @prop
 * Sets or returns the <col nobox #fb8c00>options</col> of the control.
 * @returns str
 */

                    
/** ### orientation
 * @prop
 * Sets or returns the orientation of the controls in a Linear Layout. Values can be <col nobox #fb8c00>Horizontal</col> or <col nobox #fb8c00>Vertical</col>
 * @returns str
 */

                    
/** ### padding
 * @prop
 * Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
 * @returns num||lst_num
 */

                    
/** ### parent
 * @prop
 * Returns the parent layout control.
 * @returns uio-Layout
 */

                    
/** ### position
 * @prop
 * Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.
 * @returns obj-{ left:num, top:num, right:num, bottom:num }
 */

                    
/** ### rotation
 * @prop
 * Sets or returns the angle of rotation in degrees.
 * @returns num_deg
 */

                    
/** ### textColor
 * @prop
 * Sets or returns the color of the text.
 * @returns str
 */

                    
/** ### textSize
 * @prop
 * Sets or returns the size of the text within the control.
 * @returns num
 */

                    
/** ### top
 * @prop
 * Returns the distance of the control from the top.
 * @returns num
 */

                    
/** ### type
 * @prop
 * Returns the type of the control.
 * @returns str
 */

                    
/** ### verticalAlignment
 * @prop
 * Sets or returns the vertical alignment of the controls in a Linear Layout. Values can be <col nobox #fb8c00>Top</col> <col nobox #fb8c00>VCenter</col> or <col nobox #fb8c00>Bottom</col>
 * @returns str
 */

                    
/** ### visibility
 * @prop
 * Sets or returns the visibility of the control.
 * @returns str
 */

                    
/** ### width
 * @prop
 * Sets or returns the width of the control as a fraction of the parent control.
 * @returns num
 */

                    
/** ### setChildMargins ###
 * @brief setChildMargins
 * Sets a default margins for the children of the layout component
 * $$ lay.setChildMargins(left?, top?, right?, bottom?, mode='px') $$
 * @param {num} [left] Left margin.
 * @param {num} [top] Top margin.
 * @param {num} [right] Right margin.
 * @param {num} [bottom] Bottom margin.
 * @param {str} [mode='px'] `px`. Default is a fraction of viewport.
 */


/** ### show ###
 * @brief show
 * Makes the layout visible
 * $$ lay.show() $$
 */


/** ### goto ###
 * @brief goto
 * Transition to the given index
 * $$ lay.goto(index) $$
 * @param {num} index Index of a given layout.
 */


/** ### getCurrentSlide ###
 * @brief getCurrentSlide
 * Returns the index of the current Slide Layout
 * $$ lay.getCurrentSlide() $$
 * @returns num
 */


/** ### next ###
 * @brief next
 * Transition to the next slide
 * $$ lay.next() $$
 */


/** ### previous ###
 * @brief previous
 * Transition to the previous slide
 * $$ lay.previous() $$
 */


/** ### getChildOrder ###
 * @brief getChildOrder
 * Returns the index of the child from the layout children stack in order
 * $$ lay.getChildOrder(child) $$
 * @param {obj} child The child component of the layout.
 * @returns num
 */


/** ### childToFront ###
 * @brief childToFront
 * Move the child to the front
 * $$ lay.childToFront(child) $$
 * @param {obj} child The child object of the layout.
 */


/** ### hasChild ###
 * @brief hasChild
 * Check whether a component is a child of this layout
 * $$ lay.hasChild(child) $$
 * @param {obj} child The child component to check.
 * @returns bin
 */


/** ### removeChild ###
 * @brief removeChild
 * Removes a child from this layout
 * $$ lay.removeChild(child) $$
 * @param {obj} child The child component to be remove.
 */


/** @extern setOnTouch */

/** @extern setOnContextMenu */

/** @extern animate */

/** @extern setSize */

/** @extern hide */

/** @extern gone */

/** @extern destroy */

/** @extern setScale */

/** @extern getPosition */

/** @extern setMargins */

/** @extern setPadding */

/** @extern setPosition */

/** @extern setBorder */

/** @extern setCornerRadius */

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES ------------- 


    
/**
@sample Main layout
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Add a callback hanlder when the layout is touched
        this.main.setOnTouch( this.onTouch )

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Button", "primary")

        // Add a callback handler when the button is touched
        this.btn.setOnTouch( this.btnTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click the layout!" )
    }

    btnTouch()
    {
        if(this.main.backColor == "yellow")
        {
            this.main.backColor = "white"
        }  
        else
        {
            this.main.backColor = "yellow"
        }
    }
}
 */
    
            
    
/**
@sample Bottom aligned with margins
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout with objects aligned at the bottom
        this.main = ui.addLayout("main", "Linear", "Bottom,FillXY")

        // Set margins for children controls
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add buttons to the main layout
        this.btn1 = ui.addButton( this.main, "Button 1", "Primary" )
        this.btn2 = ui.addButton( this.main, "Button 2", "Secondary" )
        this.btn3 = ui.addButton( this.main, "Button 3", "Primary,Outlined" )
    }
}
 */
    
            
    
/**
@sample Orientation and spacing
class Main extends App
{
    onStart()
    {
        // Create a fullscreen main layout with objects centered horizontally
        this.main = ui.addLayout("main", "Linear", "VCenter,Horizontal", 1, 1)

        // Set the children spacing
        this.main.childSpacing = "even"

        // Add buttons to the main layout.
        this.btn1 = ui.addButton(this.main, "Button 1", "Primary")
        this.btn2 = ui.addButton(this.main, "Button 2", "Secondary")
        this.btn3 = ui.addButton(this.main, "Button 3", "Primary,Outlined")
    }
}
 */
    
            
    
/**
@sample Slide Layout
class Main extends App
{
    onStart()
    {
        // Create a fullscreen slide layout with objects vertically centered
        // You can pass `Vertical` option to make a vertical slide
        this.main = ui.addLayout( "main", "Slide", "VCenter,FillXY" )
        
        // Adds an onSlide event handler to the layout
        this.main.setOnSlide( this.onSlide )

        // Adds a yellow-colored Linear first layout to the slide
        var lay1 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay1.backColor = "yellow"
        ui.addText(lay1, "First Page")

        // Adds a green-colored Linear second layout to the slide
        var lay2 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay2.backColor = "green"
        ui.addText(lay2, "Second Page")

        // Adds a red-colored Linear third layout to the slide
        var lay3 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay3.backColor = "red"
        ui.addText(lay3, "Third Page")

        // Adds a blue-colored Linear fourth layout to the slide
        var lay4 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay4.backColor = "blue"
        ui.addText(lay4, "Fourth Page")

        ui.showPopup("Swipe horizontally", "Long");
    }

    onSlide( ctrl, index ) {
        ui.showPopup( index, "", 350 );
    }
}
 */
    
            
    
/**
@sample Python Main layout
from hybrid import ui

def OnStart():
    global main
    # Create a fullscreen linear layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Add a callback hanlder when the layout is touched
    main.setOnTouch(onTouch)

    # Add a button control to the main layout
    btn = ui.addButton(main, "Button", "primary")

    # Add a callback handler when the button is touched
    btn.setOnTouch(btnTouch)

def onTouch(event):
    ui.showPopup("You click the layout!")

def btnTouch(event):
    if main.backColor == "yellow":
        main.backColor = "white"
    else:
        main.backColor = "yellow"
 */
    
            
    
/**
@sample Python Bottom aligned with margins
from hybrid import ui

def OnStart():
    # Creates a fullscreen main layout with objects aligned at the bottom
    main = ui.addLayout("main", "Linear", "Bottom,FillXY")

    # Set margins for children controls
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Add buttons to the main layout
    btn1 = ui.addButton(main, "Button 1", "Primary")
    btn2 = ui.addButton(main, "Button 2", "Secondary")
    btn3 = ui.addButton(main, "Button 3", "Primary,Outlined")
 */
    
            
    
/**
@sample Python Orientation and spacing
from hybrid import ui

def OnStart():
    # Create a fullscreen main layout with objects centered horizontally
    main = ui.addLayout("main", "Linear", "VCenter,Horizontal", 1, 1)

    # Set the children spacing
    main.childSpacing = "even"

    # Add buttons to the main layout.
    btn1 = ui.addButton(main, "Button 1", "Primary")
    btn2 = ui.addButton(main, "Button 2", "Secondary")
    btn3 = ui.addButton(main, "Button 3", "Primary,Outlined")
 */
    
            
    
/**
@sample Python Slide Layout
from hybrid import ui

def OnStart():
    # Create a fullscreen slide layout with objects vertically centered
    # You can pass `Vertical` option to make a vertical slide
    main = ui.addLayout("main", "Slide", "VCenter,FillXY")

    # Adds an onSlide event handler to the layout
    main.setOnSlide(onSlide)

    # Adds a yellow-colored Linear first layout to the slide
    lay1 = ui.addLayout(main, "Linear", "VCenter", 0.8, 0.5)
    lay1.backColor = "yellow"
    ui.addText(lay1, "First Page")

    # Adds a green-colored Linear second layout to the slide
    lay2 = ui.addLayout(main, "Linear", "VCenter", 0.8, 0.5)
    lay2.backColor = "green"
    ui.addText(lay2, "Second Page")

    # Adds a red-colored Linear third layout to the slide
    lay3 = ui.addLayout(main, "Linear", "VCenter", 0.8, 0.5)
    lay3.backColor = "red"
    ui.addText(lay3, "Third Page")

    # Adds a blue-colored Linear fourth layout to the slide
    lay4 = ui.addLayout(main, "Linear", "VCenter", 0.8, 0.5)
    lay4.backColor = "blue"
    ui.addText(lay4, "Fourth Page")

    ui.showPopup("Swipe horizontally", "Long");

def onSlide(ctrl, index):
    ui.showPopup(index, "", 350)
 */
    
            