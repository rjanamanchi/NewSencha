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
				discloseItemCommand : "discloseItemCommandReceived",
				fetchCommand : "fetchCaseCommandReceived"
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
	
	fetchCaseCommandReceived : function(){
		console.log("Fetch Case Command Received - Start");
		$fh.web({
			url: "http://www.google.com",
			method: "GET",
			contentType: "text/html",
			charset: "UTF-8",
			period: 60000 //cache for 1 min
			}, function(err, result) {
			if (err) {
			console.log("Error : " + err.message);
			} else {
				var data = result.body;
				console.log("Response is " + data);
			}
		});
		console.log("Fetch Case Command Received - End");
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