Ext.define("NewSencha.controller.MainController", {
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
		Ext.Msg.confirm("Congrats","good?",function(){});
	}
});