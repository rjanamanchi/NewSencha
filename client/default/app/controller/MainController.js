Ext.define("NewSencha.view.MainController", {
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
		alert('Button Clicked');
	}
});