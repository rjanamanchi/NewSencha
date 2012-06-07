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
			text : "Home",
			handler : this.backClicked,
			scope : this 
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
		
		var titleField = {
			xtype : "textfield",
			name : "title",
			label : "Title",
			required : true
		};
		
		var narrativeField = {
			xtype : "textfield",
			name : "narrative",
			label : "Narrative"
		};
		
		this.add([topToolBar],{xtype : "fieldset", items : [titleField,narrativeField]});
    },
	backClicked : function(){
		console.log("Back from New Container");
		this.fireEvent("backFromNewContainer",this);
	}
});
