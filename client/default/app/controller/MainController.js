Ext.define("NewSencha.controller.MainController", {

	requires : ['Ext.MessageBox'],
    extend: 'Ext.app.Controller',
	launch : function(){
		this.callParent();
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
	Ext.Msg.confirm(
            "Application Change",
            "Working?",
            function() {
				console.log("button clicked");
			}
        );
	}
});