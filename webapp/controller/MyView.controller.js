sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Sample1.controller.MyView", {
	
	doIt : function(oEvent){
		sap.m.MessageToast.show(oEvent.getSource().getId() + " does it!");
	}
	
	});
});