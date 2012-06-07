Ext.define("NewSencha.view.NewCaseContainer", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.newcaseeditor",
    config:{
        scrollable:'vertical'
    },
    initialize: function () {
        this.callParent(arguments);
		
		var backButton = {
			xtype : "button",
			ui : "back",
			text : "Home" 
		};
		
		var topToolBar = {
			xtype : "toolbar",
			docked : "top",
			title : "New Case",
			items : [
				backButton, 
				{xtype : "spacer"}
			]
		};
		
		this.add([topToolBar]);
    }
});
