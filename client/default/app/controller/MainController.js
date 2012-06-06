Ext.define("NewSencha.controller.MainController", {
    extend: 'Ext.app.Container',
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