var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observableModule = require("data/observable");

var ItemModel = (function (_super) {
    __extends(ItemModel, _super);
    function ItemModel(id, name, value) {
        _super.call(this);

        this.set("id", id);
        this.set("name", name);
        this.set("value", value);
    }
    ItemModel.prototype.remove = function () {
        debugger;
        this.set("value", "REMOVED");
    };
    return ItemModel;
})(observableModule.Observable);

module.exports = ItemModel;
//# sourceMappingURL=itemModel.js.map
