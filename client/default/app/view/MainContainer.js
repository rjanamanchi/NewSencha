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
		this.add([toolBar]);
	},
	addButtonClicked : function (){
		console.log("New style");
	},
	config:{
		layout : {
			type : "fit"
		}
	}
});