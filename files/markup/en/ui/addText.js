// ------------- HEADER SECTION ------------- 


/** # addText #
 * @abbrev txt
 * @brief addText
 * 
 * $$ txt = ui.addText(parent, text, options, width, height) $$ 
 * @param {obj} parent The layout control where to add the text control
 * @param {str} text The text to be displayed on the text control
 * @param {str} options A comma separated string. Options can be one or a combination of the following: \n Variants: `H1` `H2` `H3` `H4` `H5` `H6` `body1` `body2` `overline` `subtitle1` `subtitle2` `button` `caption`.\nLines: `Singleline` `Multiline`.\nAlignment: `Left` `Center` `Right` `Justify`.\nColor: `Primary` `Secondary` `Error`.\nFormat `Html` `Icon` `Italize` `Monospace` `Bold` `Underline` \n Utils: `Touchable`
 * @param {num} width Fraction of the screen width
 * @param {num} height Fraction of the screen height
 * @returns obj-Text Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a text to your app.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addText Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#alignment-20" data-transition="pop" data-rel="popup" class="ui-link">alignment </a></div><div class="samp"><a href="#backcolor-25" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-30" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#bold-35" data-transition="pop" data-rel="popup" class="ui-link">bold </a></div><div class="samp"><a href="#border-40" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-45" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-50" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-55" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-60" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-65" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#ellipsize-70" data-transition="pop" data-rel="popup" class="ui-link">ellipsize </a></div><div class="samp"><a href="#fontfile-75" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-80" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#isvisible-85" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#italic-90" data-transition="pop" data-rel="popup" class="ui-link">italic </a></div><div class="samp"><a href="#left-95" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-100" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-105" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-110" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#padding-115" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-120" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-125" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-130" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#text-135" data-transition="pop" data-rel="popup" class="ui-link">text </a></div><div class="samp"><a href="#textcolor-140" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-145" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#textstyle-150" data-transition="pop" data-rel="popup" class="ui-link">textStyle </a></div><div class="samp"><a href="#top-155" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-160" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#underline-165" data-transition="pop" data-rel="popup" class="ui-link">underline </a></div><div class="samp"><a href="#variant-170" data-transition="pop" data-rel="popup" class="ui-link">variant </a></div><div class="samp"><a href="#verticalalignment-175" data-transition="pop" data-rel="popup" class="ui-link">verticalAlignment </a></div><div class="samp"><a href="#visibility-180" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-185" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="alignment-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the horizontal alignment of the text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Center</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Right</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Justify</span>.</p></div><div data-role="popup" id="backcolor-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-30" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="bold-35" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the text is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bold</span> or not.</p></div><div data-role="popup" id="border-40" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-50" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-55" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the text <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>. You can also pass hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="cornerradius-60" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-65" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="ellipsize-70" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the ellipsis use when the text is truncated. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Ellipsis</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">End</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Start</span></p></div><div data-role="popup" id="fontfile-75" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="isvisible-85" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="italic-90" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the text is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">italized</span> or not.</p></div><div data-role="popup" id="left-95" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-100" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-105" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-110" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="padding-115" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-120" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-125" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-130" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="text-135" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the text.</p></div><div data-role="popup" id="textcolor-140" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the text color in hexadecimal format.</p></div><div data-role="popup" id="textsize-145" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the fontsize for the text. You can also pass values such as <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">1.2em</span>.</p></div><div data-role="popup" id="textstyle-150" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the style of the text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">italic</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">normal</span>.</p></div><div data-role="popup" id="top-155" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="underline-165" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the text is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">underlined</span> or not.</p></div><div data-role="popup" id="variant-170" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the text variants. See <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> param above for available values.</p></div><div data-role="popup" id="verticalalignment-175" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the vertical alignment of the text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Center</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Bottom</span>.</p></div><div data-role="popup" id="visibility-180" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-185" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setHtml ###
 * @brief setHtml
 * Sets an html on the text control *  * 
 * $$ txt.setHtml(html) $$
 * @param {str} html An html string
 */


/** ### getHtml ###
 * @brief getHtml
 * Returns the html text *  * 
 * $$ txt.getHtml() $$
 * @returns str
 */


