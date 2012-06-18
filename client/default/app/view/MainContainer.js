Ext.define("NewSencha.view.MainContainer", {
    extend: 'NewSencha.view.BaseContainer',
	xtype: 'mainContainer',
	config:{
		// this.callParent(arguments);
		items :[
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