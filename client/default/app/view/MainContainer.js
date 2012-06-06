Ext.define("NewSencha.view.MainContainer", {
    extend: 'Ext.Container',
	config:{
	items:[
	{
		xtype : "toolbar",
		docked : "top",
		title : "My ToolBar",
		items : {
			xtype : "button",
			text : "My Button",
			ui : "action",// For a good UI finish to the button
			id : "my-button-id"
		}
	}
	]
	}
});