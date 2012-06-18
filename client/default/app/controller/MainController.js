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
		/*$fh.web({
			url: "https://www.google.co.in/search?q=item",
			method: "GET",
			contentType: "text/html",
			charset: "UTF-8",
			period: 60000 //cache for 1 min
			}, function(err, result) {
			if (err) {
				console.log("Error : " + err.message);
				if(result)
					console.log("Response is " + result.body);
			} else {
				var data = result.body;
				console.log("Response is " + data);
			}
		});*/
		/*$fh.feed({
			'link': "http://www.feedhenry.com/feed",
			'list-max': 10
			}, function(err, result) {
			if (err) {
				console.log("Error is : " + err.message);
			} else {
			entries = result.list;
			for (var i = 0; i < entries.length; i++) {
				console.log("Entry title : " + entries[i].fields.title + " : Content : " + entries[i].fields.description);
				}
			}
		});
		*/
		$fh.act({
			act:'webCloudCall'
		}, function(res) {
			console.log("Results are " + res.data);
			},
		 function(code,errorprops,params) {
			alert('Error retrieving web results: code: ' + code + " errorprops: " + errorprops + " params: " + params);
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