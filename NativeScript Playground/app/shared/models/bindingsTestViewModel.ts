import observableModule = require("data/observable");
import observableArrayModule = require("data/observable-array");
import itemModel = require("./itemModel");

class BindingsTestViewModel extends observableModule.Observable {
    sampleTextField: string;
    items: observableArrayModule.ObservableArray<itemModel>;
    nextId: Number = 200;
    
    constructor() {
        super();
        
        this.items = new observableArrayModule.ObservableArray<itemModel>();

        this.items.push(new itemModel(1, "It1", "Val11"));
        this.items.push(new itemModel(101, "Item 2", "Value 2"));
        this.items.push(new itemModel(102, "Item 3", "Value 3"));
        this.items.push(new itemModel(103, "Item 4", "Value 4"));
        this.items.push(new itemModel(104, "Item 104", "Value - TEST"));
    }

    add() {
        var name = this.get("name");
        var value = this.get("value");
        
        
        var newItemModel = new itemModel(
            this.getNextId(), name, value);

        this.items.push(newItemModel);
        this.set("name", "");
        this.set("value", "");
    }

    getNextId() {
        return this.nextId++;
    }
    remove() {
        console.log("inside remove method in main VM");
    }
}

export = BindingsTestViewModel;
