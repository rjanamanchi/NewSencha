Ext.define("NewSencha.view.MainContainer", {
    extend: 'Ext.Container',
	alias: 'widget.mainContainer',
	initialize: function(){
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
			{
				xtype : "spacer"
			},
				newButton
			] 
		};
		
		var list = {
			xtype : 'casesList',
			listeners : {
				disclose : { fn : this.onListItemDisclose, scope : this }
			}
		}
		
		this.add([toolBar, list]);
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