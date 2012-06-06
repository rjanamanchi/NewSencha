Ext.define("NewSencha.view.MainContainer", {
    extend: 'Ext.Container',
	config:{
	items:[
	{
		xtype : "toolbar",
		docked : "top",
		title : "My ToolBar",
		items : [
		{
			xtype : "spacer"
		},
		{
			xtype : "button",
			text : "Click",
			//ui : "action",// For a good UI finish to the button
			id : "my-button-id"
		}
		]
	}
	]
	}
});