sap.ui.jsview("Sample1.view.MyView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.MyView
	 */
	getControllerName: function() {
		return "Sample1.controller.MyView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.MyView
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: []
		});
		
		var oButton = new sap.m.Button({
			id: this.createId("MyButton"),
			text: "Hello JS View"
		});
		oPage.addContent(oButton.attachPress(oController.doIt));

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});