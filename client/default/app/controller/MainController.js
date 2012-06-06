Ext.define("NewSencha.view.MainController", {
    extend: 'Ext.app.Container',
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
			"Congrats", "Good?", function(){}
		)
	}
});