Ext.define("NewSencha.view.MainContainer", {
    extend: 'NewSencha.view.BaseContainer',
	xtype: 'mainContainer',
	
	requires :[
		'NewSencha.store.ListStore',			
		'Ext.dataview.List'
	],
	
	config:{
		// this.callParent(arguments);
		items :[
		{
			xtype : "toolbar",
			docked : "top",
			title : "New Case",
			docked: 'top',
			items : [
			{
				xtype:'button',
				itemId:'actionButton',
				ui:'action',
				width:'13%',
				height:'10px'
			},
				{xtype : "spacer"}
			]
		},
		{
			xtype : 'casesList',
			store :'ListStore',
			loadingText : "Loading Cases…",
			emptyText : '</pre><div class = "cases-list-empty-text">No Notes Found</div><pre>',
			onItemDisclosure : true,
			itemTpl : '</pre><div class = "list-item-title">{title}</div><div class = "list-item-narrative">{narrative}</div><pre>',
			grouped : true
		}
		]
	}
});