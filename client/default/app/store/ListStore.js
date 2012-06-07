Ext.define("NewSencha.store.ListStore", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "NewSencha.model.ListItem",
        data: [
            { title: "Note 1", narrative: "narrative 1" },
            { title: "Note 2", narrative: "narrative 2" },
            { title: "Rote 3", narrative: "rarrative 3" },
            { title: "Rote 4", narrative: "rarrative 4" },
            { title: "Sote 5", narrative: "sarrative 5" },
            { title: "Sote 6", narrative: "sarrative 6" },
			{ title: "Sote 7", narrative: "sarrative 4" },
            { title: "Kote 1", narrative: "karrative 5" },
            { title: "Kote 1", narrative: "karrative 6" }
        ],
        sorters: [{ property: 'dateCreated', direction: 'DESC'}],
		grouper: function(record){
			return record.get("title");
		}
    }
});
