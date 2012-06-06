Ext.define("NewSencha.controller.MainController", {
    extend: 'Ext.app.Controller',
	launch : function(){
		alert("Launched main controller");
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
		alert("Clicked");
	}
});