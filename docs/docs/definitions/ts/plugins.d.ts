declare var plugins: DsPlugins;
declare type PluginObject = DsMaterial3;
/** plugin object */
declare type plo = PluginObject;

declare class DsPlugins {

	/**
	 * <img style="width:100%" src="../Material3.png">
	 * 
	 * Welcome To Material3 Documentation, this plugin is built using DroidScript native controls
	 * @param theme `default theme`
	 * @param dir `appTheme.json location`
	 */
	CreateMaterial3(theme?: str, icon?: "sharp"|"round"|"outline"|"two-tone", dir?: str_pth): DsMaterial3;

}

declare class DsMaterial3 {

	/** Get type */
	GetType(): "Material3";
}


