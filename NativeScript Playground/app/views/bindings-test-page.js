var bindingsTestViewModel = require("../shared/models/bindingsTestViewModel");
var viewModule = require("ui/core/view");

var viewModel = new bindingsTestViewModel();
var page;

function load(args) {
    page = args.object;
    page.bindingContext = viewModel;
}
exports.load = load;

function add() {
    viewModule.getViewById(page, "newItemName").dismissSoftInput();
    viewModule.getViewById(page, "newItemValue").dismissSoftInput();
    viewModel.add();
}
exports.add = add;
//# sourceMappingURL=bindings-test-page.js.map
