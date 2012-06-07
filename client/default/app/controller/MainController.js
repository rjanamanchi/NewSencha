Ext.define("NewSencha.controller.MainController", {
    extend: 'Ext.app.Controller',
	
	requires: ['Ext.MessageBox'],
	
	launch : function(){
		console.log('Launched Users! This happens after the Application launch function is called');
	},
	
	init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
    },
	
	slideLeftTransition : { type : "slide", direction : "left"},
	slideRightTransition : {type : "slide", direction : "right"},
	
	config:{
		refs : {
		    maincontainer : "mainContainer",
			listContainer : "casesList",
			newcasecontainer : "newcaseeditor"
		},
		control : {
			maincontainer : {
				addCaseCommand : "addCaseCommandReceived"
			},
			listContainer : {
				discloseItemCommand : "discloseItemCommandReceived"
			}
		}
	},
	addCaseCommandReceived : function(){
		console.log('Add case received');
		var now = newcaseeditor Date();
		var listID = (now.getTime()).toString + this.getRandomInt().toString();
		var newList = Ext.create("NewSencha.model.ListItem",{
			id : listID,
			dateCreated : now,
			title : "",
			narrative : ""
		});
		this.activateListEditor(newList);
	},
	discloseItemCommandReceived : function (){
		console.log('Disclose case received');
	},
	getRandomInt : function(){
		return Math.floor(Math.random() % 1000);
	},
	activateListEditor : function(record){
		var editor = this.getNewcasecontainer();
		editor.setRecord(record);
		Ext.Viewport.animateActiveItem(editor,this.slideLeftTransition);
	}
});