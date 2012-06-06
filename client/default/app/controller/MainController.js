Ext.define("NewSencha.controller.MainController", {
    extend: "Ext.app.Controller",
	requires : ['Ext.MessageBox'],
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
	Ext.Msg.confirm(
            "Application Change",
            "Working?",
            function() {
				console.log("button clicked");
			}
        );
	}
});