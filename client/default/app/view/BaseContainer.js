Ext.define("NewSencha.view.BaseContainer", {
    extend: 'Ext.Container',
	xtype: 'baseContainer',
	config:{
		items : [
		{
		xtype: 'panel',
        layout: 'hbox',
        cls: 'ribbon',
        height: 5,
        width: '100%',
		docked:'top'
		}
		]
	}
});