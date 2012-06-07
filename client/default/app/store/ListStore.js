Ext.define("NewSencha.store.ListStore", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "NewSencha.model.ListItem",
        data: [
            { title: "Note 1", narrative: "narrative 1" },
            { title: "Note 2", narrative: "narrative 2" },
            { title: "Note 3", narrative: "narrative 3" },
            { title: "Note 4", narrative: "narrative 4" },
            { title: "Note 5", narrative: "narrative 5" },
            { title: "Note 6", narrative: "narrative 6" }
        ],
        sorters: [{ property: 'dateCreated', direction: 'DESC'}]
    }
});
