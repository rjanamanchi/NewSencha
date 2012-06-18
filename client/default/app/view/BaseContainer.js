Ext.define("NewSencha.view.BaseContainer", {
    extend: 'Ext.Container',
	alias: 'widget.baseContainer',
	initialize: function(){
		var ribbon = {
		            xtype: 'panel',
		            layout: 'hbox',
		            cls: 'ribbon',
		            height: 5,
		            width: '100%'
		};
		
		this.add([ribbon]);
	},
	config:{
		layout : {
			type : "fit"
		},
		var button : {
			xtype: "button",
			text: "Add Main View",
			ui: "action",
			docked:"bottom",
			handler: this.mainButtonClicked,
			scope:this
		},
		mainButtonClicked : function(){
			console.log("main button clicked");
			 this.fireEvent("mainCommand",this)
		}
	}
});