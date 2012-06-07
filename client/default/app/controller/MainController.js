Ext.define("NewSencha.controller.MainController", {
    extend: 'Ext.app.Controller',
	
	requires: ['Ext.MessageBox'],
	
	launch : function(){
		console.log('Launched Users! This happens after the Application launch function is called');
	},
	
	init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
    },
	
	slideLeftTransition : { type : "slide", direction : "up"},
	slideRightTransition : {type : "slide", direction : "down"},
	
	config:{
		refs : {
		    maincontainer : "mainContainer",
			listContainer : "casesList",
			newcasecontainer : "newcaseeditor"
		},
		control : {
			maincontainer : {
				addCaseCommand : "addCaseCommandReceived",
				discloseItemCommand : "discloseItemCommandReceived"
			},
			newcasecontainer : {
				backFromNewContainer : "backToHomeCommand"
			}
		}
	},
	backToHomeCommand : function(){
		var homeScreen = this.getMaincontainer();
		Ext.Viewport.animateActiveItem(homeScreen,this.slideRightTransition);
	},
	
	discloseItemCommandReceived : function(list, record){
		console.log('Disclose case received');
		this.activateListEditor(record);
	},
	addCaseCommandReceived : function(){
		console.log('Add case received');
		var now = new Date();
		var listID = (now.getTime()).toString + this.getRandomInt().toString();
		var newList = Ext.create("NewSencha.model.ListItem",{
			id : listID,
			dateCreated : now,
			title : "",
			narrative : ""
		});
		this.activateListEditor(newList);
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