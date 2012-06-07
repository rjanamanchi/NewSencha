Ext.define("NewSencha.model.ListItem", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'title', type: 'string' },
            { name: 'narrative', type: 'string' }
        ],
		validations : [
			{type : 'presence', field : 'id'},
			{type : 'presence', field : 'dateCreated'}
		]
    }
});
