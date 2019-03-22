sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	], function (Controller, MessageToast){
		"use strict";
		return Controller.extend("opensap.myapp.controller.App", {
			onShowHello: function(){
			
			//	MessageToast.show("Hola inMundirijillo!!")
			//  >> Se pone el siguiente código para utilizar el archivo i18n
			
			// read msg from i18n model:
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
			}	
		});
	});