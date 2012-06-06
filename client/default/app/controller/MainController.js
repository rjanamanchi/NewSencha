Ext.define("NewSencha.controller.MainController", {
    extend: 'Ext.app.Controller',
	launch : function(){
		this.callParent();
		alert("Launched main controller");
		console.log("Main Controller launched");
	},
	config:{
		refs : {
		    buttonClicked : "#my-button-id"
		},
		control : {
			buttonClicked : {
				tap : "buttonClick"
			}
		}
	},
	buttonClick : function(){
		consolge.log("button clicked");
	}
});