Ext.define("NewSencha.controller.MainController", {
    extend: "Ext.app.Controller",
	
	launch : function(){
		this.callParent();
		alert("Launched");
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
		alert("Changes");
	}
});