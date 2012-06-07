Ext.define("NewSencha.view.ListContainer", {
    extend: 'Ext.dataview.List',
	alias : "widget.casesList"
	config:{
		loadingText : "Loading Cases…",
		emptyText : '</pre><div class = "cases-list-empty-text"></div><pre>',
		onItemDisclosure : true,
		itemTpl : '</pre>
		<div class = "list-item-title">{title}</div>
		<div class = "list-item-narrative">{narrative}</div>
		<pre>'
	}
});