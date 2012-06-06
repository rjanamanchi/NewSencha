Ext.define("NewSencha.controller.MainController", {
    extend: 'Ext.app.Controller',
	
	requires: ['Ext.MessageBox'],
	
	launch : function(){
		console.log('Launched Users! This happens after the Application launch function is called');
	},
	
	init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
    },
	
	config:{
		refs : {
		    maincontainer : "mainContainer"
		},
		control : {
			maincontainer : {
					addCaseCommand : "addCaseCommandReceived"
			}
		}
	},
	addCaseCommandReceived : function(){
		console.log('Add case received');
	}
	
});