/** ### setTextShadow ###
 * @brief setTextShadow
 * Sets a shadow on the text in a text control *  * 
 * $$ txt.setTextShadow(radius, dx, dy, color) $$
 * @param {num} radius The radius in pixels
 * @param {num} dx X-offset of the shadow
 * @param {num} dy Y-offset of the shadow
 * @param {obj} color A hexadecimal color e.g. `#aarrggbb`
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch *  * 
 * $$ txt.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click *  * 
 * $$ txt.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component *  * 
 * $$ txt.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component *  * 
 * $$ txt.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component *  * 
 * $$ txt.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component *  * 
 * $$ txt.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component *  * 
 * $$ txt.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component *  * 
 * $$ txt.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component *  * 
 * $$ txt.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ txt.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component *  * 
 * $$ txt.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container *  * 
 * $$ txt.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ txt.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container *  * 
 * $$ txt.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the component *  * 
 * $$ txt.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index *  * 
 * $$ txt.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index *  * 
 * $$ txt.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic text control
class Main extends App
{
    onStart()
    {
        // Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var t = "This is the sample text to be displayed."

        // Add a text control to the main layout
        this.txt = ui.addText(this.main, t)

        // You can also add a callback handler when the text control is touch
        this.txt.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the text!" )
    }
}
 */
    
            
    
/**
@sample Heading variants
class Main extends App
{
    onStart()
    {
        // Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var t = "Lorem ipsum dolor sit amet, consectetur"

        // Heading ranges from H1 to H6

        this.h1 = ui.addText( this.main, "Heading 1", "H1" )

        this.h2 = ui.addText( this.main, "Heading 2", "H2" )

        this.h3 = ui.addText( this.main, "Heading 3", "H3" )

        this.h4 = ui.addText( this.main, "Heading 4", "H4" )

        this.h5 = ui.addText( this.main, "Heading 5", "H5" )

        this.h6 = ui.addText( this.main, "Heading 6", "H6" )
    }
}
 */
    
            
    
/**
@sample Other variants
class Main extends App
{
    onStart()
    {
        // Create a full screen layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        var t = "Lorem ipsum dolor sit amet, consectetur"

        this.text = ui.addText( this.main, t, "body1" )

        this.text = ui.addText( this.main, t, "body2" )

        this.text = ui.addText( this.main, t, "subtitle1" )

        this.text = ui.addText( this.main, t, "subtitle2" )

        this.text = ui.addText( this.main, t, "overline" )

        this.text = ui.addText( this.main, t, "button" )

        this.text = ui.addText( this.main, t, "caption" )
    }
}
 */
    
            
    
/**
@sample Alignments and colors
class Main extends App
{
    onStart()
    {
        // Create a full screen layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0.05)

        var t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            
        // Default is left
        this.txt1 = ui.addText( this.main, t, "body1,Left", 0.9 )
        this.txt1.backColor = "#e0e0e0"

        // Center and color primary
        this.txt2 = ui.addText( this.main, t, "body1,Center,Primary", 0.9 )
        this.txt2.backColor = "#e0e0e0"

        // Right and color secondary
        this.txt3 = ui.addText( this.main, t, "body1,Right,Secondary", 0.9)
        this.txt3.backColor = "#e0e0e0"

        // Bottom, Center with a textSecondary color
        this.txt4 = ui.addText( this.main, t, "body1,Center,Bottom,TextSecondary", 0.9, 0.1)
        this.txt4.backColor = "#e0e0e0"
    }
}
 */
    
            
    
/**
@sample Icons
class Main extends App
{
    onStart()
    {
        // Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0.05)
        
        // Add a settings icon
        this.txt1 = ui.addText(this.main, "settings", "Icon")
        this.txt1.setOnTouch( this.onTouch )

        // Add a camera icon
        ui.addText(this.main, "add_a_photo", "Icon,TextSecondary")

        // Add a heart icon
        ui.addText(this.main, "favorite", "Icon,Secondary")

        // Add an android icon
        ui.addText(this.main, "android", "Icon,Primary")
    }

    onTouch()
    {
        ui.showPopup( "You touch the icon!" )
    }
}
 */
    
            
    
/**
@sample Html formatted text
class Main extends App
{
    onStart()
    {
        // Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        
        // Html formatted string
        var t = 'This text is formatted as html. <h3 style="color:green;">This is a heading with color.</h3>'
        t += 'You can also add <i>italize text</i> as well as <span style="background-color:yellow;">text with styles</span>.'

        // Add text control to the main layout by passing `Html` option
        this.txt = ui.addText(this.main, t, "html")
    }
}
 */
    
            