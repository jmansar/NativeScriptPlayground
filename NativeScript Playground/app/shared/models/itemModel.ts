import observableModule = require("data/observable");

class ItemModel extends observableModule.Observable {
    constructor(id: number, name: string, value: string) {
        super();
        
        this.set("id", id);
        this.set("name", name);
        this.set("value", value);
    }

    remove() {
        console.log("inside remove method in item model");
    }
}

export = ItemModel;