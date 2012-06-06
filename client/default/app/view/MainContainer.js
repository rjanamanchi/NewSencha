Ext.define("NewSencha.view.MainContainer", {
    extend: 'Ext.Container',
	config:{
	items:[
	{
		xtype : "toolbar",
		docked : "top",
		title : "ToolBar",
		items : [
		{
			xtype : "spacer"
		},
		{
			xtype : "button",
			text : "ClickMe",
			ui : "action",// For a good UI finish to the button
			id : "my-button-id"
		},
		{
			xtype : "button",
			text : "ClickMe1",
			ui : "action",// For a good UI finish to the button
			id : "my-button-id1"
		}
		]
	}
	]
	}
});