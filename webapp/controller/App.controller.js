sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("producttable.controller.App", {
			onInit: function () {
                var oModel = new JSONModel();
                oModel.loadData("model/sampleData/product.json");
			    this.getView().setModel(oModel);
			}
		});
	});
