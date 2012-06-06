Ext.define("NewSencha.controller.SubController", {
    extend: "Ext.app.Controller",
	
	launch : function(){
		this.callParent();
		alert("Launched Sub");
	},
	
	config:{
		refs : {
		    buttonClicked : "#my-button-id1"
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