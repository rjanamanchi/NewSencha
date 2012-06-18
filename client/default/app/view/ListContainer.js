Ext.define("NewSencha.view.ListContainer", {
    extend: 'Ext.dataview.List',
	xtype : 'casesList',
	config:{
		loadingText : "Loading Cases…",
		emptyText : '</pre><div class = "cases-list-empty-text">No Notes Found</div><pre>',
		onItemDisclosure : true,
		itemTpl : '</pre><div class = "list-item-title">{title}</div><div class = "list-item-narrative">{narrative}</div><pre>',
		grouped : true
	}
});