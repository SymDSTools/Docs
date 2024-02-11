// ------------- HEADER SECTION -------------


/** # CreateMaterial3 #
 * @abbrev mat3
 *
 * $$ mat3 = app.CreateMaterial3(theme, icon, dir) $$
 * @param {str} [theme] default theme
 * @param {str} [icon] sharp|round|outline|two-tone
 * @param {str_pth} [dir=dflt] appTheme.json location
 * @returns plo-Material3
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
<img style="width:100%" src="../Material3.png">

Welcome To Material3 Documentation, this plugin is built using DroidScript native controls.

This plugin also uses the following ::

    - Material Design 2 By H.Jumar

This plugin was ported by :: Oarabile Koore

[The Following Are Contributors List To The Project](index.html)

## Material3 Color Schemes & Icons

Material Design 3 has a new way of handling colors, and how they are implemented, so as of current Droidscript cannot use dynamic theming so its not an option:
Firstly you must have your own color pallets to obtain this, go to this url and customize your apps palletes:

[Material Custom Color Builder](https://m3.material.io/theme-builder#/custom)
    1. remember use the custom theme toggle.
    2. remember under ‘Extend Colors’, this will not theme your app at all,stick to core colors.

After getting your palletes done, you have to export the theme, you will export the theme as ‘Android Views’.

This will download a zip file, To setup your apps light theme follow the directory:

_Downloads > material-theme > values > colors.xml_

You will now have to change XML to JSON, use any converter.

For example: [Online XML to JSON Converter](https://jsonformatter.org/xml-to-json)

Make this file and place it in your app directory in the `uxDesign` folder that you will create for your app, save the file as `appTheme.json`.
The resulting path should be
<txt>uxDesign/appTheme.json</txt>

JSON is faster and we want speed, I could use XML, but I want it fast.

Load The Plugin First ::
<js>app.LoadPlugin('Material3')<js>

In your code, to initialize colors, write the following code:
%c

<sample Demo>
// Always Have The cfg.MUI option as the plugin relies on it.
// cfg.MUI
app.LoadPlugin('Material3');

function OnStart(){
    app.CreateMaterial3('dark','outline','dflt');
    lay = ui.addLayout('Linear,'FillXY');
    app.AddLayout(lay);
}
</sample>
*/



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### GetType ###
 *
 * $$ mat3.GetType() $$
 * @returns str-Material3
 */
