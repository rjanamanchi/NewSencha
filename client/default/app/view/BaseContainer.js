Ext.define("NewSencha.view.BaseContainer", {
    extend: 'Ext.Container',
	alias: 'widget.mainContainer',
	initialize: function(){
		var ribbon = {
		            xtype: 'panel',
		            layout: 'hbox',
		            cls: 'ribbon',
		            height: 5,
		            width: '100%',
		}
		
		this.add(ribbon);
	},
	config:{
		layout : {
			type : "fit"
		}
	}
});