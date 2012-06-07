Ext.define("NewSencha.view.MainContainer", {
    extend: 'Ext.Container',
	alias: 'widget.mainContainer',
	initialize: function(){
		var newButtonLeft = {
			xtype: "button",
			text: "Fetch Cases",
			ui: "action",
			handler: this.fetchButtonClicked,
			scope:this
		};
		var newButton = {
			xtype: "button",
			text: "Add Case",
			ui: "action",
			handler: this.addButtonClicked,
			scope:this
		};   
		var toolBar = {
			xtype : "toolbar",
			docked : "top",
			title : "Cases",
			items : [
			newButtonLeft,
			{
				xtype : "spacer"
			},
				newButton
			] 
		};
		
		var list = {
			xtype : 'casesList',
			store :Ext.getStore("ListStore"),
			listeners : {
				disclose : {fn : this.onListItemDisclose, scope : this }
			}
		};
		
		this.add([toolBar, list]);
	},
	fetchButtonClicked : function(){
		console.log("Fetch button clicked");
	}, 
	
	addButtonClicked : function (){
		console.log("Add case command sent across");
		this.fireEvent("addCaseCommand", this);
	},
	onListItemDisclose : function (list, record, target, index, evt, options){
		console.log("Disclosure button clicked");
		this.fireEvent('discloseItemCommand', this, record);
	},
	config:{
		layout : {
			type : "fit"
		}
	}
});