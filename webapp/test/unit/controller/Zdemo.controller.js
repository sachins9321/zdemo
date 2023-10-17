/*global QUnit*/

sap.ui.define([
	"my/zdemoapp/controller/Zdemo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Zdemo Controller");

	QUnit.test("I should test the Zdemo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
