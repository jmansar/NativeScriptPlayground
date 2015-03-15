var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observableModule = require("data/observable");
var observableArrayModule = require("data/observable-array");
var itemModel = require("./itemModel");

var BindingsTestViewModel = (function (_super) {
    __extends(BindingsTestViewModel, _super);
    function BindingsTestViewModel() {
        _super.call(this);
        this.nextId = 200;

        this.items = new observableArrayModule.ObservableArray();

        this.items.push(new itemModel(1, "It1", "Val11"));
        this.items.push(new itemModel(101, "Item 2", "Value 2"));
        this.items.push(new itemModel(102, "Item 3", "Value 3"));
        this.items.push(new itemModel(103, "Item 4", "Value 4"));
        this.items.push(new itemModel(104, "Item 104", "Value - TEST"));
    }
    BindingsTestViewModel.prototype.add = function () {
        var name = this.get("name");
        var value = this.get("value");

        var newItemModel = new itemModel(this.getNextId(), name, value);

        this.items.push(newItemModel);
        this.set("name", "");
        this.set("value", "");
    };

    BindingsTestViewModel.prototype.getNextId = function () {
        return this.nextId++;
    };
    BindingsTestViewModel.prototype.remove = function () {
        console.log("inside remove method in main VM");
    };
    return BindingsTestViewModel;
})(observableModule.Observable);

module.exports = BindingsTestViewModel;
//# sourceMappingURL=bindingsTestViewModel.js.map
